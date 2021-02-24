const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config.js');
const path = require('path');
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = merge(baseConfig, {
  entry: './src/entry-server.js',
  target: 'node',
  output: {
    libraryTarget: 'commonjs2'
  },
  externals: nodeExternals({
    allowlist: /\.css$/
  }),
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['css-loader']
      }
    ]
  },
  plugins: [
    new VueSSRServerPlugin(),
  ]
});
