/**
 * Created by sylflo on 10/9/15.
 */

var Client = require('../models/client');
var Code = require('../models/code');
var Token = require('../models/token');

function create_token(user, res) {
    var redirectUri = 'localhost:8000';


    var name_client = 'API' + user.username;

    var client = new Client({
        name: name_client,
        id: 'this_is_my_id',
        secret: 'this_is_my_secret',
        userId: user._id
    });

    client.save(function (err) {
        if (err) {
            console.log("client save function ", user._id);
            return res.send(err);
        }
    });

    console.log("client id ONE", client._id);

    var value_code = uid(16);
    var code = new Code({
        value: value_code,
        clientId: client._id,
        redirectUri: 'localhost:8000',
        userId: user._id
    });

    // Save the auth code and check for errors
    code.save(function (err) {
        if (err) {
            console.log("code save err");
            return res.send(err);
        }

        //callback(null, code.value);
    });



    Code.findOne({value: value_code}, function (err, authCode) {
        console.log("AuthCode = ", authCode, '\n\n');
        console.log("CLient id", client._id, '\n\n');
        //console.log("Authcode Cloent id", '\n\n');
        if (err) {
            console.log("code find err", err);
            return res.send(err);
        }
        if (authCode === undefined) {
            console.log("console authCode Cpode ", err);
            return res.send(err);
        }
        if (client._id.toString() !== authCode.clientId) {
            console.log("error client id Code", err);
            return res.send(err)
        }
        if (redirectUri !== authCode.redirectUri) {
            console.log("error redirectUri Code", err);
            return res.send(err);
        }

        // Delete auth code now that it has been used
        authCode.remove(function (err) {
            if (err) {
                console.log("remove thing authCode");
                return res.send(err);
            }

            // Create a new access token
            var token = new Token({
                value: uid(256),
                clientId: authCode.clientId,
                userId: authCode.userId
            });

            // Save the access token and check for errors
            token.save(function (err) {
                if (err) {
                    console.log("Token created");
                    return res.send(err);
                }

                //callback(null, token);
            });
            return res.json({message: 'New user added un token give', token: token});

        });


    });
}

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



module.exports = ('createToken', create_token);