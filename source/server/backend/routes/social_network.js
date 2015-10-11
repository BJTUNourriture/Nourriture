/**
 * Created by sylflo on 10/11/15.
 */

var express = require('express');
var router = express.Router();
var app = express();

// home page route (http://localhost:8080)
router.get('/login-facebook', function(req, res) {
    res.render('login-facebook');
});
