var slash = function(req){
	return '<h1> SUP SLUG </h1>' ;
};

module.exports = function(routes){
	routes.GET['/'] = slash;
};
