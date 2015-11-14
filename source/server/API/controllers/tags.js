// API/controllers/tags.js

/**
* @apiDefine TagsObjectPostParam
*
* @apiParam {String} name Name of the Tag
* @apiParam {String} [description] Description of the Tag
* @apiParam {Object} flag Flag of the Tag
* @apiParam {String} flag.name Name of the flag of the tag
* @apiParam {String} [ingredients.level] Level of the flag
*/

/**
* @apiDefine TagsObjectPutParam
*
* @apiParam {String} name Name of the Tag
* @apiParam {String} [description] Description of the Tag
* @apiParam {Object} [flag[ Flag of the Tag
* @apiParam {String} [flag.name] Name of the flag of the tag
* @apiParam {String} [ingredients.level] Level of the flag
*/

/**
* @apiDefine TagsObjectSuccess
*
* @apiParam {String} name Name of the Tag
* @apiParam {String} [description] Description of the Tag
* @apiParam {Object} flag Flag of the Tag
* @apiParam {String} flag.name Name of the flag of the tag
* @apiParam {String} [ingredients.level] Level of the flag
*/

/**
* @apiDefine TagsRequestJSON
*
* @apiParamExample {json} Request-Example:
*     {
*       "name": "Yummy",
*       "description": "This is yummy"
*		"flag" : {"name" : "Miam",
				  "level": 7}
*     }
*/

var Tags = require('../models/tags');

/*
** POSTS
*/

/**
* @api {post} /tags/ Create a new Tag
* @apiName postTag
* @apiGroup Tags
* @apiVersion 0.1.0
*
* @apiUse TagsObjectPostParam
*
* @apiUse TagsRequestJSON
*
* @apiSuccess message Tag succesfully created!
*
* @apiSuccessExample Success-Response
*     HTTP/1.1 200 OK
*	  {
*		"message" : "Tag succesfully created!"
*	  }
*
* @apiErrorExample Bad Value Definition
*	  HTTP/1.1 400 BAD REQUEST
*	  {
*		...
*		mongoose custom error
*		...
*	  }
*
*/

exports.postTags = function (req, res) {
	//binds the new tags
	var tags = new Tags({
		name : req.body.name,
		description : req.body.description,
		flag : req.body.flag
	});

	//saves the tags to the db
	 tags.save(function (err) {
        if (err)
        	return (res.status(400).send(err));

        return (res.json({message: 'Tag succesfully created!'}));
    });
};

/*
** PUTS
*/

/**
* @apiDefine TagsServerAnswersPut
*
* @apiSuccessExample Success-Response
*     HTTP/1.1 200 OK
*	  {
*		"message" : "Tags successfully updated!"
*	  }
*
* @apiError message Tags not found.
*
* @apiErrorExample Invalid Parameter Value
*	  HTTP/1.1 404 Bad Request
*	  {
*		"message" : "Tags not found."
*	  }
*
* @apiError message The key <key> does not exist for Tags.
*
* @apiErrorExample Bad key sent
*	  HTTP/1.1 400 Bad Request
*	  {
*		"message" : "The key <key> does not exist for Tags."
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
* @api {put} /tags/id/:id Update an Tag by Id
* @apiName putTagById
* @apiGroup Tags
* @apiVersion 0.1.0
*
* @apiUse TagsObjectPutParam
*
* @apiUse TagsRequestJSON
*
* @apiUse TagsServerAnswersPut
*
*/

exports.putTagsById = function (req, res) {
	if (!req.params.id || Object.keys(req.body).length === 0)
		return (res.status(400).json({message : 'The id musn\'t be null and the request must not be empty.'}));
	Tags.findById(req.params.id,
		function (err, tags) {
			return (module.exports.updateTags(req, res, err, tags));
		});
}

/**
* @api {put} /tags/name/:name Update an Tag by name
* @apiName putTagsByName
* @apiGroup ATags
* @apiVersion 0.1.0
*
* @apiUse TagsObjectPutParam
*
* @apiUse TagsRequestJSON
*
* @apiSuccess message Tag successfully updated!
*
* @apiUse TagsServerAnswersPut
*
*/
exports.putTagsByName = function (req, res) {
	if (!req.params.name || Object.keys(req.body).length === 0)
		return (res.status(400).json({message : 'The name musn\'t be null and the request must not be empty.'}));
	Tags.findOne({
		"name" : req.params.name 
		},
		function (err, tag) {
			return (module.exports.updateTags(req, res, err, tag));
		});
}

exports.updateTags = function(req, res, err, tags) {
	var fields = ["name", "description", "flag"];
	var sent_fields = Object.keys(req.body);

	if (err)
		return (res.send(err));
	else if (tags === null)
		return (res.status(404).json({message : 'Tag not found.'}))

	for (i=0; i < sent_fields.length; i++)
	{
		if (!(fields.indexOf(sent_fields[i]) > -1))
			return (res.status(400).json({message : 'The key <'+sent_fields[i]+'> does not exist for Tag.'}));
		tags[sent_fields[i]] = req.body[sent_fields[i]];
	}

	tags.save(function (err) {
		if (err)
			return (res.send(err));
		return (res.json({message : "Tag successfully updated!"}));
	});
	return (1);
};

/*
** GETS
*/

/**
* @apiDefine getTagsAnswer
*
* @apiSuccessExample Success-Response:
*     {
*       "_id": "561830k5fecdba4f72668fe8"
*       "name": "Yummy",
*       "description": "Much Yummy, much wow"
*		"flag" : {
*					"name" : "Miam",
*					"level" : 1
*				 }
*/

/**
* @api {get} /tags/ Request all the Tags
* @apiName getAllTags
* @apiGroup Tags
* @apiVersion 0.1.0
*
* @apiUse TagsObjectSuccess
*
* @apiUse TagsObjectSuccess
*
* @apiError message There are no existing Tags.
* @apiErrorExample Invalid Parameter Value
*     HTTP/1.1 404 Not Found
*     {
*       "message": "There are no existing Tags."
*     }
*/

exports.getAllTags = function(req, res) {
	Tags.find({},
		function(err, docs) {
			if (err)
				return (res.send(err));
			else if (docs.length <= 0)
				return (res.json(404, {message : 'There are no existing Tags.'}))
			return (res.json(docs));
		}
	);
	return (1);
};

/**
* @api {get} /tags/id/:id Request Tag informations by id
* @apiName getTagById
* @apiGroup Tags
* @apiVersion 0.1.0
*
* @apiParam {Number} id Tags unique ID
*
* @apiUse TagsObjectSuccess
*
* @apiUse getTagsAnswer
*
* @apiError message The id of the tag was not found
* @apiErrorExample Invalid Parameter Value
*     HTTP/1.1 404 Not Found
*     {
*       "message": "The id was not found."
*     }
*/
exports.getTagById = function (req, res, flag) {
	var id = flag === true ? req.body.id : req.params.id;
	if (!id)
		return flag === true ? -1 : res.status(400).json({message : 'The id musn\'t be null'});
	Tags.findById(id,
		function (err, doc) {
			if (err)
				return (res.send(err));
			else if (doc === null)
				return (res.status(404).json({message : 'The id was not found.'}))
			return (res.json(doc));
		}
	);
	return (1);
};

/**
* @api {get} /tags/name/:name Request tag informations by name
* @apiName getTagByName
* @apiGroup Tags
* @apiVersion 0.1.0
*
* @apiParam {String} name Tag partial or full name
*
* @apiUse TagsObjectSuccess
*
* @apiUse getTagsAnswer
*
* @apiError message The name of the tag was not found
* @apiErrorExample Invalid Parameter Value
*     HTTP/1.1 404 Not Found
*     {
*       "message": "The name was not found."
*     }
*/
exports.getTagByName = function (req, res, flag) {
	var name = flag === true ? req.body.name : req.params.name;
	if (!name)
		return flag === true ? -1 : res.status(400).json({message : 'The name musn\'t be null'});
	Tags.find({
		"name": { "$regex": name, "$options": "i" } 
		},
		function (err, docs) {
			if (err)
				return (res.send(err));
			else if (docs.length <= 0)
				return (res.status(404).json({message : 'The name was not found.'}))
			return (res.json(docs));
		}
	);
	return (1);
};

/*
** DELETES
*/

/**
* @apiDefine deleteTagsSuccess
* @apiSuccess message Tag succesfully deleted!
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*	  {
*		"message" : "Tag succesfully deleted!"
*	  }
*/

/**
* @api {delete} /tags/ Delete Tags (JSON)
* @apiName deleteTags
* @apiGroup Tags
* @apiVersion 0.1.0
*
* @apiParam {Number} [id] Tag unique ID
* @apiParam {Sting} [name] Tag full name
*
* @apiParamExample {json} Request-Example:
*	  {
*		"id" : "56183b64753d867e016c80d2"
*	  }
*
* @apiUse deleteTagsSuccess
*
* @apiError message The id was not found.
* @apiErrorExample Invalid Parameter Value
*     HTTP/1.1 404 Not Found
*     {
*       "message": "The id was not found."
*     }
*/
exports.deleteTags = function (req, res) {
	var i = -1;
	var callbackReturn = -1;
	var functionPointer = [module.exports.deleteTagsById(req, res, true),
							module.exports.deleteTagsByName(req, res, true)];
	var usage = "No correct argument given. Specify an id or a name";

	while ((callbackReturn = functionPointer[++i]) == -1
		&& i < functionPointer.length - 1);
	return callbackReturn == -1 ? res.json({message : usage}) : callbackReturn;

};

/**
* @api {delete} /tags/id/:id Delete Tag by id
* @apiName deleteTagsById
* @apiGroup Tags
* @apiVersion 0.1.0
*
* @apiParam {Number} id Tag unique ID
*
* @apiUse deleteTagsSuccess
*
* @apiError message The id was not found.
* @apiErrorExample Invalid Parameter Value
*     HTTP/1.1 404 Not Found
*     {
*       "message": "The id was not found."
*     }
*/
exports.deleteTagsById = function (req, res, flag) {
	var id = flag === true ? req.body.id : req.params.id;
	if (!id)
		return flag === true ? -1 : res.json(400, {message : 'The id musn\'t be null'});
	Tags.remove({
		_id : id
		},
		function (err, removed) {
			if (err)
				return (res.send(err));
			else if (removed.result.n === 0)
				return (res.json(404, {message : 'The id was not found.'}))
			return (res.json({message : 'Tag succesfully deleted!'}));
		}
	);
	return (1);
};

/**
* @api {delete} /tags/name/:name Delete Tag by name
* @apiName deleteTagsByName
* @apiGroup Tags
* @apiVersion 0.1.0
*
* @apiParam {String} name Tag full name
*
* @apiUse deleteTagsSuccess
*
* @apiError message The name was not found.
* @apiErrorExample Invalid Parameter Value
*     HTTP/1.1 404 Not Found
*     {
*       "message": "The name was not found."
*     }
*/
exports.deleteTagsByName = function (req, res, flag) {
	var name = flag === true ? req.body.name : req.params.name;
	if (!name)
		return flag === true ? -1 : res.json(400, {message : 'The name musn\'t be null'});
	Tags.remove({
		name : name
		},
		function (err, removed) {
			if (err)
				return (res.send(err));
			else if (removed.result.n === 0)
				return (res.json(404, {message : 'The name was not found.'}))
			return (res.json({message : 'Tag succesfully deleted!'}));
		}
	);
	return (1);
};