import http from 'http';
import sum from './sum.js';

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8', });
  res.end('Aprendiendo en The Bridge! </br> La suma de 1+3 = ' + sum(1, 3));
})
  .listen(8080);
