module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },

  extends: 'standard',

  rules: {
    camelcase: ['error', { properties: 'always' }],
    'no-debugger': ['warn'],
    'no-var': ['error'],
    'prefer-const': ['error'],
    semi: ['error', 'always'],
    'sort-keys': ['error', 'asc', {
      'caseSensitive': false,
      'natural': false
    }]
    'space-before-function-paren': ['error', {
        anonymous: 'always',
        asyncArrow: 'always',
        named: 'never'
      }
    ]
  }
}
