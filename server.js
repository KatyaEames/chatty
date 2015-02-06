var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = 12200;

var message = [];

app.use(bodyParser.json());

app.listen(12200);

app.use(function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
	res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested, Content-Type, Accept');
	next();
})

app.get('/', function(req, res) {
	console.log('test')
	res.send('test')
})

app.post('/', function(req, res) {
	messages.push(req.body);
	res.json({messages: message})
})






































// var http = require('http');

// var onRequest = function(req, res) {
// 	console.log("handling request")
//     if (req.method == 'POST') {
//        var postData = '';
//        req.on('data', function(chunk) {
//            postData += chunk.toString();
//         });    
//         req.on('end', function() {
//             console.log("Got POST data:");
//             console.log(JSON.parse(postData));
//        });
//     }
//     res.writeHead(200, {
//     	'Connection': 'close',
//    		'Content-Type': 'application/json',
//     	'Access-Control-Allow-Origin': '*'
//    	});
//     res.end(JSON.stringify({message: 'Hello World'}));
// }
// http.createServer(onRequest).listen(12200);
// console.log('listening on port 12200');

