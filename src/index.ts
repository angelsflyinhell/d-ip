import express from 'express';
import requestIp from 'request-ip';
import fs from 'fs';
import stream from 'stream';

const app = express();
const port = 3000;

app.use(requestIp.mw())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', `*`);
    res.header('Access-Control-Allow-Methods', 'GET, POST');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.listen(port, () => {
    console.log(`d-ip listening at http://localhost:${port}`)
});

app.get('/', (req, res) => {
    console.log(req.clientIp);
    res.setHeader('Content-Type', 'text/html')
    res.send(`
        <html>
            <head>
                <meta property="twitter:card" content="summary_large_image">
                <meta property="twitter:url" content="https://dip.qwq.sh/">
                <meta property="twitter:title" content="index.html">
                <meta property="twitter:description" content="">
                <meta property="twitter:image" content="https://dip.qwq.sh/image.jpg">
                <title>index.html</title>
            </head>
            <body>
                <h1>index.html</h1>
            </body>
        </html>
    `);
});

app.get('/image.jpg', (req, res) => {
    res.sendFile(__dirname + '/image.jpg');
});