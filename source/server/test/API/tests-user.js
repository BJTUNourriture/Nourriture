var should = require('should');
var request = require('supertest');
var mongoose = require('mongoose');

/*Checks if App was launched*/
if (mongoose.connection.readyState === 0) {
    var standalone_test = true;
    process.env.NODE_ENV = 'test'
    var app = require('../../app');
}

/*Url of the server*/
var url = 'http://localhost:8101';

/*Testing of the /api/users endpoint*/
describe('/api/users', function () {

    if (standalone_test) {
        /*Clears all the collections to have an empty DB*/
        before(function (done) {
            for (var i in mongoose.connection.collections) {
                mongoose.connection.collections[i].remove(function () { });
            }
            done();
        });
    }

    /*Testing vars*/
    var user_id = "";

    describe("Users Creation", function () {
        it('should successfully create three users', function (done) {
            var user = {
                username: "kek",
                password: "toplamec",
                email: "top.kek@top.com"

            };

            var user2 = {
                username: "JCVD",
                password: "yolo",
                email: "jcvd@jcvd.com"
            };

            var user3 = {
                username: "TopChef",
                password: "Kaamelott",
                email: "Kaamelott@topchef.com"
            }

            request(url)
				.post('/api/users/register')
				.send(user3)
				.end(function (err, res) {
				    if (err)
				        throw err;
				    res.status.should.be.equal(200);
				});

            request(url)
				.post('/api/users/register')
				.send(user2)
				.end(function (err, res) {
				    if (err)
				        throw err;
				    res.status.should.be.equal(200);
				});

            request(url)
				.post('/api/users/register')
				.send(user)
				.end(function (err, res) {
				    if (err)
				        throw err;
				    res.status.should.be.equal(200);
				    done();
				});
        });

        it('should not create a user with the same username', function (done) {
            var profile = {
                username: 'kek'
            };

            request(url)
				.post('/api/users/register')
				.send(profile)
				.end(function (err, res) {
				    if (err)
				        throw err;
				    res.status.should.be.equal(400);
				    done();
				});
        });

        it('should not create a user without the username key', function (done) {
            var profile = {
                lol: 'kek'
            };

            request(url)
				.post('/api/users/register')
				.send(profile)
				.end(function (err, res) {
				    if (err)
				        throw err;
				    res.status.should.be.equal(400);
				    done();
				});
        });
    });

    describe('Users Retrieval', function () {
        it('should retrieve all the users', function (done) {

            request(url)
				.get('/api/users/')
				.end(function (err, res) {
				    if (err)
				        throw err;
				    res.status.should.be.equal(200);
				    res.body.should.be.lengthOf(3);
				    done();
				});
        });

        it('should retrieve a user by it\'s username', function (done) {

            request(url)
				.get('/api/users/username/kek')
				.end(function (err, res) {
				    if (err)
				        throw err;
				    res.status.should.be.equal(200);
				    res.body[0].username.should.be.equal("kek");
				    user_id = res.body[0]._id;
				    done();
				});
        });

        it('should retrieve a user by it\'s partial username', function (done) {

            request(url)
				.get('/api/users/username/Chef')
				.end(function (err, res) {
				    if (err)
				        throw err;
				    res.status.should.be.equal(200);
				    res.body[0].username.should.be.equal("TopChef");
				    done();
				});
        });

        it('should return 404 on non-existant username', function (done) {

            request(url)
				.get('/api/users/username/toto')
				.end(function (err, res) {
				    if (err)
				        throw err;
				    res.status.should.be.equal(404);
				    done();
				});
        });

        it('should retrieve a user by it\'s Id', function (done) {

            request(url)
				.get('/api/users/id/' + user_id)
				.end(function (err, res) {
				    if (err)
				        throw err;
				    res.status.should.be.equal(200);
				    res.body.username.should.be.equal("kek");
				    done();
				});
        });

        it('should return 404 on non-existant Id', function (done) {

            request(url)
				.get('/api/users/id/' + mongoose.Types.ObjectId())
				.end(function (err, res) {
				    if (err)
				        throw err;
				    res.status.should.be.equal(404);
				    done();
				});
        });
    });

    describe('User Update', function () {
        it('should update all the user\'s fields by Id', function (done) {

            request(url)
				.put('/api/users/id/' + user_id)
				.send({
				    "email": "topkek@test.com",
				    "description": "je suis un top KEK!!!!",
				    "password": "jechangemonpassword",
				    "gender": "male"
				})
				.end(function (err, res) {
				    if (err)
				        throw err;
				    res.status.should.be.equal(200);
				    res.body.message.should.be.equal("user update successfully");
				    done();
				});
        });

        it('should not update a user with an unknown key by Id', function (done) {

            request(url)
				.put('/api/users/id/' + user_id)
				.send({
				    "top": "kek",
				})
				.end(function (err, res) {
				    if (err)
				        throw err;
				    res.status.should.be.equal(400);
				    done();
				});
        });

        it('should update all the user\'s fields by username', function (done) {

            request(url)
				.put('/api/users/username/JCVD')
				.send({
				    "email": "test@test.com",
				    "description": "Jean Claude Van Damme est dans la place baby!",
				    "gender": "female"
				})
				.end(function (err, res) {
				    if (err)
				        throw err;
				    res.status.should.be.equal(200);
				    res.body.message.should.be.equal("user update successfully");
				    done();
				});
        });

        it('should not update a user with an unknown key by username', function (done) {

            request(url)
				.put('/api/users/username/JCVD')
				.send({
				    "top": "kek"
				})
				.end(function (err, res) {
				    if (err)
				        throw err;
				    res.status.should.be.equal(400);
				    done();
				});
        });
    });

    describe('User Deletion', function () {
        it('should delete a user by Username', function (done) {

            request(url)
				.delete('/api/users/username/JCVD')
				.end(function (err, res) {
				    if (err)
				        throw err;
				    res.status.should.be.equal(200);
				    res.body.message.should.be.equal("User succesfully deleted!");
				    done();
				});
        });

        it('should delete a user by Id', function (done) {

            request(url)
				.delete('/api/users/id/' + user_id)
				.end(function (err, res) {
				    if (err)
				        throw err;
				    res.status.should.be.equal(200);
				    res.body.message.should.be.equal("User succesfully deleted!");
				    done();
				});
        });

        it('should delete a user by JSON', function (done) {

            request(url)
				.delete('/api/users/')
				.send({
				    "username": "TopChef"
				})
				.end(function (err, res) {
				    if (err)
				        throw err;
				    res.status.should.be.equal(200);
				    res.body.message.should.be.equal("User succesfully deleted!");
				    done();
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
});

module.exports = "tests-user";