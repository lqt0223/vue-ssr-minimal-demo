const webpack = require('webpack');
const config = require('./webpack.client.config.js');
const WebpackDevServer = require('webpack-dev-server');
const compiler = webpack(config);

const devServerOptions = config.devServer;

const app = new WebpackDevServer(compiler, devServerOptions);

app.listen(8080, 'localhost', () => console.log('Example app listening on port 8080!'));
