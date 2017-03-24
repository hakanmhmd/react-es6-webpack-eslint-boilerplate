var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var devConfig = require('./webpack.config');
var prodConfig = require('./webpack-production.config');

new WebpackDevServer(webpack(devConfig), {
  publicPath: devConfig.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(8080, 'localhost', function (err) {
  if (err) {
    return console.log(err);
  }

  console.log('Listening at http://localhost:8080/');
});