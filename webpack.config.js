var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'eval-source-map',
    entry: {
        main: [
            'webpack-dev-server/client?http://localhost:8080',
            'webpack/hot/only-dev-server',
            './src/main.js'
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        hot: true,
        contentBase: './'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                include: path.join(__dirname, 'src'),
                loaders: ["react-hot-loader", "babel-loader"]
            },
            {
                test: /\.css$/,
                include: path.join(__dirname, 'src'),
                loader: ["style-loader", "css-loader"]
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: ["babel-loader", "eslint-loader"]
            }

        ]
    }
};