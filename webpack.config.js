var webpack = require('webpack'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  path = require('path');

module.exports = {
  entry: {
    app: [
      './src/index.tsx',
    ]
  },
  output: {
    path: path.resolve(__dirname, 'www/dist/'),
    publicPath: '/dist/',
    filename: '[name].bundle.js',
    sourceMapFilename: '[file].map'
  },
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.scss', '.css'],
    alias: {
      styles: path.join(__dirname, 'src/styles'),
      app: path.join(__dirname, 'src/components'),
      platform: path.join(__dirname, 'src/components/shared/platform')
    }
  },
  module:{
    rules: [{
      test: /\.tsx?$/,
      use: 'awesome-typescript-loader',
      exclude: /(node_modules|bower_components)/
    },
    {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        loader: 'typings-for-css-modules-loader?modules&sass&namedExport&camelCase!sass-loader'
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
    inline: true,
    historyApiFallback: true,
    contentBase: './www/'
  }
};