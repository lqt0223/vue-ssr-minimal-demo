const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config.js');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = merge(baseConfig, {
  entry: './src/entry-client.js',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new VueSSRClientPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: './index.client.template.html'
    })
  ],
  devServer: {
    hot: true,
    historyApiFallback: true
  }
});
