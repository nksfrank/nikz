var webpack = require('webpack'),
	ExtractTextPlugin = require('extract-text-webpack-plugin'),
	path = require('path');

function getEntrySources(sources) {
	if(process.env.NODE_ENV !== 'production') {
		sources.push('webpack-dev-server/client?http://localhost:8080');
		sources.push('webpack/hot/only-dev-server');
	}
	return sources;
}
module.exports = {
	entry: './client/__src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'client/'),
    filename: 'bundle.js',
    sourceMapFilename: '[file].map'
  },
	resolve: {
		root: path.resolve(__dirname),
		alias: {
			app: 'client/__src',
			service: 'client/__src/service',
			util: 'client/__src/util'
		},
		extensions: ['', '.js', '.jsx']
	},
	module:{
		loaders: [{
			test: /\.jsx?$/,
			loader: 'babel-loader',
			query: {
				presets: [
					'es2015',
					'react',
					'stage-0'
				]
			},
			exclude: /(node_modules|bower_components)/
		},
		{
			test: /\.scss$/,
			loader: ExtractTextPlugin.extract('style-loader', 'css?sourceMap!sass?sourceMap'),
			exclude: /(node_modules|bower_components)/
		}
	]},
	plugins: [
		new ExtractTextPlugin('style.css', {
			allChunks: true
		})
	],
	sassLoader: {
    includePaths: [ 'client/__src/styles' ]
  },
  devtool: 'eval-source-map',
	devServer: {
		historyApiFallback: true,
		contentBase: './client/'
	}
};