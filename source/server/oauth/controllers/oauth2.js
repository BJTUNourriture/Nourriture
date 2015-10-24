/**
 * Created by sylflo on 9/28/15.
 */
var oauth2orize = require('oauth2orize');
var User = require('../../API/models/users');
var Client = require('../models/client');
var Token = require('../models/token');
var Code = require('../models/code');

var jwt = require('jsonwebtoken');
var server = oauth2orize.createServer();

// Register serialialization function
server.serializeClient(function (client, callback) {
    return callback(null, client._id);
});

// Register deserialization function
server.deserializeClient(function (id, callback) {
    Client.findOne({_id: id}, function (err, client) {
        if (err) {
            return callback(err);
        }
        return callback(null, client);
    });
});

// Register authorization code grant type
server.grant(oauth2orize.grant.code(function (client, redirectUri, user, ares, callback) {
    // Create a new authorization code
    var code = new Code({
        value: uid(16),
        clientId: client._id,
        redirectUri: redirectUri,
        userId: user._id
    });

    // Save the auth code and check for errors
    code.save(function (err) {
        if (err) {
            return callback(err);
        }

        callback(null, code.value);
    });
}));

// Exchange authorization codes for access tokens
server.exchange(oauth2orize.exchange.code(function (client, code, redirectUri, callback) {


    Code.findOne({value: code}, function (err, authCode) {

        if (err) {
            return callback(err);
        }
        if (authCode === undefined) {
            return callback(null, false);
        }
        if (client._id.toString() !== authCode.clientId) {
            console.log("ID MATCHES");
            return callback(null, false);
        }
        if (redirectUri !== authCode.redirectUri) {
            console.log("REDIRECT URI PROBLEM");
            return callback(null, false);
        }



            /* Create a JSON Web Toke instead */
            var token = jwt.sign({client: client}, '18B63D7DDDD8C614227C8F31D8A25DEB92F249C391267DF9A28A5ACC00458837', {expiresIn: 3600 * 5});
            if (token) {
                console.log("token oauth2 == ", token);
                callback(null, token)
            }
            else {
                callback(err);
            }

       // });
    });
}));

// User authorization endpoint
exports.authorization = [
    server.authorization(function (clientId, redirectUri, callback) {

        Client.findOne({id: clientId}, function (err, client) {
            if (err) {
                return callback(err);
            }

            return callback(null, client, redirectUri);
        });
    }),
    function (req, res) {
        res.render('dialog', {transactionID: req.oauth2.transactionID, user: req.user, client: req.oauth2.client});
    }
];

// User decision endpoint
exports.decision = [
    server.decision()
];

// Application client token exchange endpoint
exports.token = [
    server.token(),
    server.errorHandler()
];

function uid(len) {
    var buf = []
        , chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        , charlen = chars.length;

    for (var i = 0; i < len; ++i) {
        buf.push(chars[getRandomInt(0, charlen - 1)]);
    }

    return buf.join('');
};

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}