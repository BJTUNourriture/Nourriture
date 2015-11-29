var should = require('should');
var request = require('supertest');
var mongoose = require('mongoose');
var User = require('../../API/models/users');
var Ingredients = require('../../API/models/ingredients');
var Recipes = require('../../API/models/recipes');

/*Checks if App was launched*/
if (mongoose.connection.readyState === 0)
{
	var standalone_test = true;
	process.env.NODE_ENV = 'test'
	var app = require('../../app');
}

/*Url of the server*/
var url = 'http://localhost:8101';

/*Testing of the /api/search endpoint*/
describe('/api/search', function() {	

	/*Testing vars*/

	var recipe_id = "";
	var ingredient_id = "";
	var ingredient_name = "";
	var user_id = "";
	var user_name = "";

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

	var user = new User({
		email: "lel@lol.fr",
		username: "azerty",
		password: "azerty"
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
				ingredient_id = ingredient._id;
				ingredient_name = ingredient.name;
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

	describe("Search Recipes", function () {
		it('should retuen 404 if not recipes found', function(done) {

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
						title: "recipes_1",
						author_id: user_id,
						author_name: user_name,
						difficulty: 2,
						ingredients: [{
							id_ingredient : ingredient_id,
							name : ingredient_name
						}],
						pictures : [{
							thumbnail_url : "dummy"
						}]
					};

					var recipe2 = {
						title: "recipes_2",
						author_id: user_id,
						author_name: user_name,
						difficulty: 1,
						ingredients: [{
							id_ingredient : ingredient_id,
							name : ingredient_name
						}],
						pictures : [{
							thumbnail_url : "dummy"
						}]
					};

					var recipe3 = {
						title: "recipes_3",
						author_id: user_id,
						author_name: user_name,
						difficulty: 3,
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
						});

					request(url)
						.post('/api/recipes')
						.send(recipe2)
						.end(function(err, res) {
							  if (err)
								throw err;
						});

					request(url)
						.post('/api/recipes')
						.send(recipe3)
						.end(function(err, res) {
							  if (err)
								throw err;
					})
				});

			var s_recipes = {
			metadata: {
				"page": 1,
				"items": 10
				}
			}

			request(url)
				.post('/api/search/recipes')
				.send(s_recipes)
				.end(function(err, res) {
					  if (err)
						throw err;
					console.log(res.body)
					res.status.should.be.equal(404)
					done();
			});

			})

	it('should search some recipes by title', function(done) {

			var s_recipes = {
			title: "3",
			metadata: {
				"page": 1,
				"items": 1
				}}

		request(url)
			.post('/api/search/recipes')
			.send(s_recipes)
			.end(function(err, res) {
				  if (err)
					throw err;
				res.status.should.be.equal(200);
				res.body.recipes[0].title.should.be.equal("recipes_3")
				done();
			});


		});

		it('should search all recipes', function(done) {

			var s_recipes = {
			metadata: {
				"page": 1,
				"items": 10
				}}

		request(url)
			.post('/api/search/recipes')
			.send(s_recipes)
			.end(function(err, res) {
				  if (err)
					throw err;
				res.status.should.be.equal(200);
				res.body.metadata.total.should.be.equal(3)
				done();
			});


		});


		it('should retrn 400 if no metadata', function(done) {

			var s_recipes = {
			title: "3"}

		request(url)
			.post('/api/search/recipes')
			.send(s_recipes)
			.end(function(err, res) {
				  if (err)
					throw err;
				res.status.should.be.equal(400);
				done();
			});


		});


		it('should order recipes by a field', function(done) {

			var s_recipes = {
				metadata: {
				"page": 1,
				"items": 10
				},
				order: {
					field: "difficulty",
					order: "desc"
				}
			}

		request(url)
			.post('/api/search/recipes')
			.send(s_recipes)
			.end(function(err, res) {
				  if (err)
					throw err;
				res.status.should.be.equal(200);
				res.body.recipes[0].difficulty.should.be.equal(3)
				res.body.recipes[1].difficulty.should.be.equal(2)
				res.body.recipes[2].difficulty.should.be.equal(1)
				done();
			});


		});

		})

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