/**
 * Created by sylflo on 11/29/15.
 */

var should = require('should');
var request = require('supertest');
var mongoose = require('mongoose');
var User = require('../../API/models/users');
var Client = require('../../oauth/models/client');

/*Checks if App was launched*/
if (mongoose.connection.readyState === 0) {
    var standalone_test = true;
    process.env.NODE_ENV = 'test';
    var app = require('../../app');
}

/*Url of the server*/
var url = 'http://localhost:8101';

describe('/api/oauth', function () {

    if (standalone_test) {
        /*Clears all the collections to have an empty DB*/
        before(function (done) {
            for (var i in mongoose.connection.collections) {
                mongoose.connection.collections[i].remove(function () {
                });
            }
            done();
        });
    }

    /*Testing vars*/
    var user_id = "";
    var user_name = "";


    describe("OAuth Creation", function () {

        it('should create Client', function () {

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
                console.log("test", user_id);

                var client = {
                    name: "My OAuth Client",
                    id: "id_client_OAuth",
                    secret: "My super secret key",
                    userId: user_id
                };

                request(url)
                    .post('/api/clients')
                    .send(client)
                    .end(function(err, res) {
                        if (err) {
                            console.log("Before request");

                        }
                            throw err;
                        res.status.should.be.equal(40000);
                        done();

                    });

            });

        });

    });

    if (standalone_test) {
        /*Disconnects mongoose from the DB*/
        after(function (done) {
            mongoose.disconnect();
            done();
        })
    }
    else {
        after(function (done) {
            for (var i in mongoose.connection.collections) {
                mongoose.connection.collections[i].remove(function () {
                });
            }
            done();
        })
    }

});

module.exports = "tests-oauth";