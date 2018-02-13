/**
 * @file Webpack dev config for pattern libraries
 * 
 */
const webpack = require('webpack');
const path = require('path')
const dvmConfig = require('../node_modules/davanmonet/dvm-build/utils/load-config').dvmConfig();
const LifecyclePlugin = require('../node_modules/davanmonet/dvm-build/plugins/webpack-lifecycle-plugin.js');

// https://github.com/JaKXz/stylelint-webpack-plugin
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
	module:
	{
		rules:
		[
			{ /* OPTIONAL: Angular support */
				test: /\.tsx?$/,
				loader: [
					{
						loader: 'awesome-typescript-loader',
						options: { configFileName: 'src/tsconfig.json' }
					},
					'angular2-template-loader'
				]
			},
			{ /* OPTIONAL: React support */
				test: /\.jsx?$/,
				exclude: /.*node_modules((?!davanmonet).)*$/,
				loader: 'babel-loader',
				query: {
					presets:[ 'stage-2', 'react' ]
				}
			}
		]	
	},
	plugins: [
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery",
			require:"requirejs"
		}),
		new webpack.ContextReplacementPlugin(/\@angular(\\|\/)core(\\|\/)esm5/, path.join(__dirname, './client')), /* OPTIONAL: Angular support */
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
