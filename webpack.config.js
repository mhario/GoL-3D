module.exports = {
	entry: './app/main.js',
	output: {
		filename: 'public/bundle.js'
	},
	devtool: 'source-map',
	watch: true,
	module: {
		rules: [
			{ test: /jsx?$/,
				use: [{
					loader: 'babel-loader',
					options: {
						compact: false
					}
				}]
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					'babel-loader',
					'eslint-loader',
				],
			}
		]
	}
}
