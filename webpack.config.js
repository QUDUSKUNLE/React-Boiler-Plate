const webpack = require('webpack');
const path = require('path');

export default {
    entry: [
        'webpack-hot-middleware/./client',
        './client/index.jsx'
    ],
    devtool: 'source-map',
    output: {
        path: path.join(__dirname, '/client'),
        publicPath: '/',
        filename: 'index.js'
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],

    module: {
        loaders: [{
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: [
                    'react-hot-loader',
                    'babel-loader'
                ],
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