/**
 * Created by sylflo on 9/28/15.
 */


/**
* @apiDefine TokenObjectPostParam
*
* @apiParam {String} code Code return by the url http://localhost:3000/api/oauth2/authorize?client_id=this_is_my_id&response_type=code&redirect_uri=http://localhost:3000
* @apiParam {String} grant_type pass authorization_code
* @apiParam {String} redirect_uri The redirect uri of http://localhost:3000/api/oauth2/authorize?client_id=this_is_my_id&response_type=code&redirect_uri=http://localhost:3000
*
*/


/*"access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjbGllbnQiOnsiX2lkIjoiNTYyY2M5YjVlZDQwZGVhYzMyMjZiMzc4IiwidXNlcklkIjoiNTYyY2M5ODBlZDQwZGVhYzMyMjZiMzc2Iiwic2VjcmV0IjoiJDJhJDA1JDYyek5Qc0F6TUs4NWpWZUVYcENLSXVON09BSHppdFRyUktIWXEvSDhqd0xPVS9MVFM3MW9HIiwiaWQiOiJ0aGlzX2lkIiwibmFtZSI6Im5hbWVfY2xpZW50IiwiX192IjowfSwiaWF0IjoxNDQ1Nzc2NzgyLCJleHAiOjE0NDU3OTQ3ODJ9.J6sMSkNN1uQWsQ3PTlWpsXyOBfrN-Y-QDei6zDrD1Kk",
    "token_type": "Bearer"*/
/**
* @apiDefine TokenObjectSuccess
*
* @apiSuccess {String} access_token Id of the token
* @apiSuccess {String} token_type Bearer
*/

/**
* @apiDefine TokenRequestJSON
*
* @apiParamExample {json} Request-Example:
*     {
*       "access_token":"eyJ0eXAiOiJKV1QiLCaWQiOiJ0aGlzX2lkxNDQ1NzQ3PTlWpsXyOBfrNYQDei6zDrD1Kk",
*    	"token_type": "Bearer"
*     }
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
/**
* @api {post} /oauth2/token/ Create a new token for OAuth
* @apiName createToken
* @apiGroup OAuthToken
* @apiVersion 0.1.0
*
* @apiUse TokenObjectPostParam
*
* @apiUse TokenRequestJSON
*
* @apiSuccess message Client succesfully created!
*
* @apiSuccessExample Success-Response
*     HTTP/1.1 200 OK
*	  {
*		"message" : "Client succesfully created!"
*	  }
*
* @apiErrorExample Bad Value Definition
*	  HTTP/1.1 400 BAD REQUEST
*	  {
*		...
*		mongoose custom error
*		...
*	  }
*
*/

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

        authCode.remove(function (err) {
            if (err) {
                return callback(err);
            }
            /* Create a JSON Web Toke instead */
            var token = jwt.sign({client: client}, '18B63D7DDDD8C614227C8F31D8A25DEB92F249C391267DF9A28A5ACC00458837', {expiresIn: 3600 * 5});
            if (token) {
                callback(null, token)
            }
            else {
                callback(err);
            }
        });


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
