import test from 'ava';
import eslint from 'eslint';
import { basename } from 'path';

const linter = new eslint.CLIEngine({ configFile: './eslintrc.js' });
const unique = arr => Array.from(new Set(arr));

test('should pass files that have no issues', t => {
  const results = linter.executeOnFiles(['test-helpers/pass/**/*.js']);

  const errorMessages = () =>
    results.results.map(r => unique(r.messages.map(rule => rule.ruleId)));

  t.is(
    results.errorCount,
    0,
    `Unexpectedly failed with these errors: ${errorMessages()}`
  );
});

test('should fail on files with issues', t => {
  const { results } = linter.executeOnFiles(['test-helpers/fail/**/*.js']);

  results.forEach(({ filePath, messages, errorCount }) => {
    t.true(errorCount > 0);

    const testedRule = basename(filePath, '.js');
    const rules = messages.map(rule => rule.ruleId.replace(/\//g, '_'));

    t.assert(
      rules.includes(testedRule),
      `Expected to find ${testedRule} in [${rules.join(', ')}]`
    );
  });
});
