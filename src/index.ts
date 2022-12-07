import express from 'express';
import requestIp from 'request-ip';

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
    console.log(`Example app listening at http://localhost:${port}`)
});

app.get('/', (req, res) => {
    console.log(req.clientIp);
    res.setHeader('Content-Type', 'text/html')
    res.send(`
        <html>
            <head>
                <meta http-equiv="content-Type" content="text/html; utf-8" />
                <meta http-equiv="Pragma" content="no-cache" />
                <meta name="robots" content="NOINDEX,NOFOLLOW" />
                <meta http-equiv="content-Language" content="en" />
                <meta name="description" content="" />
                <meta name="keywords" content="" />
                <meta name="author" content="" />
                <meta name="publisher" content="" />
                <meta name="copyright" content="" />
                <meta http-equiv="Reply-to" content="" />
                <meta name="expires" content="" />
                <meta name="revisit-after" content="2 days" />
                <title>index.html</title>
            </head>
            <body>
                <h1>index.html</h1>
            </body>
        </html>
    `);
});