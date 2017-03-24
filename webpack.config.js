const path = require('path');
const webpack = require('webpack');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    devtool: 'eval-source-map',
    entry: {
        main: [
            'eventsource-polyfill', //IE hot reloading
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
        new webpack.HotModuleReplacementPlugin(),
        new OpenBrowserPlugin({ url: 'http://localhost:8080' })
    ],
    devServer: {
        hot: true,
        inline: true,
        contentBase: './'
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.json']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/, 
                exclude: /node_modules/,
                loaders: ["react-hot-loader", "babel-loader"]
            },
            {
                test: /\.css$/,
                include: path.join(__dirname, 'src'),
                loader: ["style-loader", "css-loader", "autoprefixer-loader"]
            },
            {
                test: /\.eot(\?v=\d+.\d+.\d+)?$/, 
                loader: 'file-loader'
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
                loader: 'url-loader?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/, 
                loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
                loader: 'url-loader?limit=10000&mimetype=image/svg+xml'},
            {
                test: /\.(jpe?g|png|gif)$/i, 
                loader: 'file-loader?name=[name].[ext]'
            },
            {
                test: /\.ico$/, 
                loader: 'file-loader?name=[name].[ext]'
            },
        ]
    }
};