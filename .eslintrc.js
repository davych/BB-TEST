module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: ['eslint-config-prettier', 'eslint-config-standard-react'],
  plugins: ['prettier'],
  env: {
    browser: true,
    jest: true,
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
};
