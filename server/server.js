// Setting up server

import express from 'express';
import path from 'path';

const app = express();


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'));
});

// App port
app.listen(3000, () => console.log('Listening on localhost:3000'));