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
    res.send('<h2>Test String</h2>');
});