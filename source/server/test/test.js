process.env.NODE_ENV = 'test'

var should = require('should');
var assert = require('assert');
var request = require('supertest');
var mongoose = require('mongoose');
var winston = require('winston');
var app = require("../app");
var config = require('../config');

describe('Routing', function() {

  	var url = 'http://localhost:8101';

  	before(function(done) {
	    mongoose.createConnection(config.db.test);						
	    done();
 	});

	describe('/api/ingredients', function() {
	
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

});
