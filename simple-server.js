const http = require('http');
const fs = require('fs');

http.createServer(function () {
  fs.writeFileSync('hello-world.txt', 'Hello to this great world', 'utf8');
}).listen(3000);
