/**
 * Created by sylflo on 9/28/15.
 */
var passport = require('passport');
var BasicStrategy = require('passport-http').BasicStrategy;
var BearerStrategy = require('passport-http-bearer').Strategy;
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var User = require('../models/user');
var Client = require('../models/client');
var Token = require('../models/token');

passport.use(new BasicStrategy(
    function (username, password, callback) {
        User.findOne({username: username}, function (err, user) {
            if (err) {
                return callback(err);
            }

            // No user found with that username
            if (!user) {
                return callback(null, false);
            }

            // Make sure the password is correct
            user.verifyPassword(password, function (err, isMatch) {
                if (err) {
                    return callback(err);
                }

                // Password did not match
                if (!isMatch) {
                    return callback(null, false);
                }

                // Success
                return callback(null, user);
            });
        });
    }
));

passport.use('client-basic', new BasicStrategy(
    function(username, password, callback) {
        Client.findOne({ id: username }, function (err, client) {
            if (err) { return callback(err); }

            // No client found with that id or bad password
            if (!client || client.secret !== password) { return callback(null, false); }

            // Success
            return callback(null, client);
        });
    }
));

passport.use(new BearerStrategy(
    function(accessToken, callback) {
        Token.findOne({value: accessToken }, function (err, token) {
            if (err) { return callback(err); }

            // No token found
            if (!token) { return callback(null, false); }

            User.findOne({ _id: token.userId }, function (err, user) {
                if (err) { return callback(err); }

                // No user found
                if (!user) { return callback(null, false); }

                // Simple example with no scope
                callback(null, user, { scope: '*' });
            });
        });
    }
));

passport.use('passport-google', new GoogleStrategy({
        clientID: '229011235874-jvr387qssa4pmincbbbh368is28b32fu.apps.googleusercontent.com',
        clientSecret: 'R71nGX21b1Sd4bMy79p2C0hM',
        callbackURL: "http://nourriture.sylflo.fr/auth/google/callback"
    },
    function(accessToken, refreshToken, profile, done) {
        console.log(accessToken, " YOu are logged in");
     /*   User.findOrCreate({ googleId: profile.id }, function (err, user) {
            return done(err, user);
        });*/
    }
));


exports.isClientAuthenticated = passport.authenticate('client-basic', { session : false });
exports.isAuthenticated = passport.authenticate(['basic', 'bearer', 'passport-google'], { session : false });
