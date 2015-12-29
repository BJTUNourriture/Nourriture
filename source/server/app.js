var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var session = require('express-session');
var expressJwt = require('express-jwt');
var jwt = require('jsonwebtoken');
var multer = require('multer');
var oauth = require('./routes/oauth');
var api = require('./routes/api');
var routes = require('./routes/index');
var config = require('./config');
var mongoose = require('mongoose');
var app = express();
var os = require("os");

if (app.settings.env !== 'test')
    var logger = require('morgan');

// http://localhost:8101/api/oauth2/authorize?client_id=this_is_my_id&response_type=code&redirect_uri=http://localhost:8101
/* Init const var */
PORT = "8101";

if (os.hostname() === "sylflo.fr") {
    console.log(os.hostname());
    HOSTNAME = "sylflo.fr";
} else {
    console.log(os.hostname());
    HOSTNAME = "127.0.0.1";
}


//jwt secret key set
app.set('jwtSecret', '18B63D7DDDD8C614227C8F31D8A25DEB92F249C391267DF9A28A5ACC00458837');

//sets the db url depending on the env
app.set('db_url', config.db[app.settings.env]);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//CORS middleware
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    next();
}

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
if (app.settings.env !== 'test')
    app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(allowCrossDomain);
app.use('/', express.static(path.join(__dirname, 'public/')));
app.use('/doc-models', express.static(path.join(__dirname, 'public/doc_models/api_doc')));
app.use('/doc-auth', express.static(path.join(__dirname, 'public/doc_auth/api_doc')));

// Use express session support since OAuth2orize requires it
app.use(session({
    secret: 'Super Secret Session Key',
    saveUninitialized: true,
    resave: true
}));

//connects to the db
mongoose.connect(app.get('db_url'));

// Use the passport package in our application
app.use(passport.initialize());


/*
** ROUTE HANDLING
*/
//router
var router = express.Router();

app.use('/', routes);
// Register all our routes with /api
app.use('/api', oauth, api, router);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
/*
** END ROUTE HANDLING
*/


// Make our db accessible to our router
app.use(function (req, res, next) {
    req.db = db;
    next();
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
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
}

app.listen(PORT);
/*if (app.get('env') !== 'test')
{
    console.log(os.hostname());
    console.log(" App listening on port ", PORT);
}*/

module.exports = app;
