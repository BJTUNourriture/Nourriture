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
        beforeEach(function (done) {
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
    var token = "";


    describe("OAuth Creation", function () {

        var token = null;

        before(function (done) {
            /*Creates a dummy user*/
            var user = new User({
                email: "test@test.ru",
                username: "test",
                password: "test",
                email_verified: true
            });

            user.save(function (err) {
                if (err)
                    throw err;

                user_id = user._id;
                user_name = user.username;


                var log_user = {
                    username: user_name,
                    password: "test"
                };


                request(url)
                    .post('/api/users/sign-in')
                    .send(log_user)
                    .end(function (err, res) {
                        if (err) {
                            throw err;
                        }

                        token = res.body.key;
                        done();


                    });

            });
        });


        it('should create Client', function (done) {


            var client = new Client({

                name: "OAuth application"
            });



                console.log("Save");

                request(url)
                    .post('/api/clients')
                    .set('Authorization', 'Topkek ' + token)
                    .send(client)
                    .expect(500)
                    .end(done);



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