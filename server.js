const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const devConfig = require('./webpack.config');
const prodConfig = require('./webpack.config.production');

new WebpackDevServer(webpack(devConfig), { //change to prodConfig to run the production configuration instead
  publicPath: devConfig.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(8080, 'localhost', function (err) {
  if (err) {
    return console.log(err);
  }

  console.log('Listening at http://localhost:8080/');
});