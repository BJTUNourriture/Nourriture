/*Sets the testing environnement*/
process.env.NODE_ENV = 'test'

var should = require('should');
var assert = require('assert');
var request = require('supertest');
var mongoose = require('mongoose');
var app = require("../app");
var config = require('../config');

describe('API', function() {

	/*Url of the server*/
  	var url = 'http://localhost:8101';

  	/*Clears all the collections to have an empty DB*/
  	before(function(done) {
  		for (var i in mongoose.connection.collections) {
	    	mongoose.connection.collections[i].remove(function() {});
	   	}
  		done();
 	});

  	//Tests ingredients
  	require('./API/tests-ingredient');

  	//Tests recipes
  	require('./API/tests-recipe');

    //Test Tags
    require('./API/tests-tag');

    //Test Search
    require('./API/tests-search');

    //Tests types
    require('./API/tests-type');

	/*Disconnects mongoose from the DB*/
	after(function(done) {
		mongoose.disconnect();
		done();
	})

});
