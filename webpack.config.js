var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var HTMLWebpackPlugin = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  hash: true,
  filename: 'index.html',
  inject: 'body'
});
var HotReloader = new webpack.HotModuleReplacementPlugin();

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/dev-server',
    './app/App.js'
  ],
  output: {
    path: 'dist',
    filename: 'index_bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'react-hot!babel',
        include: __dirname + '/app'
      },
      { test: /\.css$/, loader: "style-loader!css-loader" },
    ]
  },
  plugins: [HTMLWebpackPlugin, HotReloader],
  devServer: {
    contentBase: __dirname + '/dist',
    hot: true,
  }
};
