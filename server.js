var http = require('http');
var root = require('./lib/root.js');
var timeRoutes = require('./lib/time.js');
var greet = require('./lib/greet.js');

var routes = {
	GET: {},
	POST: {}
};

root(routes);
timeRoutes(routes);
greet(routes);

function fourOhfour(res){
	res.writeHead(404, {"Content-Type" : "text/html"});
	res.write('for ohhh four suuuucka');
	res.end();
};

var server = http.createServer(function(req, res){
	console.log(req.method);	
	console.log(req.url.split('/'));

	if (req.method == 'GET' && routes.GET['/'+req.url.split('/')[1]]){
		console.log('that get methods gun work fer us');
		var greetStr = routes[req.method]['/'+req.url.split('/')[1]](req);
		if (greetStr !== ''){	
			res.writeHead(200, {"Content-Type" : "text/html"});
			res.write(greetStr);
			res.end();
		} 
		fourOhfour(res);
	} else if (req.method == 'POST' && routes.POST['/'+req.url.split('/')[1]]){
		console.log('lulpost');
		var body = '';
		req.on('data', function(data){
			console.log('hit req on data');	
			body = data.toString();
		});
		req.on('end', function(data){
			if (!body) body = data.toString();
			console.log('hit req on end');
			console.log(body);
			var greetStr = routes.POST['/'+req.url.split('/')[1]](body);
			if (greetStr !== '') {
				console.log('greetStr dont eql empty string');
				res.writeHead(200, {"Content-Type" : "text/html"});
				res.write(greetStr);
				res.end();
			}
			console.log(greetStr);
			fourOhfour(res);
		});
	} else {
		fourOhfour(res);
	}	
	
});

server.listen(3000);
