var express = require('express');
var router = express.Router();
var app = express();




// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route
router.get('/', function(req, res) {
  res.send('NOURRITURE BASE JSON');
});

// /* GET Userlist page. */
// router.get('/userlist', function(req, res) {
//     var db = req.db;
//     var collection = db.get('usercollection');
//     collection.find({},{},function(e,docs){
//         res.render('userlist', {
//             "userlist" : docs
//         });
//     });
// });

// // define the about route
// router.get('/about', function(req, res) {
//   res.send('NOURRITURE BASE JSON');
// });

module.exports = router;
