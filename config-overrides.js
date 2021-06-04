const { override, useEslintRc, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
  useEslintRc('.eslintrc.js'),

  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
  }),
);
