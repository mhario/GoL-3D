const path = require('path')
/* global __dirname */

module.exports = {
	entry: {
		bundle: './app/main.js',
		styles: './app/styles/index.scss'
	},
	output: {
		filename: 'public/build/[name].js'
	},
	// devtool: 'source-map',
	watch: true,
	module: {
		rules: [
			{
				test: /jsx?$/,
				use: [{
					loader: 'babel-loader',
					options: {
						compact: false
					}
				}]
			},
			{
				test: /\.js$/,
				include: path.resolve(__dirname, 'app'),
				exclude: /node_modules/,
				use: [
					'babel-loader',
					'eslint-loader',
				]
			},
			{
				test: /\.scss$/,
				include: path.resolve(__dirname, 'app/styles'),
				
				exclude: /node_modules/,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader"
				]
			}
		]
	}
}
