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

/*Testing of the /api/recipes endpoint*/
describe('/api/recipes', function() {

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
	var recipe_id = "";
	var ingredient_id = "";
	var ingredient_name = "";
	var user_id = "";
	var user_name = "";

	describe("Recipes Creation", function () {
		it('should successfully create three recipes', function(done) {

			/*Creates a dummy ingredient*/
			var ingredient = new Ingredients({
				name : "test"
			});

			ingredient.save(function (err) {
				if (err)
					throw err;
				ingredient_id = ingredient._id;
				ingredient_name = ingredient.name;

				/*Creates a dummy user*/
				var user = new User({
					email: "test@test.ru",
					username: "test",
					password: "test"
				});

				user.save(function (err) {
					if (err)
						throw err;
					user_id = user._id;
					user_name = user.username;

					var recipe = {
						title: "test",
						author_id: user_id,
						author_name: user_name,
						ingredients: [{
							id_ingredient : ingredient_id,
							name : ingredient_name
						}],
						pictures : [{
							thumbnail_url : "dummy"
						}]
					};

					var recipe2 = {
						title: "testkek",
						author_id: user_id,
						author_name: user_name,
						ingredients: [{
							id_ingredient : ingredient_id,
							name : ingredient_name
						}],
						pictures : [{
							thumbnail_url : "dummy"
						}]
					};

					var recipe3 = {
						title: "test2",
						author_id: user_id,
						author_name: user_name,
						ingredients: [{
							id_ingredient : ingredient_id,
							name : ingredient_name
						}],
						pictures : [{
							thumbnail_url : "dummy"
						}]
					}

					request(url)
						.post('/api/recipes')
						.send(recipe3)
						.end(function(err, res) {
							  if (err)
								throw err;
							res.status.should.be.equal(200);
						});

					request(url)
						.post('/api/recipes')
						.send(recipe2)
						.end(function(err, res) {
							  if (err)
								throw err;
							res.status.should.be.equal(200);
						});

					request(url)
						.post('/api/recipes')
						.send(recipe)
						.end(function(err, res) {
							  if (err)
								throw err;
							res.status.should.be.equal(200);
							done();
						});

				});
				/*End create dummy user*/
			});		
			/*End create a dummy ingredient*/
		});

		it('should not create a recipe without at least an ingredient', function(done) {
			var recipe = {
				title: "testos",
				author_id: user_id,
				author_name: user_name,
				ingredients: [],
				pictures : [{
					thumbnail_url : "dummy"
				}]
			};

			request(url)
				.post('/api/recipes')
				.send(recipe)
				.end(function(err, res) {
					  if (err)
						throw err;
					res.status.should.be.equal(400);
					done();
				});
		});

		it('should not create a recipe without the author infos', function(done) {
			var recipe = {
				title: "testos",
				ingredients: [{
					id_ingredient : ingredient_id,
					name : ingredient_name
				}],
				pictures : [{
					thumbnail_url : "dummy"
				}]
			};

			request(url)
				.post('/api/recipes')
				.send(recipe)
				.end(function(err, res) {
					  if (err)
						throw err;
					res.status.should.be.equal(400);
					done();
				});
		});

		it('should not create a recipe without the first thumbnail url', function(done) {
			var recipe = {
				title: "testos",
				author_id: user_id,
				author_name: user_name,
				ingredients: [{
					id_ingredient : ingredient_id,
					name : ingredient_name
				}],
				pictures : []
			};

			request(url)
				.post('/api/recipes')
				.send(recipe)
				.end(function(err, res) {
					  if (err)
						throw err;
					res.status.should.be.equal(400);
					done();
				});
		});
	});

	describe("Recipes Retrieval", function () {
		it('should retrieve all the recipes', function(done) {
			request(url)
				.get('/api/recipes')
				.end(function(err, res) {
					  if (err)
						throw err;
					res.body.should.be.lengthOf(3);
					done();
				});			
		});

		it('should retrieve a recipe by its title', function(done) {
			request(url)
				.get('/api/recipes/title/test2')
				.end(function(err, res) {
					  if (err)
						throw err;
					res.body[0].title.should.be.equal("test2");
					recipe_id = res.body[0]._id;
					done();
				});			
		});

		it('should retrieve a recipe by its partial title', function(done) {
			request(url)
				.get('/api/recipes/title/kek')
				.end(function(err, res) {
					  if (err)
						throw err;
					res.body[0].title.should.be.equal("testkek");
					done();
				});			
		});

		it('should return 404 an non-existant title', function(done) {
			request(url)
				.get('/api/recipes/title/pepperoni')
				.end(function(err, res) {
					  if (err)
						throw err;
					res.status.should.be.equal(404);
					done();
				});			
		});

		it('should retrieve a recipe by its id', function(done) {
			request(url)
				.get('/api/recipes/id/' + recipe_id)
				.end(function(err, res) {
					  if (err)
						throw err;
					res.body.title.should.be.equal("test2");
					done();
				});			
		});

		it('should return 404 on non-existant Id' , function(done) {

			request(url)
				.get('/api/recipes/id/'+ mongoose.Types.ObjectId())
				.end(function(err, res) {
					  if (err)
						throw err;
					res.status.should.be.equal(404);
					done();
				});
		});
	});

	describe("Recipes Update", function () {
		it('should update all the recipe\'s fields by id' , function(done) {
			var updated_recipe = {
				title : "test2",
				author_id : user_id,
				author_name : user_name,
				date_posted : new Date(Date.now()),
				date_edited : new Date(Date.now()),
				difficulty : 1,
				average_score : 1,
				time_preparation:  45,
				average_price : 1,
				ingredients: [{
					id_ingredient : ingredient_id,
					name : ingredient_name,
					amount : 1
				}],
				comments : [{
					id_author : user_id,
					name_author : user_name,
					date_posted : new Date(Date.now()),
					date_edited : new Date(Date.now()),
					content : "test",
					visible : true
				}],
				pictures : [{
					thumbnail_url : "dummy",
					medium_sized_url : "dummy",
					big_sized_url : "dummy"
				}],
				number_vote : 1,
				votes : [{
					vote : 5,
					id_author : user_id		
				}]
			}

			request(url)
				.put('/api/recipes/id/'+ recipe_id)
				.send(updated_recipe)
				.end(function(err, res) {
					  if (err)
						throw err;
					res.status.should.be.equal(200);
					done();
				});
		});

		it('should not update a recipe with an unknown key given by Id' , function(done) {
			var updated_recipe = {
				top : "kek",
				title : "test2",
				author_id : user_id,
				author_name : user_name,
				date_posted : new Date(Date.now()),
				date_edited : new Date(Date.now()),
				difficulty : 1,
				average_score : 1,
				time_preparation:  45,
				average_price : 1,
				ingredients: [{
					id_ingredient : ingredient_id,
					name : ingredient_name,
					amount : 1
				}],
				comments : [{
					id_author : user_id,
					name_author : user_name,
					date_posted : new Date(Date.now()),
					date_edited : new Date(Date.now()),
					content : "test",
					visible : true
				}],
				pictures : [{
					thumbnail_url : "dummy",
					medium_sized_url : "dummy",
					big_sized_url : "dummy"
				}],
				number_vote : 1,
				votes : [{
					vote : 5,
					id_author : user_id		
				}]
			}

			request(url)
				.put('/api/recipes/id/'+ recipe_id)
				.send(updated_recipe)
				.end(function(err, res) {
					  if (err)
						throw err;
					res.status.should.be.equal(400);
					done();
				});
		});	

		it('should update all the recipe\'s fields by title' , function(done) {
			var updated_recipe = {
				title : "test2",
				author_id : user_id,
				author_name : user_name,
				date_posted : new Date(Date.now()),
				date_edited : new Date(Date.now()),
				difficulty : 1,
				average_score : 1,
				time_preparation:  45,
				average_price : 1,
				ingredients: [{
					id_ingredient : ingredient_id,
					name : ingredient_name,
					amount : 1
				}],
				comments : [{
					id_author : user_id,
					name_author : user_name,
					date_posted : new Date(Date.now()),
					date_edited : new Date(Date.now()),
					content : "test",
					visible : true
				}],
				pictures : [{
					thumbnail_url : "dummy",
					medium_sized_url : "dummy",
					big_sized_url : "dummy"
				}],
				number_vote : 1,
				votes : [{
					vote : 5,
					id_author : user_id		
				}]
			}

			request(url)
				.put('/api/recipes/title/test2')
				.send(updated_recipe)
				.end(function(err, res) {
					  if (err)
						throw err;
					res.status.should.be.equal(200);
					done();
				});
		});

		it('should not update a recipe with an unknown key given by title' , function(done) {
			var updated_recipe = {
				top : "kek",
				title : "test2",
				author_id : user_id,
				author_name : user_name,
				date_posted : new Date(Date.now()),
				date_edited : new Date(Date.now()),
				difficulty : 1,
				average_score : 1,
				time_preparation:  45,
				average_price : 1,
				ingredients: [{
					id_ingredient : ingredient_id,
					name : ingredient_name,
					amount : 1
				}],
				comments : [{
					id_author : user_id,
					name_author : user_name,
					date_posted : new Date(Date.now()),
					date_edited : new Date(Date.now()),
					content : "test",
					visible : true
				}],
				pictures : [{
					thumbnail_url : "dummy",
					medium_sized_url : "dummy",
					big_sized_url : "dummy"
				}],
				number_vote : 1,
				votes : [{
					vote : 5,
					id_author : user_id		
				}]
			}

			request(url)
				.put('/api/recipes/title/test2')
				.send(updated_recipe)
				.end(function(err, res) {
					  if (err)
						throw err;
					res.status.should.be.equal(400);
					done();
				});
		});
	});

	describe("Recipes Deletion", function () {
		it('should delete a recipe by Name' , function(done) {

			request(url)
				.delete('/api/recipes/title/testkek')
				.end(function(err, res) {
					  if (err)
						throw err;
					res.status.should.be.equal(200);
					res.body.message.should.be.equal("Recipe succesfully deleted!");
					done();
				});
		});

		it('should delete a recipe by Id' , function(done) {

			request(url)
				.delete('/api/recipes/id/' + recipe_id)
				.end(function(err, res) {
					  if (err)
						throw err;
					res.status.should.be.equal(200);
					res.body.message.should.be.equal("Recipe succesfully deleted!");
					done();
				});
		});

		it('should delete a recipe by JSON' , function(done) {

			request(url)
				.delete('/api/recipes/')
				.send({
					"title" : "test"
				})
				.end(function(err, res) {
					  if (err)
						throw err;
					res.status.should.be.equal(200);
					res.body.message.should.be.equal("Recipe succesfully deleted!");
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

module.exports = "tests-recipe";