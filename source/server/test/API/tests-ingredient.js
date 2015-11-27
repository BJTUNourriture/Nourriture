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

/*Testing of the /api/ingredients endpoint*/
describe('/api/ingredients', function() {

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
	var ingredient_id = "";

	describe("Ingredients Creation", function () {
		it('should successfully create three ingredients', function(done) {
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
				.post('/api/ingredients')
				.send(ingredient3)
				.end(function(err, res) {
					  if (err)
						throw err;
					res.status.should.be.equal(200);
				});

			request(url)
				.post('/api/ingredients')
				.send(ingredient2)
				.end(function(err, res) {
					  if (err)
						throw err;
					res.status.should.be.equal(200);
				});

			request(url)
				.post('/api/ingredients')
				.send(ingredient)
				.end(function(err, res) {
					  if (err)
						throw err;
					res.status.should.be.equal(200);
					done();
				});
		});

		it('should not create an ingredient with the same name', function(done) {
		  	var profile = {
				name: 'test'
			};

			request(url)
				.post('/api/ingredients')
				.send(profile)
				.end(function(err, res) {
					  if (err)
						throw err;
					res.status.should.be.equal(400);
					done();
				});
		});

		it('should not create an ingredient without the name key', function(done) {
		  	var profile = {
				lol: 'test'
			};

			request(url)
				.post('/api/ingredients')
				.send(profile)
				.end(function(err, res) {
					  if (err)
						throw err;
					res.status.should.be.equal(400);
					done();
				});
		});
	});

	describe('Ingredients Retrieval', function() {
		it('should retrieve all the ingredients' , function(done) {

			request(url)
				.get('/api/ingredients/')
				.end(function(err, res) {
					  if (err)
						throw err;
					res.status.should.be.equal(200);
					res.body.should.be.lengthOf(3);
					done();
				});
		});

		it('should retrieve an ingredient by it\'s name' , function(done) {

			request(url)
				.get('/api/ingredients/name/test')
				.end(function(err, res) {
					  if (err)
						throw err;
					res.status.should.be.equal(200);
					res.body[0].name.should.be.equal("test");
					ingredient_id = res.body[0]._id;
					done();
				});
		});

		it('should retrieve an ingredient by it\'s partial name' , function(done) {

			request(url)
				.get('/api/ingredients/name/es')
				.end(function(err, res) {
					  if (err)
						throw err;
					res.status.should.be.equal(200);
					res.body[0].name.should.be.equal("test");
					done();
				});
		});

		it('should return 404 on non-existant name' , function(done) {

			request(url)
				.get('/api/ingredients/name/ass')
				.end(function(err, res) {
					  if (err)
						throw err;
					res.status.should.be.equal(404);
					done();
				});
		});

		it('should retrieve an ingredient by it\'s Id' , function(done) {

			request(url)
				.get('/api/ingredients/id/'+ ingredient_id)
				.end(function(err, res) {
					  if (err)
						throw err;
					res.status.should.be.equal(200);
					res.body.name.should.be.equal("test");
					done();
				});
		});

		it('should return 404 on non-existant Id' , function(done) {

			request(url)
				.get('/api/ingredients/id/'+ mongoose.Types.ObjectId())
				.end(function(err, res) {
					  if (err)
						throw err;
					res.status.should.be.equal(404);
					done();
				});
		});
	});

	describe('Ingredients Update', function() {
		it('should update all the ingredient\'s fields by Id' , function(done) {

			request(url)
				.put('/api/ingredients/id/'+ ingredient_id)
				.send({
					"name" : "test",
					"description" : "test",
					"calories" : 1,
					"fat" : 1,
					"carbohydrates" : 1,
					"proteins" : 1
				})
				.end(function(err, res) {
					  if (err)
						throw err;
					res.status.should.be.equal(200);
					res.body.message.should.be.equal("Ingredient successfully updated!");
					done();
				});
		});

		it('should not update an ingredient with an unknown key by Id' , function(done) {

			request(url)
				.put('/api/ingredients/id/'+ ingredient_id)
				.send({
					"top" : "kek",
				})
				.end(function(err, res) {
					  if (err)
						throw err;
					res.status.should.be.equal(400);
					done();
				});
		});

		it('should update all the ingredient\'s fields by name' , function(done) {

			request(url)
				.put('/api/ingredients/name/test')
				.send({
					"name" : "test",
					"description" : "test",
					"calories" : 1,
					"fat" : 1,
					"carbohydrates" : 1,
					"proteins" : 1
				})
				.end(function(err, res) {
					  if (err)
						throw err;
					res.status.should.be.equal(200);
					res.body.message.should.be.equal("Ingredient successfully updated!");
					done();
				});
		});

		it('should not update an ingredient with an unknown key by name' , function(done) {

			request(url)
				.put('/api/ingredients/name/test')
				.send({
					"top" : "kek"
				})
				.end(function(err, res) {
					  if (err)
						throw err;
					res.status.should.be.equal(400);
					done();
				});
		});
	});

	describe('Ingredients Deletion', function() {
		it('should delete an ingredient by Name' , function(done) {

			request(url)
				.delete('/api/ingredients/name/testkek')
				.end(function(err, res) {
					  if (err)
						throw err;
					res.status.should.be.equal(200);
					res.body.message.should.be.equal("Ingredient succesfully deleted!");
					done();
				});
		});

		it('should delete an ingredient by Id' , function(done) {

			request(url)
				.delete('/api/ingredients/id/' + ingredient_id)
				.end(function(err, res) {
					  if (err)
						throw err;
					res.status.should.be.equal(200);
					res.body.message.should.be.equal("Ingredient succesfully deleted!");
					done();
				});
		});

		it('should delete an ingredient by JSON' , function(done) {

			request(url)
				.delete('/api/ingredients/')
				.send({
					"name" : "test3"
				})
				.end(function(err, res) {
					  if (err)
						throw err;
					res.status.should.be.equal(200);
					res.body.message.should.be.equal("Ingredient succesfully deleted!");
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

module.exports = "tests-ingredient";