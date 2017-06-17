const webpack = require('webpack');
const path = require('path');

export default {
    entry: [
        './client/index.jsx'
    ],
    devtool: 'source-map',
    output: {
        path: path.join(__dirname, '/client'),
        publicPath: '/',
        filename: 'index.js'
    },

    module: {
        loaders: [{
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss?$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
};