/**
 * Created by sylflo on 11/29/15.
 */

var should = require('should');
var request = require('supertest');
var mongoose = require('mongoose');

/*Checks if App was launched*/
if (mongoose.connection.readyState === 0)
{
    var standalone_test = true;
    process.env.NODE_ENV = 'test';
    var app = require('../../app');
}

/*Url of the server*/
var url = 'http://localhost:8101';

describe('/api/oauth', function(){


    describe("OAuth Creation", function() {

        it('should create Client', function(){

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

module.exports = "tests-oauth";