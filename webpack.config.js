var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        main: [
            './src/main.js'
        ]
    },
    output: {
        filename: './bundle.js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                include: path.join(__dirname, 'src'),
                loaders: ["babel-loader"]
            }
        ]
    }
};