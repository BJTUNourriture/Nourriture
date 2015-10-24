/**
 * Created by sylflo on 10/9/15.
 */

var authController = require('../oauth/controllers/auth');
var clientController = require('../oauth/controllers/client');
var oauth2Controller = require('../oauth/controllers/oauth2');

var expressJwt = require('express-jwt');
var express = require('express');
var router = express.Router();
var app = express();

//verify the jwt
var verifyJwt = expressJwt({
    secret: '18B63D7DDDD8C614227C8F31D8A25DEB92F249C391267DF9A28A5ACC00458837',
    getToken: function fromHeaderOrQuerystring(req) {
        if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Topkek')
            return req.headers.authorization.split(' ')[1];

        return null;
    }
});

// Create endpoint handlers for /clients
router.route('/clients')
    .post(verifyJwt, clientController.postClients)
    .get(verifyJwt, clientController.getClients);

// Create endpoint handlers for oauth2 authorize
router.route('/oauth2/authorize')
    .get(authController.isAuthenticated, oauth2Controller.authorization)
    .post(authController.isAuthenticated, oauth2Controller.decision);

// Create endpoint handlers for oauth2 token
router.route('/oauth2/token')
    .post(authController.isClientAuthenticated, oauth2Controller.token);

module.exports = router;
