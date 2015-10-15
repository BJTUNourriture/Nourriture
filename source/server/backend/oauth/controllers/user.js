/**
 * Created by sylflo on 9/28/15.
 */
var User = require('../models/user');
var Create_token = require('../misc/create_token_at_init_user');

exports.postUsers = function (req, res) {

    var user = new User({
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });


    user.save(function (err) {
        if (err) {
            console.log("user save function", err);
            return res.send(err);
        }

    });

    Create_token(user, res);





};

exports.getUsers = function (req, res) {

    User.find(function (err, users) {
        if (err)
            res.send(err);

        res.json(users);
    });
};


