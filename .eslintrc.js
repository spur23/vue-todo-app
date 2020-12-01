module.exports = {
  root: true,
  plugins: ['prettier'],
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/prettier',
    'eslint-config-prettier'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingcomma: false,
        arrowParens: 'always',
        bracketspace: true,
        semi: true,
        jsxBracketSameLine: true
      }
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
};
