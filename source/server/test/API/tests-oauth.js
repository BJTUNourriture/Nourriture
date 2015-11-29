/**
 * Created by sylflo on 11/29/15.
 */

var should = require('should');
var request = require('supertest');
var mongoose = require('mongoose');
var User = require('../../API/models/users');
var Client = require('../../oauth/models/client');
var Code = require('../../oauth/models/code');


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
    var user_id = null;
    var user_name = null;
    var token = null;
    var id_client = "id_oauth";


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

                name: "OAuth_application",
                id: id_client,
                secret: "My_super_secret_key"
            });

            request(url)
                .post('/api/clients')
                .set('Authorization', 'Topkek ' + token)
                .send(client)
                .expect(200)
                .end(done);


        });

        it('should give an autorization code', function (done) {

            var code = new Code({
                value: "123456",
                clientId: id_client,
                redirectUri: "localhost:8101",
                userId: user_id
            });

            // Save the auth code and check for errors
            code.save(function (err) {
                if (err) {
                    throw err;
                }
                done();
            });

        });

        it('should give a OAuth token', function (done) {

            var obj_code = {
                code: "123456",
                grant_type: "authorization_code",
                redirect_uri: "localhost:8101"
            };

            request(url)
                .post('api/oauth2/token')
                .auth('OAuth_application', 'My_super_secret_key')
                .send(obj_code)
                .expect(200)
                .end(done());


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