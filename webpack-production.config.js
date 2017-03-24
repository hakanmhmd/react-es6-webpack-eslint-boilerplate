const devConfig = require('./webpack.config');
const stripLoader = require('strip-loader');

var WebpackStrip = {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    loader: stripLoader.loader('console.log')
}

devConfig.module.loaders.push(WebpackStrip);

module.exports = devConfig;