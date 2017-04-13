module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },

  extends: 'standard',

  rules: {
    'no-var': ['error'],
    'prefer-const': ['error'],
    semi: ['error', 'always'],
    'space-before-function-paren': ['error', {
        anonymous: 'always',
        asyncArrow: 'always',
        named: 'never'
      }
    ]
  }
}
