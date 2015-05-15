var getTime = function(req){
	return new Date().toString();
};

module.exports = function(routes){
	routes.GET['/time'] = getTime;
};
