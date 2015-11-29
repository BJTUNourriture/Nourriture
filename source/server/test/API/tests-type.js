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

		it('should not create a type with the same name', function(done) {
		  	var profile = {
				name: 'test'
			};

			request(url)
				.post('/api/types')
				.send(profile)
				.end(function(err, res) {
					  if (err)
						throw err;
					res.status.should.be.equal(400);
					done();
				});
		});

		it('should not create a type without the name key', function(done) {
		  	var profile = {
				lol: 'test'
			};

			request(url)
				.post('/api/types')
				.send(profile)
				.end(function(err, res) {
					  if (err)
						throw err;
					res.status.should.be.equal(400);
					done();
				});
		});
	});

	describe("Types Retrieval", function () {
		it('should retrieve all the types' , function(done) {

			request(url)
				.get('/api/types/')
				.end(function(err, res) {
					  if (err)
						throw err;
					res.status.should.be.equal(200);
					res.body.should.be.lengthOf(3);
					done();
				});
		});

		it('should retrieve a type by it\'s name' , function(done) {

			request(url)
				.get('/api/types/name/test')
				.end(function(err, res) {
					  if (err)
						throw err;
					res.status.should.be.equal(200);
					res.body[0].name.should.be.equal("test");
					type_id = res.body[0]._id;
					done();
				});
		});

		it('should retrieve a type by it\'s partial name' , function(done) {

			request(url)
				.get('/api/types/name/kek')
				.end(function(err, res) {
					  if (err)
						throw err;
					res.status.should.be.equal(200);
					res.body[0].name.should.be.equal("testkek");
					done();
				});
		});

		it('should return 404 on non-existant name' , function(done) {

			request(url)
				.get('/api/types/name/ass')
				.end(function(err, res) {
					  if (err)
						throw err;
					res.status.should.be.equal(404);
					done();
				});
		});

		it('should retrieve a type by it\'s Id' , function(done) {

			request(url)
				.get('/api/types/id/'+ type_id)
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
				.get('/api/types/id/'+ mongoose.Types.ObjectId())
				.end(function(err, res) {
					  if (err)
						throw err;
					res.status.should.be.equal(404);
					done();
				});
		});
	});

	describe('Types Deletion', function() {
		it('should delete a type by Name' , function(done) {

			request(url)
				.delete('/api/types/name/testkek')
				.end(function(err, res) {
					  if (err)
						throw err;
					res.status.should.be.equal(200);
					res.body.message.should.be.equal("Type succesfully deleted!");
					done();
				});
		});

		it('should delete a type by Id' , function(done) {

			request(url)
				.delete('/api/types/id/' + type_id)
				.end(function(err, res) {
					  if (err)
						throw err;
					res.status.should.be.equal(200);
					res.body.message.should.be.equal("Type succesfully deleted!");
					done();
				});
		});

		it('should delete a type by JSON' , function(done) {

			request(url)
				.delete('/api/types/')
				.send({
					"name" : "test3"
				})
				.end(function(err, res) {
					  if (err)
						throw err;
					res.status.should.be.equal(200);
					res.body.message.should.be.equal("Type succesfully deleted!");
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