const devConfig = require('./webpack.config');
const stripLoader = require('strip-loader');
const webpack = require('webpack');

let WebpackStrip = {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    loader: stripLoader.loader('console.log')
};

devConfig.module.loaders.push(WebpackStrip);
devConfig.plugins.push(
    new webpack.optimize.OccurrenceOrderPlugin() 
);

devConfig.plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
);
devConfig.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
);

module.exports = devConfig;