const express = require("express"); 
const bodyParser = require("body-parser");  //http 바디태그해석

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    limit: '150mb',
    extended: true,
}));

app.all('/', (req, res) => {   //요청반환값
    res.send('Hi.');
});

let serverName = 'boy';

app.get('/whoami', (req, res) => {
    res.send(req.query.name);
});

app.get('/whoareu', (req, res) => {
    res.send(serverName);
});

app.post('/youare', (req, res) => {
    serverName = req.body.name;
    res.sendStatus(200);  //잘처리되엇다
});
const server = require('http').createServer(app);    //서버생성
server.listen(3000);