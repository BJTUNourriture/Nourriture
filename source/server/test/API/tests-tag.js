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

/*Testing of the /api/tags endpoint*/
describe('/api/tags', function() {

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

	describe("Tags Creation", function () {
		it('should successfully create three tags', function(done) {
		  	var tag = {
				name: "lilTag",
				flag: {
					"name": "safe"
				}
			};

			var tag2 = {
				name: "HashTag",
				flag: {
					"name": "unsafe",
					"level": 54
				}
			};

			var tag3 = {
				name: "ThisIsAVeryVeryLongTag",
				flag: {
					"name": "ThisSisA longTest",
					"level": 520
				}
			}

			request(url)
				.post('/api/tags')
				.send(tag)
				.end(function(err, res) {
					  if (err)
						throw err;
					res.status.should.be.equal(200);
				});

			request(url)
				.post('/api/tags')
				.send(tag2)
				.end(function(err, res) {
					  if (err)
						throw err;
					res.status.should.be.equal(200);
				});

			request(url)
				.post('/api/tags')
				.send(tag3)
				.end(function(err, res) {
					  if (err)
						throw err;
					res.status.should.be.equal(200);
					done();
				});
		});


		it('should not create an tag with the same name', function(done) {
		  	var tag = {
				name: 'lilTag',
				flag: {
					"name": "TopKek"
				}
			};
			request(url)
				.post('/api/tags')
				.send(tag)
				.end(function(err, res) {
					  if (err)
						throw err;
					res.status.should.be.equal(400);
					done();
				});
		});

		it('should not create an tag without the name key and without a flag', function(done) {
		  	var tag = {
				lol: 'Toto'
			};

			var tag2 = {
				name: "HelloWorld",
				flag : {
					"titi": "toto"
				}
			}

			request(url)
				.post('/api/tags')
				.send(tag)
				.end(function(err, res) {
					  if (err)
						throw err;
					res.status.should.be.equal(400);
				});

			request(url)
				.post('/api/tags')
				.send(tag2)
				.end(function(err, res) {
					  if (err)
						throw err;
					res.status.should.be.equal(400);
					done();
				});
		});
	
	});
	
	describe('Tags Retrieval', function() {
			it('should retrieve all the tags' , function(done) {

				request(url)
					.get('/api/tags/')
					.end(function(err, res) {
						  if (err)
							throw err;
						res.status.should.be.equal(200);
						res.body.should.be.lengthOf(3);
						done();
					});
			});

			it('should retrieve an tag by it\'s name' , function(done) {

				request(url)
					.get('/api/tags/name/lilTag')
					.end(function(err, res) {
						  if (err)
							throw err;
						res.status.should.be.equal(200);
						res.body[0].name.should.be.equal("lilTag");
						tag_id = res.body[0]._id;
						done();
					});
			});

			it('should retrieve an tag by it\'s partial name' , function(done) {

				request(url)
					.get('/api/tags/name/lil')
					.end(function(err, res) {
						  if (err)
							throw err;
						res.status.should.be.equal(200);
						res.body[0].name.should.be.equal("lilTag");
						done();
					});
			});

			it('should return 404 on non-existant name' , function(done) {

				request(url)
					.get('/api/tags/name/dicky')
					.end(function(err, res) {
						  if (err)
							throw err;
						res.status.should.be.equal(404);
						done();
					});
			});

			it('should retrieve an Tag by it\'s Id' , function(done) {

				request(url)
					.get('/api/tags/id/'+ tag_id)
					.end(function(err, res) {
						  if (err)
							throw err;
						res.status.should.be.equal(200);
						res.body.name.should.be.equal("lilTag");
						done();
					});
			});

			it('should return 404 on non-existant Id for a tag' , function(done) {

				request(url)
					.get('/api/tags/id/'+ mongoose.Types.ObjectId())
					.end(function(err, res) {
						  if (err)
							throw err;
						res.status.should.be.equal(404);
						done();
					});
			});
	});

	describe('Tags Update', function() {
		it('should update all the tags\' fields by Id' , function(done) {

			request(url)
				.put('/api/tags/id/'+ tag_id)
				.send({
					"name" : "lilTag",
					"flag": {
						"name": "up"
					}
				})
				.end(function(err, res) {
					  if (err)
						throw err;
					res.status.should.be.equal(200);
					res.body.message.should.be.equal("Tag successfully updated!");
					done();
				});
		});

		it('should not update a Tag with an unknown key by Id' , function(done) {

			request(url)
				.put('/api/tags/id/'+ tag_id)
				.send({
					"huhuhu" : "fefze"
				})
				.end(function(err, res) {
					  if (err)
						throw err;
					res.status.should.be.equal(400);
					done();
				});
		});

		it('should update all the Tag\'s fields by name' , function(done) {

			request(url)
				.put('/api/tags/name/lilTag')
				.send({
					"name" : "lilTag",
					"flag": {
						"name": "topkekus"
					}
				})
				.end(function(err, res) {
					  if (err)
						throw err;
					res.status.should.be.equal(200);
					res.body.message.should.be.equal("Tag successfully updated!");
					done();
				});
		});

		it('should not update an Tag with an unknown key by name' , function(done) {

			request(url)
				.put('/api/tags/name/lilTag')
				.send({
					"lolipop" : "kekududud",
				})
				.end(function(err, res) {
					  if (err)
						throw err;
					res.status.should.be.equal(400);
					done();
				});
		});
	});

	describe('Tags Deletion', function() {
		it('should delete an Tag by Name' , function(done) {

			request(url)
				.delete('/api/tags/name/HashTag')
				.end(function(err, res) {
					  if (err)
						throw err;
					res.status.should.be.equal(200);
					res.body.message.should.be.equal("Tag succesfully deleted!");
					done();
				});
		});

		it('should delete an Tag by Id' , function(done) {

			request(url)
				.delete('/api/tags/id/' + tag_id)
				.end(function(err, res) {
					  if (err)
						throw err;
					res.status.should.be.equal(200);
					res.body.message.should.be.equal("Tag succesfully deleted!");
					done();
				});
		});

		it('should delete an tag by JSON' , function(done) {

			request(url)
				.delete('/api/tags/')
				.send({
				name: "ThisIsAVeryVeryLongTag",
				flag: {
					"name": "ThisSisA longTest",
					"level": 520}
				})
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

});

module.exports = "tests-tag";