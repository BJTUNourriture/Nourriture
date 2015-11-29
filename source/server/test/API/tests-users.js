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

/*Testing of the /api/users endpoint*/
describe('/api/users', function() {

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

	var tag_id = "";

	describe("Creation of user", function () {
		it('should successfully create two Users', function(done) {
		  	var Julien = {
					"username": "Julien",
  				"email": "julien@usa.gov",
  				"password": "MonMotDePasse"
				};

				var Carolina = {
					"username": "Carolina",
  				"email": "Carolina@usa.gov",
  				"password": "Carolina21"
				};

			request(url)
				.post('/api/users/register')
				.send(Julien)
				.end(function(err, res) {
					  if (err)
						throw err;
					res.status.should.be.equal(200)
					res.body.message.should.be.equal("User succesfully created!");
				});

				request(url)
					.post('/api/users/register')
					.send(Carolina)
					.end(function(err, res) {
						  if (err)
							throw err;
						res.status.should.be.equal(200);
					});
		});


		it('should not create an user with same name', function(done) {
			var user = {
				"username": "Julien",
				"email": "julien@usa.gov",
				"password": "MonMotDePasse"
			};
			request(url)
				.post('/api/users/register')
				.send(user)
				.end(function(err, res) {
					  if (err)
						throw err;
					res.status.should.be.equal(400);
					done();
				});
		});


// UPDATE USER
		// it('should not create an tag without the name key and without a flag', function(done) {
		// 	var user = {
		// 		"username": "Julien",
		// 		"email": "julien@usa.gov",
		// 		"password": "MonMotDePasse"
		// 	};
		// 	request(url)
		// 		.post('/api/users/')
		// 		.send(user)
		// 		.end(function(err, res) {
		// 				if (err)
		// 				throw err;
		// 			res.status.should.be.equal(400);
		// 			done();
		// 		});
		// 	});
	});

	describe('Retrive Users', function() {
			it('should retrive all Users' , function(done) {

				request(url)
					.get('/api/users/')
					.end(function(err, res) {
						  if (err)
							throw err;
						res.status.should.be.equal(200);
						res.body.should.be.lengthOf(2);
						done();
					});
			});

			it('should retrieve an user by it\'s name' , function(done) {

				request(url)
					.get('/api/users/name/Julien')
					.end(function(err, res) {
						  if (err)
							throw err;
						res.status.should.be.equal(200);
						res.body[0].name.should.be.equal("Julien");
						tag_id = res.body[0]._id;
						done();
					});
			});

			it('should return 404 on non-existant name' , function(done) {

				request(url)
					.get('/api/users/name/carrotin')
					.end(function(err, res) {
						  if (err)
							throw err;
						res.status.should.be.equal(404);
						done();
					});
			});

			it('should retrieve an User by it\'s Id' , function(done) {

				request(url)
					.get('/api/users/id/'+ tag_id)
					.end(function(err, res) {
						  if (err)
							throw err;
						res.status.should.be.equal(200);
						res.body.name.should.be.equal("Julien");
						done();
					});
			});

			it('should return 404 on non-existant Id for a user' , function(done) {

				request(url)
					.get('/api/users/id/'+ mongoose.Types.ObjectId())
					.end(function(err, res) {
						  if (err)
							throw err;
						res.status.should.be.equal(404);
						done();
					});
			});
	});

	describe('User Update', function() {
		it('should update some users\' fields by Id' , function(done) {

			request(url)
				.put('/users/users/id/'+ tag_id)
				.send({
						 "description": "Ma bio",
						 "gender": "female",
						 "pictures" : [{
						   "thumbnail_url" : "/thumbnails/1.jpg",
						   "medium_sized_url" : "/medium_sized/1.jpg",
						   "big_sized_url" : "/big_sized/1.jpg"
						 }]
				})
				.end(function(err, res) {
					  if (err)
						throw err;
					res.status.should.be.equal(200);
					res.body.message.should.be.equal("User successfully updated!");
					done();
				});
		});



	describe('User Deletion', function() {
		it('should delete an User by Name' , function(done) {

			request(url)
				.delete('/api/users/name/Carolina')
				.end(function(err, res) {
					  if (err)
						throw err;
					res.status.should.be.equal(200);
					res.body.message.should.be.equal("Tag succesfully deleted!");
					done();
				});
		});

		it('should delete an User by Id' , function(done) {

			request(url)
				.delete('/api/users/id/' + tag_id)
				.end(function(err, res) {
					  if (err)
						throw err;
					res.status.should.be.equal(200);
					res.body.message.should.be.equal("Tag succesfully deleted!");
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

module.exports = "tests-users";
