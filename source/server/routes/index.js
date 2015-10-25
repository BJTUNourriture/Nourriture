var express = require('express');
var router = express.Router();
var app = express();
var path = require('path');

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

// defines the home page route
router.get('/', function(req, res) {
	res.render('index.jade');
});

// defines the route for API doc models
router.get('/doc-models', function(req, res) {
	res.render('doc_models.jade', {root : "./public/doc_models/api_doc"});
});

// defines the route for API doc authentication
router.get('/doc-auth', function(req, res) {
	res.render('doc_auth.jade', {root : "./public/doc_auth/api_doc"});
});

module.exports = router;
