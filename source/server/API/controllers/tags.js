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