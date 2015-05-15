var getGreet = function(req){
	console.log(req.url);
	var name = req.url.split('/')[2];
	if (!name || name == '' ) return '';
	return 'whatsup ' + name;
};

var postGreet = function(body){
		try {
			body  = JSON.parse(body);
		} catch (e) {
			return '';
		}
		if (body.name) return 'whatsup ' + body.name; 
		return '';
};

module.exports = function(routes){
	routes.GET['/greet'] = getGreet;
	routes.POST['/greet'] = postGreet;
};
