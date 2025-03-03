// // commonjs (default) (no type: module in package.json)
// // const http = require('http');
// // es6 (ecmascript 6) ( add type: module in package.json)
import http from 'http';

const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/plain');
    // res.end("Hello World!!");
    res.setHeader('Content-Type', 'text/html');
    res.end("<h1>Hello World!!</h1>");
});

server.listen(port, hostname, () => {
    console.log(`Server is running on http://${hostname}:${port}`);
});

