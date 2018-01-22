/**
 * @file Webpack dev config for pattern libraries
 * 
 */

const dvmConfig = require('../node_modules/davanmonet/dvm-build/utils/load-config').dvmConfig();
const LifecyclePlugin = require('../node_modules/davanmonet/dvm-build/plugins/webpack-lifecycle-plugin.js');

// https://github.com/JaKXz/stylelint-webpack-plugin
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
	plugins: [
		new LifecyclePlugin(
		{
			"done": (compilation, options, pluginOptions) =>
			{

			}
		}),
		new StyleLintPlugin(
		{
			"configFile": "./configs/.stylelintrc",
			"context":dvmConfig.directories.src,
			"emitErrors":true,
			"failOnError":false,
			"quiet":false,
			"files":['**/*.s?(a|c)ss', '**/*.less']
		}),
	]
};
