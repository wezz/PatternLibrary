/**
 * @file Webpack dev config for pattern libraries
 * 
 */
const LifecyclePlugin = require('../node_modules/davanmonet/dvm-build/plugins/webpack-lifecycle-plugin.js');

module.exports = {
  plugins: [
    new LifecyclePlugin({"done": (compilation, options, pluginOptions) =>
    {
      
    }}),
  ]
};