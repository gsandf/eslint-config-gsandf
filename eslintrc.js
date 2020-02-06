const restrictedGlobals = require('confusing-browser-globals');

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },

  extends: ['standard', 'plugin:prettier/recommended'],

  globals: {
    document: 'readonly',
    navigator: 'readonly',
    window: 'readonly'
  },

  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true
    },
    sourceType: 'module'
  },

  rules: {
    'array-callback-return': ['error'],
    camelcase: [
      'error',
      {
        // Allows UNSAFE functions in React to be used and flagged by a
        // different rule.
        allow: ['^UNSAFE_'],
        ignoreDestructuring: true,
        ignoreImports: true,
        properties: 'never'
      }
    ],
    'no-debugger': ['warn'],
    'no-extra-label': ['error'],
    'no-implicit-coercion': ['warn'],
    'no-restricted-globals': ['error'].concat(restrictedGlobals),
    'no-restricted-syntax': ['error', 'WithStatement'],
    'no-var': ['error'],
    'prefer-const': ['error'],
    radix: ['error', 'as-needed'],
    'require-yield': ['error'],
    semi: ['error', 'always'],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        asyncArrow: 'always',
        named: 'never'
      }
    ],

    'promise/no-new-statics': ['error']
  }
};
