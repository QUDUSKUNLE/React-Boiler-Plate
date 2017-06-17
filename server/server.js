// Setting up server

import express from 'express';
import path from 'path';

// Webpack dependencies
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
// webpackHotMiddleware for auto reloading of page
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from '../webpack.config.js';


const app = express();

const compiler = webpack(config);
// App to use middleware
app.use(webpackMiddleware(compiler, {
    hot: true,
    publicPath: config.output.publicPath,
    noInfo: true
}));
app.use(webpackHotMiddleware(compiler));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

// App port
app.listen(3000, () => console.log('Listening on localhost:3000'));