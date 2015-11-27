/*Sets the testing environnement*/
process.env.NODE_ENV = 'test'

var should = require('should');
var assert = require('assert');
var request = require('supertest');
var mongoose = require('mongoose');
var winston = require('winston');
var app = require("../app");
var config = require('../config');

describe('Routing', function() {

	/*Url of the server*/
  	var url = 'http://localhost:8101';

  	/*Clears all the collections to have an empty DB*/
  	before(function(done) {
  		for (var i in mongoose.connection.collections) {
	    	mongoose.connection.collections[i].remove(function() {});
	   	}
  		done();
 	});

  	/*Testing of the /api/ingredients endpoint*/
	describe('/api/ingredients', function() {

		/*Testing vars*/
		var ingredient_id = "";

		/*Begin Ingredient Creation*/
		it('should successfully create an ingredient', function(done) {
		  	var profile = {
				name: 'test'
			};

			request(url)
				.post('/api/ingredients')
				.send(profile)
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
		/*End Ingredient Creation*/

		/*Begin Ingredient Retrieval*/
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
		/*End Ingredient Retrieval*/

	});

	/*Disconnects mongoose from the DB*/
	after(function(done) {
		mongoose.disconnect();
		done();
	})

});
