var messages = ["I was 11. ... And a half.", "Hello Dean", ""]

var http = require('http');

var onRequest = function(req, res) {
	console.log("handling request")
    if (req.method == 'POST') {
       var postData = '';
       req.on('data', function(chunk) {
           postData += chunk.toString();
        });    
        req.on('end', function() {
            console.log("Got POST data:");
            console.log(JSON.parse(postData));
       });
    }
    res.writeHead(200, {
    	'Connection': 'close',
   		'Content-Type': 'application/json',
    	'Access-Control-Allow-Origin': '*'
   	});
    res.end(JSON.stringify({message: 'Hello World'}));
}
http.createServer(onRequest).listen(12200);
console.log('listening on port 12200');

