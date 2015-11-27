var should = require('should');
var request = require('supertest');
var mongoose = require('mongoose');
var User = require('../../API/models/users');
var Ingredients = require('../../API/models/ingredients');

/*Checks if App was launched*/
if (mongoose.connection.readyState === 0)
{
	var standalone_test = true;
	process.env.NODE_ENV = 'test'
	var app = require('../../app');
}

/*Url of the server*/
var url = 'http://localhost:8101';

/*Testing of the /api/tags endpoint*/
describe('/api/search/ingredients', function() {	

	/*Testing vars*/

	var ingredient = new Ingredients({
		name : "toto",
		fat: 100
	});

	var ingredient2 = new Ingredients({
		name : "tata",
		fat: 500
	});

	var ingredient3 = new Ingredients({
		name : "kekusoptimus",
		fat: 10
	});

	var ingredient4 = new Ingredients({
		name : "ThisIsSpartkek",
		fat: 30
	});



	describe("Search Ingredients", function () {
		it('should successfully search ingredients', function(done) {

		request(url)
			.post('/api/ingredients')
			.send(ingredient)
			.end(function(err, res) {
			});

		request(url)
			.post('/api/ingredients')
			.send(ingredient2)
			.end(function(err, res) {
			});

		request(url)
			.post('/api/ingredients')
			.send(ingredient3)
			.end(function(err, res) {
			});

		request(url)
			.post('/api/ingredients')
			.send(ingredient4)
			.end(function(err, res) {
			});

		var s_ingredient = {
				metadata: {
					"page": 1,
					"item": 1
				}
			};

		request(url)
			.post('/api/search/ingredients')
			.send(s_ingredient)
			.end(function(err, res) {
				  if (err)
					throw err;
				res.status.should.be.equal(200)
				done();
			});


		});

	it('should search some ingredients by name', function(done) {

		var s_ingredient = {
			"name": "toto",
			metadata: {
				"page": 1,
				"item": 1
			}
		};

		request(url)
			.post('/api/search/ingredients')
			.send(s_ingredient)
			.end(function(err, res) {
				  if (err)
					throw err;
				res.status.should.be.equal(200);
				res.body.metadata.total.should.be.equal(1)
				done();
			});


		});

	it('should search some ingredients with wrong name', function(done) {

		var s_ingredient = {
			"name": "AZERTY",
			metadata: {
				"page": 1,
				"item": 1
			}
		};

		request(url)
			.post('/api/search/ingredients')
			.send(s_ingredient)
			.end(function(err, res) {
				  if (err)
					throw err;
				res.status.should.be.equal(404);
				done();
			});


		});

	it('should send 400 if metadata are empty', function(done) {
		var s_ingredient = {
			"name": "toto"
		};

		request(url)
			.post('/api/search/ingredients')
			.send(s_ingredient)
			.end(function(err, res) {
				  if (err)
					throw err;
				res.status.should.be.equal(400);
				done();

		});
	});

	it('should order ingredients by field', function(done) {
			var s_ingredient = {
			metadata: {
				"page": 1,
				"item": 1
			},
			order: {"field": "fat", 
				"order":"asc"}
		}

		request(url)
			.post('/api/search/ingredients')
			.send(s_ingredient)
			.end(function(err, res) {
				  if (err)
					throw err;
				res.status.should.be.equal(200);
				res.body.metadata.total.should.be.equal(4)
				res.body.ingredients[0].fat.should.be.equal(10)
				res.body.ingredients[1].fat.should.be.equal(30)
				res.body.ingredients[2].fat.should.be.equal(100)
				res.body.ingredients[3].fat.should.be.equal(500)
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
	else
	{
		after(function(done) {
			for (var i in mongoose.connection.collections) {
		    	mongoose.connection.collections[i].remove(function() {});
		   	}
	  		done();
		})
	}

	


});