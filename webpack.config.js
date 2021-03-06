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
  entry: {
    app: [
      './src/views/root/index.tsx',
    ]
  },
  output: {
    path: path.resolve(__dirname, 'www/dist/'),
    publicPath: '/dist/',
    filename: '[name].bundle.js',
    sourceMapFilename: '[file].map'
  },
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.scss', '.css']
  },
  module:{
    rules: [{
      test: /\.tsx?$/,
      loader: 'awesome-typescript-loader',
      exclude: /(node_modules|bower_components)/
    },
    {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract({
        fallbackLoader: 'style-loader',
        loader: 'css?sourceMap!sass?sourceMap'
      }),
      exclude: /(node_modules|bower_components)/
    }]
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  },
  plugins: [
    new ExtractTextPlugin({filename: 'style.css',
      disable: false,
      allChunks: true
    })
  ],
  devtool: 'eval-source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: './www/'
  }
};