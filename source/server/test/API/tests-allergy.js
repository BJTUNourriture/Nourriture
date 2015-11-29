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

/*Testing of the /api/allergies endpoint*/
describe('/api/allergies', function () {

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
    var allergy_id = "";

    describe("Allergies Creation", function () {
        it('should successfully create three allergies', function (done) {
            var allergy = {
                name: "egg"
            };

            var allergy2 = {
                name: "tomatoes"
            };

            var allergy3 = {
                name: "chocolate"
            }

            request(url)
				.post('/api/allergies')
				.send(allergy3)
				.end(function (err, res) {
				    if (err)
				        throw err;
				    res.status.should.be.equal(200);
				});

            request(url)
				.post('/api/allergies')
				.send(allergy2)
				.end(function (err, res) {
				    if (err)
				        throw err;
				    res.status.should.be.equal(200);
				});

            request(url)
				.post('/api/allergies')
				.send(allergy)
				.end(function (err, res) {
				    if (err)
				        throw err;
				    res.status.should.be.equal(200);
				    done();
				});
        });

        it('should not create an allergy with the same name', function (done) {
            var profile = {
                name: 'egg'
            };

            request(url)
				.post('/api/allergies')
				.send(profile)
				.end(function (err, res) {
				    if (err)
				        throw err;
				    res.status.should.be.equal(400);
				    done();
				});
        });

        it('should not create an allergy without the name key', function (done) {
            var profile = {
                lol: 'egg'
            };

            request(url)
				.post('/api/allergies')
				.send(profile)
				.end(function (err, res) {
				    if (err)
				        throw err;
				    res.status.should.be.equal(400);
				    done();
				});
        });
    });

    describe('Allergies Retrieval', function () {
        it('should retrieve all the allergies', function (done) {

            request(url)
				.get('/api/allergies/')
				.end(function (err, res) {
				    if (err)
				        throw err;
				    res.status.should.be.equal(200);
				    res.body.should.be.lengthOf(3);
				    done();
				});
        });

        it('should retrieve an allergy by it\'s name', function (done) {

            request(url)
				.get('/api/allergies/name/egg')
				.end(function (err, res) {
				    if (err)
				        throw err;
				    res.status.should.be.equal(200);
				    res.body[0].name.should.be.equal("egg");
				    allergy_id = res.body[0]._id;
				    done();
				});
        });

        it('should retrieve an allergy by it\'s partial name', function (done) {

            request(url)
				.get('/api/allergies/name/eg')
				.end(function (err, res) {
				    if (err)
				        throw err;
				    res.status.should.be.equal(200);
				    res.body[0].name.should.be.equal("egg");
				    done();
				});
        });

        it('should return 404 on non-existant name', function (done) {

            request(url)
				.get('/api/allergies/name/toto')
				.end(function (err, res) {
				    if (err)
				        throw err;
				    res.status.should.be.equal(404);
				    done();
				});
        });

        it('should retrieve an allergy by it\'s Id', function (done) {

            request(url)
				.get('/api/allergies/id/' + allergy_id)
				.end(function (err, res) {
				    if (err)
				        throw err;
				    res.status.should.be.equal(200);
				    res.body.name.should.be.equal("egg");
				    done();
				});
        });

        it('should return 404 on non-existant Id', function (done) {

            request(url)
				.get('/api/allergies/id/' + mongoose.Types.ObjectId())
				.end(function (err, res) {
				    if (err)
				        throw err;
				    res.status.should.be.equal(404);
				    done();
				});
        });
    });

    describe('Allergy Update', function () {
        it('should update all the allergy\'s fields by Id', function (done) {

            request(url)
				.put('/api/allergies/id/' + allergy_id)
				.send({
				    "name": "test",
				    "description": "test"
				})
				.end(function (err, res) {
				    if (err)
				        throw err;
				    res.status.should.be.equal(200);
				    res.body.message.should.be.equal("Allergy successfully updated!");
				    done();
				});
        });

        it('should not update an allergy with an unknown key by Id', function (done) {

            request(url)
				.put('/api/allergies/id/' + allergy_id)
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

        it('should update all the allergy\'s fields by name', function (done) {

            request(url)
				.put('/api/allergies/name/test')
				.send({
				    "name": "test",
				    "description": "titi"
				})
				.end(function (err, res) {
				    if (err)
				        throw err;
				    res.status.should.be.equal(200);
				    res.body.message.should.be.equal("Allergy successfully updated!");
				    done();
				});
        });

        it('should not update an allergy with an unknown key by name', function (done) {

            request(url)
				.put('/api/allergies/name/test')
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

    describe('Allergy Deletion', function () {
        it('should delete an allergy by Name', function (done) {

            request(url)
				.delete('/api/allergies/name/chocolate')
				.end(function (err, res) {
				    if (err)
				        throw err;
				    res.status.should.be.equal(200);
				    res.body.message.should.be.equal("Allergy succesfully deleted!");
				    done();
				});
        });

        it('should delete an allergy by Id', function (done) {

            request(url)
				.delete('/api/allergies/id/' + allergy_id)
				.end(function (err, res) {
				    if (err)
				        throw err;
				    res.status.should.be.equal(200);
				    res.body.message.should.be.equal("Allergy succesfully deleted!");
				    done();
				});
        });

        it('should delete an allergy by JSON', function (done) {

            request(url)
				.delete('/api/allergies/')
				.send({
				    "name": "tomatoes"
				})
				.end(function (err, res) {
				    if (err)
				        throw err;
				    res.status.should.be.equal(200);
				    res.body.message.should.be.equal("Allergy succesfully deleted!");
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

module.exports = "tests-allergy";