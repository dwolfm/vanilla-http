var chai = require('chai');
var chaihttp = require('chai-http');
var expect = chai.expect;

chai.use(chaihttp);

describe('root.js', function(){
	describe('get /', function(){
		it('should return status 200', function(done){
			chai.request('localhost:3000')
				.get('/')
				.end(function(err, res){
					if (err) throw err;
					expect(res.status).to.eql(200);
					done();
				});
		});
	});
	describe('get /lul', function(){
		it('should return status 404', function(done){
			chai.request('localhost:3000')
				.get('/lul')
				.end(function(err, res){
					if (err) throw err;
					expect(res.status).to.eql(404);
					done();
				});
		});
	});
});
