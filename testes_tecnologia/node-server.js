var http = require('http');
http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write('Sou um servidor criado');
}).listen(3000, '127.0.0.1');
