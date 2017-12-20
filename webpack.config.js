const path = require('path')

module.exports = {
	entry: './app/main.js',
	output: {
		filename: 'public/bundle.js'
	},
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'env']
        }
      }
    ]
  }
}
