/**
 * Created by sylflo on 10/9/15.
 */

var beerController = require('../oauth/controllers/beer');
var userController = require('../oauth/controllers/user');
var authController = require('../oauth/controllers/auth');
var clientController = require('../oauth/controllers/client');
var oauth2Controller = require('../oauth/controllers/oauth2');

var express = require('express');
var router = express.Router();
var app = express();

// Initial dummy route for testing
// http://localhost:3000/api


// Create endpoint handlers for /beers
router.route('/beers')
    //.post(beerController.postBeers)
    // .get(beerController.getBeers);
    .post(authController.isAuthenticated, beerController.postBeers)
    .get(authController.isAuthenticated, beerController.getBeers);


// Create endpoint handlers for /beers/:beer_id
router.route('/beers/:beer_id')
    .get(authController.isAuthenticated, beerController.getBeer)
    .put(authController.isAuthenticated, beerController.putBeer)
    .delete(authController.isAuthenticated, beerController.deleteBeer);

//Create endpoint handlers for /users
router.route('/users')
    .post(userController.postUsers)
    .get(authController.isAuthenticated, userController.getUsers);

// Create endpoint handlers for /clients
router.route('/clients')
    .post(authController.isAuthenticated, clientController.postClients)
    .get(authController.isAuthenticated, clientController.getClients);

// Create endpoint handlers for oauth2 authorize
router.route('/oauth2/authorize')
    .get(authController.isAuthenticated, oauth2Controller.authorization)
    .post(authController.isAuthenticated, oauth2Controller.decision);

// Create endpoint handlers for oauth2 token
router.route('/oauth2/token')
    .post(authController.isClientAuthenticated, oauth2Controller.token);

module.exports = router;
