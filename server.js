var messages = ["I was 11. ... And a half"]

var onRequest = function(req, res) {
  res.writeHead(200, {
    'Connection': 'close',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  });
  res.end(JSON.stringify({message: 'Hello World'}));
}

var http = require('http');
http.createServer(onRequest).listen(12200);
console.log('listening on port 12200');