module.exports = {
	entry: './app/main.js',
	output: {
		filename: 'public/bundle.js'
	},
	devtool: 'source-map',
	module: {
		rules: [
			{ test: /jsx?$/,
				use: [{
					loader: 'babel-loader',
					options: {
						compact: false
					}
				}]
			}
		]
	}
}
