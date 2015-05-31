var chai = require('chai');
var chaihttp = require('chai-http');
var expect = chai.expect;

chai.use(chaihttp);

describe('time.js', function(){
		describe('get /time', function(){
			it('should retern a valid date', function(done){
				chai.request('localhost:3000')
					.get('/time')
					.end(function(err, res){
						if (err) throw err;
						var date = new Date(res.text);
						expect(isNaN(date.getTime())).to.eql(false);
						done();	
					});
			});
		});
});
