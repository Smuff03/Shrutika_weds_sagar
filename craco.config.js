/**
 * Minimal CRACO configuration.
 * Add custom webpack, Babel, or other overrides here.
 */
const path = require('path');
module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
};
