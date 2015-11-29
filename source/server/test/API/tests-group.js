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

/*Testing of the /api/groups endpoint*/
describe('/api/groups', function() {

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
	var user_id = "";
	var user_name = "";
	var group_id = "";

	describe("Groups Creation", function () {
		it('should successfully create three groups', function(done) {

			/*Creates a dummy user*/
			var user = new Users({
				name : "test",
				email: "test@test.fr",
				password: "nourriture2015"
			});

			user.save(function (err) {
				if (err)
					throw err;
				user_id = user._id;
				user_name = user.username;

				var group = {
					name: "test",
					admin_id: user_id,
				};

				var group2 = {
					name: "test2",
					admin_id: user_id,
				};

				var group3 = {
					name: "test3",
					admin_id: user_id,
				};

				request(url)
					.post('/api/groups')
					.send(group)
					.end(function(err, res) {
						  if (err)
							throw err;
						res.status.should.be.equal(200);
					});

				request(url)
					.post('/api/groups')
					.send(group2)
					.end(function(err, res) {
						  if (err)
							throw err;
						res.status.should.be.equal(200);
					});

				request(url)
					.post('/api/groups')
					.send(group3)
					.end(function(err, res) {
						  if (err)
							throw err;
						res.status.should.be.equal(200);
						done();
					});
				});

			});		
			/*End create a dummy user*/

		});

		it('should not create a group with the same name', function(done) {
		  	var group = {
				name: 'test',
				admin_id: user_id
			};

			request(url)
				.post('/api/groups')
				.send(group)
				.end(function(err, res) {
					  if (err)
						throw err;
					res.status.should.be.equal(400);
					done();
				});
		});

		it('should not create an group without the name key', function(done) {
		  	var group = {
		  		admin_id: user_id
			};

			request(url)
				.post('/api/groups')
				.send(group)
				.end(function(err, res) {
					  if (err)
						throw err;
					res.status.should.be.equal(400);
					done();
				});
		});

		it('should not create an group without the admin_id key', function(done) {
		  	var group = {
		  		name: "test 4"
			};

			request(url)
				.post('/api/groups')
				.send(group)
				.end(function(err, res) {
					  if (err)
						throw err;
					res.status.should.be.equal(400);
					done();
				});
		});
	});

	describe('Groups Retrieval', function() {
		it('should retrieve all the groups' , function(done) {

			request(url)
				.get('/api/groups/')
				.end(function(err, res) {
					  if (err)
						throw err;
					res.status.should.be.equal(200);
					res.body.should.be.lengthOf(3);
					done();
				});
		});

		it('should retrieve a group by it\'s name' , function(done) {

			request(url)
				.get('/api/groups/name/test')
				.end(function(err, res) {
					  if (err)
						throw err;
					res.status.should.be.equal(200);
					res.body[0].name.should.be.equal("test");
					group_id = res.body[0]._id;
					done();
				});
		});

		it('should return 404 on non-existant name' , function(done) {

			request(url)
				.get('/api/groups/name/ass')
				.end(function(err, res) {
					  if (err)
						throw err;
					res.status.should.be.equal(404);
					done();
				});
		});

		it('should retrieve a group by it\'s Id' , function(done) {

			request(url)
				.get('/api/groups/id/'+ group_id)
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
				.get('/api/groups/id/'+ mongoose.Types.ObjectId())
				.end(function(err, res) {
					  if (err)
						throw err;
					res.status.should.be.equal(404);
					done();
				});
		});
	});

	describe('Groups Update', function() {
		it('should update all the group\'s fields by Id' , function(done) {

			request(url)
				.put('/api/groups/id/'+ group_id)
				.send({
					"name" : "test",
					"description" : "test"
				})
				.end(function(err, res) {
					  if (err)
						throw err;
					res.status.should.be.equal(200);
					res.body.message.should.be.equal("Group successfully updated!");
					done();
				});
		});

		it('should not update an group with an unknown key by Id' , function(done) {

			request(url)
				.put('/api/groups/id/'+ group_id)
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

		it('should update all the group\'s fields by name' , function(done) {

			request(url)
				.put('/api/groups/name/test')
				.send({
					"name" : "test",
					"description" : "group description"
				})
				.end(function(err, res) {
					  if (err)
						throw err;
					res.status.should.be.equal(200);
					res.body.message.should.be.equal("Group successfully updated!");
					done();
				});
		});

		it('should not update a group with an unknown key by name' , function(done) {

			request(url)
				.put('/api/groups/name/test')
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

	describe('Groups Deletion', function() {
		it('should delete a group by Name' , function(done) {

			request(url)
				.delete('/api/groups/name/test2')
				.end(function(err, res) {
					  if (err)
						throw err;
					res.status.should.be.equal(200);
					res.body.message.should.be.equal("Group succesfully deleted!");
					done();
				});
		});

		it('should delete a group by Id' , function(done) {

			request(url)
				.delete('/api/groups/id/' + group_id)
				.end(function(err, res) {
					  if (err)
						throw err;
					res.status.should.be.equal(200);
					res.body.message.should.be.equal("Group succesfully deleted!");
					done();
				});
		});

		it('should delete a group by JSON' , function(done) {

			request(url)
				.delete('/api/groups/')
				.send({
					"name" : "test3"
				})
				.end(function(err, res) {
					  if (err)
						throw err;
					res.status.should.be.equal(200);
					res.body.message.should.be.equal("Group succesfully deleted!");
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

module.exports = "tests-group";