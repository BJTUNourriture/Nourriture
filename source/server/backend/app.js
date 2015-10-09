var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var session = require('express-session');

var beerController = require('./oauth/controllers/beer');
var userController = require('./oauth/controllers/user');
var authController = require('./oauth/controllers/auth');
var clientController = require('./oauth/controllers/client');
var oauth2Controller = require('./oauth/controllers/oauth2');
var ingredientsController = require('./API/controllers/ingredients');


var routes = require('./routes/index');
var users = require('./routes/users');

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


/*db.collection('usercollection').find().toArray(function(err, result) {
 if (err) throw err;
 console.log(result);
 });*/

app.use('/', routes);
/*app.use('/users', users);*/

// Make our db accessible to our router
/*app.use(function (req, res, next) {
 req.db = db;
 next();
 });*/

var router = express.Router();

// Initial dummy route for testing
// http://localhost:3000/api
router.get('/', function (req, res) {
    res.json({message: 'You are running dangerously low on beer!'});
});


// Create endpoint handlers for /beers
router.route('/beers')
    //.post(beerController.postBeers)
    // .get(beerController.getBeers);
    .post(authController.isAuthenticated, beerController.postBeers)
    .get(authController.isAuthenticated, beerController.getBeers);


// Create endpoint handlers for /beers/:beer_id
router.route('/beers/:beer_id')
    .get(authController.isAuthenticated, beerController.getBeer)
    .put(authController.isAuthenticated, beerController.putBeer)
    .delete(authController.isAuthenticated, beerController.deleteBeer);

//Create endpoint handlers for /users
router.route('/users')
    .post(userController.postUsers)
    .get(authController.isAuthenticated, userController.getUsers);

// Create endpoint handlers for /clients
router.route('/clients')
    .post(authController.isAuthenticated, clientController.postClients)
    .get(authController.isAuthenticated, clientController.getClients);

// Create endpoint handlers for oauth2 authorize
router.route('/oauth2/authorize')
    .get(authController.isAuthenticated, oauth2Controller.authorization)
    .post(authController.isAuthenticated, oauth2Controller.decision);

// Create endpoint handlers for oauth2 token
router.route('/oauth2/token')
    .post(authController.isClientAuthenticated, oauth2Controller.token);

/* 
** Endpoints for Ingredients
*/
//full JSON endpoints
router.route('/ingredients')
  .post(ingredientsController.postIngredient)
  .delete(ingredientsController.deleteIngredients);

//endpoints by id
router.route('/ingredients/:id')
  .delete(ingredientsController.deleteIngredientById);
  
// Register all our routes with /api
app.use('/api', router);

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

// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/nourriture');

//var db = require('mongoskin').db('mongodb://localhost:27017/nourriture');


/*db.collection('usercollection').find().toArray(function(err, result) {
  if (err) throw err;
  console.log(result);
});*/

app.use('/', routes);
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

app.listen("8000");
console.log("App listening on port 8000");
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
