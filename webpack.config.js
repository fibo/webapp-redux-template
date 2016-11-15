const webpack = require('webpack')
const path = require('path')

module.exports = {
  devtool: 'cheap-source-map',
  entry: [
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    './dev/init.js'
  ],
  output: {
    path: path.join(__dirname, 'dev'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      exclude: /node_modules/,
      test: /\.js$/,
      loaders: ['babel']
    }]
  }
}
