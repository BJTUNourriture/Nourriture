// API/controllers/users.js

/**
* @apiDefine UserObjectPostParam
*
* @apiParam {String} username Name of the user
* @apiParam {String} password Passworld of the user
* @apiParam {String} email Email of the user
* @apiParam {String[]} [alergy] List of allergy
* @apiParam {String} [religion] Religion of the user
* @apiParam {Object[]} [pictures] List of user pictures
* @apiParam {String} pictures.thumbnail_url Url of the thumbnail version of the picture
* @apiParam {String} pictures.medium_sized_url Url of the medium size version of the picture
* @apiParam {String} [pictures.big_sized_url] Url of the big size version of the picture
* @apiParam {String[]} [joined_groups]
* @apiParam {Object[]} [like] List of the ingredients a person like
* @apiParam {ObjectId} like.id_ingredient Id of the ingredient liked
* @apiParam {String} like.name_ingredient Name of the ingredient liked
* @apiParam {Object[]} [dislike] List of the ingredients a person dislike
* @apiParam {ObjectId} dislike.id_ingredient Id of the ingredient disliked
* @apiParam {String} dislike.name_ingredient Name of the ingredient disliked
* @apiParam {Object[]} [follow] List of people followed by a person
* @apiParam {ObjectId} follow.id_person Id of the person followed
* @apiParam {String} follow.username Username of the person followed
*/
/**
* @apiDefine UserRequestJSON
*
* @apiParamExample {json} Request-Example:
*
*	[
*		{
*			"username": "Julien",
*			"password": "$2a$05$9.Imko7xVyvWwPcWGf57TOKNTj/JvW9UeByERRPMbvNbCHwXgb5pu",
*			"email": "julien@usa.gov",
*			"alergy" : "["Gluten","Egs"]",
*			"religion": "["boudism","Islam"]",
*			"pictures" : [{
*					"thumbnail_url" : "/thumbnails/1.jpg",
*					"medium_sized_url" : "/medium_sized/1.jpg",
*					"big_sized_url" : "/big_sized/1.jpg"
*			}],
*			"joined_groups" : ["561fc840d6c25173533e267f", "561fc840d6c25173533e267f"],
*			"like" : [{
*					"id_ingredient" : "548ed30d6c2257336f5675",
*					"name_ingredient" : "Carotte"
*			},
*			{
*					"id_ingredient" : "246kf584a9g784312408a442",
*					"name_ingredient" : "Potato"
*			}],
*			"dislike" : [{
*					"id_ingredient" : "302fvd338d2c30185535g805",
*					"name_ingredient" : "Bean"
*			}],
*			"follow" :  [{
*					"id_person" : "689ed300d6c22573533g895",
*					"username" : "bananaman"
*			}]
*		}
*	]
*/



var jwt = require('jsonwebtoken');
var passport = require('passport');
var mail = require('../../tools/nodemailer');
var emailToken = require('../models/email-token-verification');

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

        var verificationToken = new emailToken({
            user_id : user._id
        });

        verificationToken.createVerificationToken(function(err, token){
            if (err)
                return (res.send(err));
            console.log(user.email);
            mail.transporter.sendMail(mail.mailOptionsEmailConfirm(token, user.email), function(error, info){
                if (error)
                    console.log(error);
                console.log("Message sent" + info.response);
            });
        });
        mail.mailOptionsGreeting["to"] = user.email;
        mail.transporter.sendMail(mail.mailOptionsGreeting, function(error, info){
            if (error)
                console.log(error);
            console.log("Message sent" + info.response);
        });
        return (res.json({message: 'User succesfully created!'}));
    });
};

exports.signinUser = function (req, res, next) {
  if (!req.body.username)
  return (res.status(401).json({message: "Username field must not be empty"}));
  if (!req.body.password)
  return (res.status(401).json({message: "Password field must not be empty"}));
  User.findOne({username: req.body.username}, function (err, user) {
    if (err)
    return (res.status(400).send(err));
    if (!user)
    return (res.status(401).json({message: "Please verify the username provided."}));
    user.verifyPassword(req.body.password, function (err, isMatch) {
      if (err)
      return (res.status(400).send(err));
      if (!isMatch)
      return (res.status(401).json({message: "Please verify the password provided."}));
      var token = jwt.sign(user, req.app.get("jwtSecret"), {expiresIn: 3600 * 5});
      return (res.json({key: token}));
    });
  });
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
* @apiUse UserRequestJSON
*
* @apiSuccess message User succesfully created!
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

/*
** PUTS
*/

/**
* @apiDefine UserServerAnswersPut
*
* @apiSuccessExample Success-Response
*     HTTP/1.1 200 OK
*	  {
*		"message" : "User successfully updated!"
*	  }
*
* @apiError message User not found.
*
* @apiErrorExample Invalid Parameter Value
*	  HTTP/1.1 404 Bad Request
*	  {
*		"message" : "User not found."
*	  }
*
* @apiError message The key <key> does not exist for User.
*
* @apiErrorExample Bad key sent
*	  HTTP/1.1 400 Bad Request
*	  {
*		"message" : "The key <key> does not exist for User."
*	  }
*
* @apiErrorExample Bad Value Definition
*	  HTTP/1.1 200 OK
*	  {
*		...
*		mongoose custom error
*		...
*	  }
*/

/**
* @api {put} /users/id/:id Update a User by Id
* @apiName putUserById
* @apiGroup Users
* @apiVersion 0.1.0
*
* @apiUse UserRequestJSON
*
*/
exports.putUserById = function (req, res) {
  if (!req.params.id || Object.keys(req.body).length === 0)
  return (res.status(400).json({ message: 'The id musn\'t be null and the request must not be empty.' }));
  User.findById(req.params.id,
    function (err, user) {
        if (!req.body.like && !req.body.dislike && !req.body.follow) {
            return (module.exports.updateUser(req, res, err, user));
        }
        else {
            return (module.exports.updateUserLDF(req, res, err, user));
        }
    });
  }

  /**
  * @api {put} /users/username/:username Update a User by username
  * @apiName putUserByName
  * @apiGroup Users
  * @apiVersion 0.1.0
  *
  * @apiUse UserRequestJSON
  *
  * @apiSuccess message User successfully updated!
  *
  *
  */
  exports.putUserByUsername = function (req, res) {
    if (!req.params.name || Object.keys(req.body).length === 0)
    return (res.status(400).json({ message: 'The name musn\'t be null and the request must not be empty.' }));
    User.findOne({
      "username": req.params.name
    },
    function (err, user) {
        if (!req.body.like && !req.body.dislike && !req.body.follow) {
            return (module.exports.updateUser(req, res, err, user));
        }
        else {
            return (module.exports.updateUserLDF(req, res, err, user));
        }
    });
  }

  exports.updateUser = function (req, res, err, user) {
    var fields = ["password", "email", "token", "gender", "facebook", "twitter", "google", "alergy", "religion", "pictures", "joined_groups", "calories"];
    var sent_fields = Object.keys(req.body);

    if (err)
      return (res.send(err));
    else if (user === null)
      return (res.status(404).json({ message: 'User not found.' }))

    for (i = 0; i < sent_fields.length; i++) {
      if (!(fields.indexOf(sent_fields[i]) > -1))
        return (res.status(400).json({ message: 'The key <' + sent_fields[i] + '> is not accessible for User.' }));
      user[sent_fields[i]] = req.body[sent_fields[i]];
    }

    user.save(function (err) {
      if (err)
      return (res.send(err));
      return (res.json({ message: "User successfully updated!" }));
    });
    return (1);
  }

  exports.updateUserLDF = function (req, res, err, user) {
      var fields = ["like", "dislike", "follow"];
      var sent_fields = Object.keys(req.body);

      if (err)
          return (res.send(err));
      else if (user === null)
          return (res.status(404).json({ message: 'User not found.' }))

      for (i = 0; i < sent_fields.length; i++) {
          if (!(fields.indexOf(sent_fields[i]) > -1))
              return (res.status(400).json({ message: 'The key <' + sent_fields[i] + '> is not accessible for UserLDF.' }));
          user[sent_fields[i]] = req.body[sent_fields[i]];
      }

      user.save(function (err) {
          if (err)
              return (res.send(err));
          return (res.json({ message: "User successfully updated!" }));
      });
      return (1);
  }

/**
* @api {get} /users/verify-email/:token Verify a user email
* @apiName verifyEmail
* @apiGroup Users
* @apiVersion 0.1.0
*
* @apiParam {String} token Token to verify
*
* @apiSuccess message Email confirmed successfully.
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*   {
*   "message" : "Email confirmed successfully."
*   }
*
* @apiError message Email already confirmed or bad token.
*
* @apiErrorExample Invalid Parameter Value
*   HTTP/1.1 404 Bad Request
*   {
*   "message" : "Email already confirmed or bad token."
*   }
*
*/

exports.verifyEmail = function (req, res, err) {
    emailToken.findOne({token : req.params.token}, function(err, doc) {
        if (err)
            return (res.send(err));
        else if (doc === null)
            return (res.status(404).json({ message: 'Email already confirmed or bad token.' }))
        User.findOne({_id : doc.user_id}, function(err, user) {
        if (err)
            return (res.send(err));
        else if (doc === null)
            return (res.status(400).json({ message: 'Email already confirmed.' }))
        user["email_verified"] = true;
        user.save(function(err) {
            if (err)
                return (res.send(err));
            emailToken.remove({_id : doc._id}, function(err, removed) {
                if (err)
                    return (res.send(err));
                });
            return (res.json({message : "Email confirmed successfully."}));
            })
        })
    })
};