const { override, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
 
  webpack: override(
    addWebpackAlias({
      '@': path.resolve(__dirname, 'src'),
    }),
  ),
  jest: function(config) {
    config.coverageThreshold = {
      global: {
        branches: 6,
        functions: 8,
        lines: 6,
        statements: -500
      }
    }

    return config;
},
);
