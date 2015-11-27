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
	
		/*Tests the creation of an Ingredient*/
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
					res.status.should.equal(200);
					done();
				});
		});
	});

	/*Disconnects mongoose from the DB*/
	after(function(done) {
		mongoose.disconnect();
		done();
	})

});
