/**
 * Created by sylflo on 9/28/15.
 */
var User = require('../models/user');

exports.postUsers = function (req, res) {

    var user = new User({
        username: req.body.username,
        password: req.body.password
    });

    console.log("postUser");

    user.save(function (err) {
        if (err) {
            console.log("toto");
            res.send(err);
        }

        res.json({message: 'New beer drinker added to the locker room!'});
    });
};

exports.getUsers = function (req, res) {

    User.find(function (err, users) {
        if (err)
            res.send(err);

        res.json(users);
    });
};
