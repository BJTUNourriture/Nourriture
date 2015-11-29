var should = require('should');
var request = require('supertest');
var mongoose = require('mongoose');

/*Checks if App was launched*/
if (mongoose.connection.readyState === 0)
{
	var standalone_test = true;
	process.env.NODE_ENV = 'test'
	var app = require('../../app');
}

/*Url of the server*/
var url = 'http://localhost:8101';

/*Testing of the /api/types endpoint*/
describe('/api/types', function() {

	if (standalone_test)
	{
		/*Clears all the collections to have an empty DB*/
	  	before(function(done) {
	  		for (var i in mongoose.connection.collections) {
		    	mongoose.connection.collections[i].remove(function() {});
		   	}
	  		done();
	 	});
	}

	/*Testing vars*/
	var type_id = "";

	describe("Types Creation", function () {
		it('should successfully create three types', function(done) {
		  	var ingredient = {
				name: "test"
			};

			var ingredient2 = {
				name: "testkek"
			};

			var ingredient3 = {
				name: "test3"
			}

			request(url)
				.post('/api/types')
				.send(ingredient3)
				.end(function(err, res) {
					  if (err)
						throw err;
					res.status.should.be.equal(200);
				});

			request(url)
				.post('/api/types')
				.send(ingredient2)
				.end(function(err, res) {
					  if (err)
						throw err;
					res.status.should.be.equal(200);
				});

			request(url)
				.post('/api/types')
				.send(ingredient)
				.end(function(err, res) {
					  if (err)
						throw err;
					res.status.should.be.equal(200);
					done();
				});
		});
	});

	if (standalone_test)
	{
		/*Disconnects mongoose from the DB*/
		after(function(done) {
			mongoose.disconnect();
			done();
		})
	}
});

module.exports = "tests-type";