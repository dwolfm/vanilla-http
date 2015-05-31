var chai = require('chai');
var chaihttp = require('chai-http');
var expect = chai.expect;

chai.use(chaihttp);

describe('greet.js', function(){
	describe('/greet', function(){
		describe('get /greet/duncan', function(){
			it('should return whatsup duncan', function(done){
				chai.request('localhost:3000')
					.get('/greet/duncan')
					.end(function(err, res){
						if (err) throw err;
							expect(res.text).to.eql('whatsup duncan');
							done();
					});
			});
		});
		describe('post /greet {name: "slug"}', function(){
			it('should return whatsup slug', function(done){
				chai.request('localhost:3000')
					.post('/greet')
					.send({name:"slug"})
					.end(function(err, res){
						if (err) throw err;
						expect(res.text).to.eql('whatsup slug');
						done();
					});
			});
		});
	});
});
