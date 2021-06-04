module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: [require.resolve('eslint-config-airbnb'), require.resolve('eslint-config-prettier')],
  plugins: ['prettier'],
  env: {
    browser: true,
    jest: true,
  },
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
  },
};
