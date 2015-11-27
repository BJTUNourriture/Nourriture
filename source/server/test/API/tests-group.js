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

module.exports = "tests-group";