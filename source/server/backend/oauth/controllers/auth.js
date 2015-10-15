/**
 * Created by sylflo on 9/28/15.
 */
var passport = require('passport');
var BasicStrategy = require('passport-http').BasicStrategy;
var BearerStrategy = require('passport-http-bearer').Strategy;
var GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
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
    function (username, password, callback) {
        Client.findOne({id: username}, function (err, client) {
            if (err) {
                return callback(err);
            }

            // No client found with that id or bad password
            if (!client || client.secret !== password) {
                return callback(null, false);
            }

            // Success
            return callback(null, client);
        });
    }
));

passport.use(new BearerStrategy(
    function (accessToken, callback) {
        Token.findOne({value: accessToken}, function (err, token) {
            if (err) {
                return callback(err);
            }

            // No token found
            if (!token) {
                return callback(null, false);
            }

            User.findOne({_id: token.userId}, function (err, user) {
                if (err) {
                    return callback(err);
                }

                // No user found
                if (!user) {
                    return callback(null, false);
                }

                // Simple example with no scope
                callback(null, user, {scope: '*'});
            });
        });
    }
));

passport.use(new GoogleStrategy({
        clientID:     '229011235874-iimjsj4ch55a5n67itije3pfq12ueuh2.apps.googleusercontent.com',
        clientSecret: 'H45chsqoalyiVAMe3CaPiCTb',
        callbackURL: "http://127.0.0.1:8101/auth/google/callback",
        passReqToCallback   : true
    },
    function(request, accessToken, refreshToken, profile, done) {
        User.findOrCreate({googleID : profile.id}, function (err, user) {
            return done(err, user);
        });
    }
));


passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});

exports.isClientAuthenticated = passport.authenticate('client-basic', {session: false});
exports.isAuthenticated = passport.authenticate(['basic', 'bearer'], { session : false });
//exports.isAuthenticated = [];
