/**
 * Created by sylflo on 9/28/15.
 */

var jwt = require('jsonwebtoken');
var passport = require('passport');

 // API/controllers/users.js

 /**
 * @apiDefine UserObjectPostParam
 *
 * @apiParam {String} username Name of the user
 * @apiParam {String} password Passworld of the user
 * @apiParam {String} email Email of the user
 * @apiParam {String[]} [alergy] List of allergy
 * @apiParam {String} [religion] Religion of the user
 * @apiParam {String[]} [likedreceip]
 * @apiParam {String[]} [photos] List of user photos
 * @apiParam {String[]} [group]
 * @apiParam {String} [calories]
 */
 /**
 * @apiDefine UserRequestJSON
 *
 * @apiParamExample {json} Request-Example:
 *
 *  [
 *     {
 *       "username": "Julien",
 *       "password": "$2a$05$9.Imko7xVyvWwPcWGf57TOKNTj/JvW9UeByERRPMbvNbCHwXgb5pu",
 *       "email": "julien@usa.gov",
 *       "alergy" : "["Gluten","Egs"]",
 *       "religion": "",
 *       "likedreceip" : "["Tripes à la mode de Caen", "Tarte marinée à la grenadine", "Farci poitevin", " Roubignolles de porc à la bechamel"]",
 *       "photos" : "[]",
 *       "groups" : "["J aime le Chocolat Noir", "Aidez moi à Grossir", "Objectif 8000 calories par jour"]",
 *       "calories" : ""
 *     }
 *  ]
 */
var User = require('../models/users');
//var Create_token = require('../../oauth/misc/create_token_at_init_user');


exports.postUser = function (req, res) {

    var user = new User({
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        alergy: req.body.alergy,
        religion: req.body.religion
    });


    user.save(function (err) {
        if (err) {
            console.log("user save function", err);
            return res.send(err);
        }
        return (res.json({message: 'User succesfully created!'}));
    });
};

exports.signinUser = function(req, res, next) {

    passport.authenticate('basic', function(err, user, info) {
        if (err)
            return (next(err));
        if (!user)
            return (res.status(401).json({message : "Verify the username and password provided."}));
        var token = jwt.sign(user, secret, {expiresInMinutes: 60 * 5});
        return (res.json({key : token}));
    })(req, res, next);
};

/*
** GET
*/

/**
* @api {get} /users/ Retrive all Users
* @apiName postUser
* @apiGroup Users
* @apiVersion 0.1.0
*
* @apiUse UserObjectPostParam
*
* @apiUse UserRequestJSON
*
* @apiSuccess message Recipe succesfully created!
*
*
*/

exports.getUsers = function (req, res) {

    User.find(function (err, users) {
        if (err)
            res.send(err);

        res.json(users);
    });
};

