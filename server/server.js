// Setting up server

import express from 'express';
import path from 'path';

// Webpack dependencies
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import config from '../webpack.config.js'
const app = express();


// App to use middleware
app.use(webpackMiddleware(webpack(config)));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

// App port
app.listen(3000, () => console.log('Listening on localhost:3000'));