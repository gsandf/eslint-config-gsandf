# Changelog

## [Unreleased]

### Added

- [array-callback-return](https://eslint.org/docs/rules/array-callback-return) - Enforces return statements in callbacks of array’s methods
- [no-extra-label](https://eslint.org/docs/rules/no-extra-label) - Disallow unnecessary Labels (catches incorrectly formed objects)
- [no-native-reassign](https://eslint.org/docs/rules/no-native-reassign) - Sets many (browser) globals as read-only
- [no-restricted-syntax](https://eslint.org/docs/rules/no-restricted-syntax) - Used to disallow archaic `with` statements
- [no-restricted-globals](https://eslint.org/docs/rules/no-restricted-globals) - Disallow some globals. See https://github.com/facebook/create-react-app/blob/next/packages/confusing-browser-globals/index.js
- [no-unused-labels](https://eslint.org/docs/rules/no-unused-labels) - Disallow unnecessary Labels (catches incorrectly formed objects)
- [no-useless-concat](https://eslint.org/docs/rules/no-useless-concat) - Disallows concatenation of short (e.g. non-multiline) string literals
- [radix](https://eslint.org/docs/rules/radix) - ensures radix is specified (when using `as-needed`)
- [promise/no-new-statics](https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/no-new-statics.md) - avoids TypeErrors from calling `new` on a Promise static method
- Created CHANGELOG.md

### Changed

- The [camelcase](https://eslint.org/docs/rules/camelcase) rule is now more
  lenient. This should result in fewer errors when working with, for example,
  HTTP headers or external libraries that use snake case.

### Removed

- Disabled the [sort-keys](https://eslint.org/docs/rules/sort-keys) rule. This
  was removed to reduce time spent doing stylistic tweaks.

## [1.0.1]

### Changed

- Upgrade `eslint-config-standard` to support new versions of ESLint

## [1.0.0] - 2017-11-13

### Added

- Create project setup with README, etc.
- Create first configuration, mostly just extending
  [`eslint-config-standard`](https://github.com/standard/eslint-config-standard)

[unreleased]: https://github.com/gsandf/eslint-config-gsandf/compare/v1.0.0...HEAD
[1.0.1]: https://github.com/gsandf/eslint-config-gsandf/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/gsandf/eslint-config-gsandf/releases/tag/v1.0.0
