var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var session = require('express-session');


var oauth = require('./routes/oauth');
var api = require('./routes/api');
var routes = require('./routes/index');
var users = require('./routes/users');
//var social_network = require('./routes/social_network');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Use express session support since OAuth2orize requires it
app.use(session({
    secret: 'Super Secret Session Key',
    saveUninitialized: true,
    resave: true
}));


var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/nourriture');

// Use the passport package in our application
app.use(passport.initialize());


//var db = require('mongoskin').db('mongodb://localhost:27017/nourriture');
// Make our db accessible to our router
/*app.use(function (req, res, next) {
 req.db = db;
 next();
 });*/


app.use('/', routes);
/*app.use('/users', users);*/


app.get('/auth/google',
    passport.authenticate('passport-google', { scope: 'https://www.googleapis.com/auth/plus.login' }));

app.get('/auth/google/callback',
    passport.authenticate('passport-google', { failureRedirect: '/login' }),
    function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
    });


var router = express.Router();

// Register all our routes with /api
app.use('/api', oauth, api, router);

// catch 404 and forward to error handler
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//app.use('/', routes);
//app.use('/users', users);

// Make our db accessible to our router
app.use(function(req,res,next){
    req.db = db;
    next();
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {

    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

app.listen("8101");
console.log(" App listening on port 8101");
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
