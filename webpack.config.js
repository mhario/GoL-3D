module.exports = {
	entry: './app/main.js',
	output: {
		filename: 'public/bundle.js'
	},
	devtool: 'source-map',
	module: {
		rules: [
			{ test: /jsx?$/, use: 'babel-loader' }
		]
	}
}
