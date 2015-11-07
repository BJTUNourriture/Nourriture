// API/controllers/users.js

/**
* @apiDefine UserObjectPostParam
*
* @apiParam {String} username Name of the user
* @apiParam {String} email Email of the user
* @apiParam {Object[]} [alergy] List of allergy
* @apiParam {Object[]} [religion] Religion of the user
* @apiParam {Object[]} [pictures] List of user pictures
* @apiParam {String} pictures.thumbnail_url Url of the thumbnail version of the picture
* @apiParam {String} pictures.medium_sized_url Url of the medium size version of the picture
* @apiParam {String} [pictures.big_sized_url] Url of the big size version of the picture
* @apiParam {Object[]} [joined_groups]
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
* @apiDefine UserObjectPostRegisterParam
*
* @apiParam {String} username Name of the user
* @apiParam {String} email Email of the user
* @apiParam {String} password Password of the user
* @apiParam {Object[]} [alergy] List of allergy
* @apiParam {Object[]} [religion] Religion of the user
* @apiParam {Object[]} [pictures] List of user pictures
* @apiParam {String} pictures.thumbnail_url Url of the thumbnail version of the picture
* @apiParam {String} pictures.medium_sized_url Url of the medium size version of the picture
* @apiParam {String} [pictures.big_sized_url] Url of the big size version of the picture
* @apiParam {Object[]} [joined_groups]
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
* @apiDefine UserObjectPutParam
*
* @apiParam {String} [username] Name of the user
* @apiParam {String} [email] Email of the user
* @apiParam {Object[]} [alergy] List of allergy
* @apiParam {Object[]} [religion] Religion of the user
* @apiParam {Object[]} [pictures] List of user pictures
* @apiParam {String} pictures.thumbnail_url Url of the thumbnail version of the picture
* @apiParam {String} pictures.medium_sized_url Url of the medium size version of the picture
* @apiParam {String} [pictures.big_sized_url] Url of the big size version of the picture
* @apiParam {Object[]} [joined_groups]
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
* @apiDefine UsersObjectSuccess
*
* @apiParam {String} username Name of the user
* @apiParam {String} email Email of the user
* @apiParam {Object[]} [alergy] List of allergy
* @apiParam {Object[]} [religion] Religion of the user
* @apiParam {Object[]} [pictures] List of user pictures
* @apiParam {String} pictures.thumbnail_url Url of the thumbnail version of the picture
* @apiParam {String} pictures.medium_sized_url Url of the medium size version of the picture
* @apiParam {String} [pictures.big_sized_url] Url of the big size version of the picture
* @apiParam {Object[]} [joined_groups]
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
* @apiDefine UserObjectSuccess
*
* @apiSuccess {String} username Name of the user
* @apiSuccess {String} email Email of the user
* @apiSuccess {Object[]} [alergy] List of allergy
* @apiSuccess {Object[]} [religion] Religion of the user
* @apiSuccess {Object[]} [pictures] List of user pictures
* @apiSuccess {String} pictures.thumbnail_url Url of the thumbnail version of the picture
* @apiSuccess {String} pictures.medium_sized_url Url of the medium size version of the picture
* @apiSuccess {String} [pictures.big_sized_url] Url of the big size version of the picture
* @apiSuccess {Object[]} [joined_groups]
* @apiSuccess {Object[]} [like] List of the ingredients a person like
* @apiSuccess {ObjectId} like.id_ingredient Id of the ingredient liked
* @apiSuccess {String} like.name_ingredient Name of the ingredient liked
* @apiSuccess {Object[]} [dislike] List of the ingredients a person dislike
* @apiSuccess {ObjectId} dislike.id_ingredient Id of the ingredient disliked
* @apiSuccess {String} dislike.name_ingredient Name of the ingredient disliked
* @apiSuccess {Object[]} [follow] List of people followed by a person
* @apiSuccess {ObjectId} follow.id_person Id of the person followed
* @apiSuccess {String} follow.username Username of the person followed
*/

/**
* @apiDefine UserRequestJSON
*
* @apiParamExample {json} Request-Example:
*
*	[
*		{
*			"username": "Julien",
*			"email": "julien@usa.gov",
*
*			"joined_groups" : [{
*					"id_group" : "548ed30d6c2257336f5675",
*					"name" : "Saucisson Choux Fleurs"
*			}],
*			"religion" : [{
*					"id_religion" : "548ed30d6c2257336f5675",
*					"name" : "Boudism"
*			}],
*			"alergy" : [{
*					"id_ingredient" : "548ed30d6c2257336f5675",
*					"name" : "Bettrave Rouge"
*			}],
*			"pictures" : [{
*					"thumbnail_url" : "/thumbnails/1.jpg",
*					"medium_sized_url" : "/medium_sized/1.jpg",
*					"big_sized_url" : "/big_sized/1.jpg"
*			}],
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

/**
* @api {post} /users/register Create a new User
* @apiName postUser
* @apiGroup Users
* @apiVersion 0.1.0
*
* @apiUse UserObjectPostRegisterParam
*
*
* @apiUse UserRequestJSON
*
* @apiSuccess message User succesfully created!
*
* @apiSuccessExample Success-Response
*     HTTP/1.1 200 OK
*   {
*   "message" : "User succesfully created!"
*   }
*
* @apiErrorExample Bad Value Definition
*   HTTP/1.1 400 BAD REQUEST
*   {
*   ...
*   mongoose custom error
*   ...
*   }
*/
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
          return res.status(401).send(err);
        }

        var verificationToken = new emailToken({
            user_id : user._id
        });

        verificationToken.createVerificationToken(function(err, token){
            if (err)
                return (res.status(401).send(err));
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

/**
* @api {post} /users/sign-in/ Sign a user in
* @apiName signinUser
* @apiGroup Users
* @apiVersion 0.1.0
*
* @apiParam {String} username Name of the user
* @apiParam {String} password Password of the user
*
* @apiParamExample {json} Request-Example:
*
* {
*   "username" : "toto",
*   "password" : "topkek"
* }
*
* @apiSuccess key <token>.
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*   {
*   "key" : "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.ey"
*   }
*
* @apiError message Username field must not be empty
*
* @apiErrorExample Username empty
*   HTTP/1.1 401 Bad Request
*   {
*   "message" : "Username field must not be empty"
*   }
*
* @apiError message Password field must not be empty
*
* @apiErrorExample Password empty
*   HTTP/1.1 401 Bad Request
*   {
*   "message" : "Password field must not be empty"
*   }
*
* @apiError message Please verify the username provided.
*
* @apiErrorExample Bad Username
*   HTTP/1.1 401 Bad Request
*   {
*   "message" : "Please verify the username provided."
*   }
*
* @apiError message Please verify the password provided.
*
* @apiErrorExample Bad Password
*   HTTP/1.1 401 Bad Request
*   {
*   "message" : "Please verify the password provided."
*   }
*/
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
* @apiDefine getUserAnswer
*
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*	[
*		{
*			"username": "Julien",
*			"email": "julien@usa.gov",
*			"joined_groups" : [{
*					"id_group" : "548ed30d6c2257336f5675",
*					"name" : "Saucisson Choux Fleurs"
*			}],
*			"religion" : [{
*					"id_religion" : "548ed30d6c2257336f5675",
*					"name" : "Boudism"
*			}],
*			"alergy" : [{
*					"id_ingredient" : "548ed30d6c2257336f5675",
*					"name" : "Bettrave Rouge"
*			}],
*			"pictures" : [{
*					"thumbnail_url" : "/thumbnails/1.jpg",
*					"medium_sized_url" : "/medium_sized/1.jpg",
*					"big_sized_url" : "/big_sized/1.jpg"
*			}],
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

/**
* @api {get} /users/id/:id Request User informations by id
* @apiName getUsersById
* @apiGroup Users
* @apiVersion 0.1.0
*
* @apiParam {Number} id User unique ID
*
* @apiUse UserObjectSuccess
*
* @apiUse getUserAnswer
*
* @apiError message The id of the group was not found
* @apiErrorExample Invalid Parameter Value
*     HTTP/1.1 404 Not Found
*     {
*       "message": "The id was not found."
*     }
*/
exports.getUserById = function (req, res, flag) {
	var id = flag === true ? req.body.id : req.params.id;
	if (!id)
		return flag === true ? -1 : res.json(400, {message : 'The id musn\'t be null'});
	Users.findById(id,
		function (err, doc) {
			if (err)
				return (res.send(err));
			else if (doc === null)
				return (res.json(404, {message : 'The id was not found.'}))
			return (res.json(doc));
		}
	);
	return (1);
};

/**
* @api {get} /users/name/:name Request User informations by name
* @apiName getUserByName
* @apiGroup Users
* @apiVersion 0.1.0
*
* @apiParam {String} username User name
*
* @apiUse UserObjectSuccess
*
* @apiUse getUserAnswer
*
* @apiError message The name of the group was not found
* @apiErrorExample Invalid Parameter Value
*     HTTP/1.1 404 Not Found
*     {
*       "message": "The name was not found."
*     }
*/
exports.getUserByName = function (req, res, flag) {
	var name = flag === true ? req.body.name : req.params.name;
	if (!name)
		return flag === true ? -1 : res.json(400, {message : 'The name musn\'t be null'});
	Users.find({
		"username": { "$regex": name, "$options": "i" }
		},
		function (err, docs) {
			if (err)
				return (res.send(err));
			else if (docs.length <= 0)
				return (res.json(404, {message : 'The name was not found.'}))
			return (res.json(docs));
		}
	);
	return (1);
};

/**
* @api {get} /users/ Retrive all Users
* @apiName postUser
* @apiGroup Users
* @apiVersion 0.1.0
*
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
* @apiUse UserObjectPutParam
*
* @apiUse UserRequestJSON
*
* @apiSuccess message User successfully updated!
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
	* @apiUse UserObjectPutParam
  *
  * @apiUse UserRequestJSON
  *
  * @apiSuccess message User successfully updated!
  *
  *
  */
  exports.putUserByUsername = function (req, res) {
    if (!req.params.username || Object.keys(req.body).length === 0)
    	return (res.status(400).json({ message: 'The username musn\'t be null and the request must not be empty.' }));
    User.findOne({
      "username": req.params.username
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
*** DELETES
**/

/**
* @apiDefine deleteUsersSuccess
* @apiSuccess message Users succesfully deleted!
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "Group succesfully deleted!"
*     }
*/

	/**
	* @api {delete} /users/ Delete all Users
	* @apiName deleteUsers
	* @apiGroup Users
	* @apiVersion 0.1.0
	*
	*/

	exports.deleteUsers = function (req, res) {
		var i = -1;
		var callbackReturn = -1;
		var functionPointer = [module.exports.deleteUserById(req, res, true),
								module.exports.deleteUserByName(req, res, true)];
		var usage = "No correct argument given. Specify an id or a name";

		while ((callbackReturn = functionPointer[++i]) == -1
			&& i < functionPointer.length - 1);
		return callbackReturn == -1 ? res.json({message : usage}) : callbackReturn;

	};

	/**
	* @api {delete} /users/id/:id Delete User by id
	* @apiName deleteUserById
	* @apiGroup Users
	* @apiVersion 0.1.0
	*
	* @apiParam {Number} [id] user unique ID
	*
	* @apiParamExample {json} Request-Example:
	*	  {
	*		"id" : "56183b64753d867e016c80d2"
	*	  }
	*
	* @apiUse deleteUsersSuccess
	*
	* @apiError message The id was not found.
	* @apiErrorExample Invalid Parameter Value
	*     HTTP/1.1 404 Not Found
	*     {
	*       "message": "The id was not found."
	*     }
	*/

	exports.deleteUserById = function (req, res, flag) {
		var id = flag === true ? req.body.id : req.params.id;
		if (!id)
			return flag === true ? -1 : res.json(400, {message : 'The id musn\'t be null'});
		Users.remove({
			_id : id
			},
			function (err, removed) {
				if (err)
					return (res.send(err));
				else if (removed.result.n === 0)
					return (res.json(404, {message : 'The id was not found.'}))
				return (res.json({message : 'User succesfully deleted!'}));
			}
		);
		return (1);
	};

	/**
	* @api {delete} /users/name/:username Delete User by name
	* @apiName deleteUserByName
	* @apiGroup Users
	* @apiVersion 0.1.0
	*
	* @apiParam {Sting} username user full name
	*
	* @apiParamExample {json} Request-Example:
	*	  {
	*		"username" : "Julien"
	*	  }
	*
	* @apiUse deleteUsersSuccess
	*
	* @apiError message The name was not found.
	* @apiErrorExample Invalid Parameter Value
	*     HTTP/1.1 404 Not Found
	*     {
	*       "message": "The name was not found."
	*     }
	*/
	exports.deleteUserByName = function (req, res, flag) {
		var name = flag === true ? req.body.username : req.params.username;
		if (!name)
			return flag === true ? -1 : res.json(400, {message : 'The name musn\'t be null'});
		Users.remove({
			username : name
			},
			function (err, removed) {
				if (err)
					return (res.send(err));
				else if (removed.result.n === 0)
					return (res.json(404, {message : 'The name was not found.'}))
				return (res.json({message : 'User succesfully deleted!'}));
			}
		);
		return (1);
	};


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
