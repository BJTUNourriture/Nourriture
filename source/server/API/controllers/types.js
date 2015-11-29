// API/controllers/types.js

/**
* @apiDefine TypeObjectPostParam
*
* @apiParam {String} name Name of the Type
* @apiParam {String} [category] Category of the Type
*/

/**
* @apiDefine TypeObjectPutParam
*
* @apiParam {String} [name] Name of the Type
* @apiParam {String} [category] Category of the Type
*/

/**
* @apiDefine TypeObjectSuccess
*
* @apiSuccess {String} _id Id of the Type
* @apiSuccess  {String} name Name of the Type
* @apiSuccess  {String} [category] Category of the Type
*/

/**
* @apiDefine TypeRequestJSON
*
* @apiParamExample {json} Request-Example:
*     {
*       "name": "Loukoums",
*       "category": "Desserts"
*     }
*/

var Types = require('../models/types');

/*
** POSTS
*/

/**
* @api {post} /types/ Create a new Type
* @apiName postType
* @apiGroup Types
* @apiVersion 0.1.0
*
* @apiUse TypeObjectPostParam
*
* @apiUse TypeRequestJSON
*
* @apiSuccess message Type succesfully created!
*
* @apiSuccessExample Success-Response
*     HTTP/1.1 200 OK
*	  {
*		"message" : "Type succesfully created!"
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
exports.postType = function (req, res) {
	//binds the new type
	var type = new Types({
		name : req.body.name,
		category : req.body.category
	});

	//saves the type to the db
	 type.save(function (err) {
        if (err)
        	return (res.status(400).send(err));

        return (res.json({message: 'Type succesfully created!'}));
    });
};

/*
** GETS
*/

/**
* @apiDefine getTypeAnswer
*
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*     {
*		"_id" : "561830c5fecdba4f72668fe8",
*       "name": "Loukoums",
*       "category": "Desserts"
*     }
*/

/**
* @api {get} /types/ Request all the Types
* @apiName getAllTypes
* @apiGroup Types
* @apiVersion 0.1.0
*
* @apiUse TypeObjectSuccess
*
* @apiUse getTypeAnswer
*
* @apiError message There are no existing types.
* @apiErrorExample Invalid Parameter Value
*     HTTP/1.1 404 Not Found
*     {
*       "message": "There are no existing types."
*     }
*/

exports.getAllTypes = function(req, res) {
	Types.find({},
		function(err, docs) {
			if (err)
				return (res.send(err));
			else if (docs.length <= 0)
				return (res.status(404).json({message : 'There are no existing types.'}))
			return (res.json(docs));
		}
	);
	return (1);
};

/**
* @api {get} /types/id/:id Request Type informations by id
* @apiName getTypeById
* @apiGroup Types
* @apiVersion 0.1.0
*
* @apiParam {Number} id Types unique ID
*
* @apiUse TypeObjectSuccess
*
* @apiUse getTypeAnswer
*
* @apiError message The id of the Type was not found
* @apiErrorExample Invalid Parameter Value
*     HTTP/1.1 404 Not Found
*     {
*       "message": "The id was not found."
*     }
*/
exports.getTypeById = function (req, res, flag) {
	var id = flag === true ? req.body.id : req.params.id;
	if (!id)
		return flag === true ? -1 : res.status(400).json({message : 'The id musn\'t be null'});
	Types.findById(id,
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
* @api {get} /types/name/:name Request Type informations by name
* @apiName getTypeByName
* @apiGroup Types
* @apiVersion 0.1.0
*
* @apiParam {String} name Type partial or full name
*
* @apiUse TypeObjectSuccess
*
* @apiUse getTypeAnswer
*
* @apiError message The name of the type was not found
* @apiErrorExample Invalid Parameter Value
*     HTTP/1.1 404 Not Found
*     {
*       "message": "The name was not found."
*     }
*/
exports.getTypesByName = function (req, res, flag) {
	var name = flag === true ? req.body.name : req.params.name;
	if (!name)
		return flag === true ? -1 : res.json(400, {message : 'The name musn\'t be null'});
	Types.find({
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
* @apiDefine deleteTypeSuccess
* @apiSuccess message Type succesfully deleted!
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*	  {
*		"message" : "Type succesfully deleted!"
*	  }
*/

/**
* @api {delete} /types/ Delete Types (JSON)
* @apiName deleteTypes
* @apiGroup Types
* @apiVersion 0.1.0
*
* @apiParam {Number} [id] Type unique ID
* @apiParam {Sting} [name] Type full name
*
* @apiParamExample {json} Request-Example:
*	  {
*		"id" : "56183b64753d867e016c80d2"
*	  }
*
* @apiUse deleteTypeSuccess
*
* @apiError message The id was not found.
* @apiErrorExample Invalid Parameter Value
*     HTTP/1.1 404 Not Found
*     {
*       "message": "The id was not found."
*     }
*/
exports.deleteTypes = function (req, res) {
	var i = -1;
	var callbackReturn = -1;
	var functionPointer = [module.exports.deleteTypeById(req, res, true),
							module.exports.deleteTypeByName(req, res, true)];
	var usage = "No correct argument given. Specify an id or a name";

	while ((callbackReturn = functionPointer[++i]) == -1
		&& i < functionPointer.length - 1);
	return callbackReturn == -1 ? res.json({message : usage}) : callbackReturn;

};

/**
* @api {delete} /types/id/:id Delete Type by id
* @apiName deleteTypeById
* @apiGroup Types
* @apiVersion 0.1.0
*
* @apiParam {Number} id Type unique ID
*
* @apiUse deleteTypeSuccess
*
* @apiError message The id was not found.
* @apiErrorExample Invalid Parameter Value
*     HTTP/1.1 404 Not Found
*     {
*       "message": "The id was not found."
*     }
*/
exports.deleteTypeById = function (req, res, flag) {
	var id = flag === true ? req.body.id : req.params.id;
	if (!id)
		return flag === true ? -1 : res.json(400, {message : 'The id musn\'t be null'});
	Types.remove({
		_id : id
		},
		function (err, removed) {
			if (err)
				return (res.send(err));
			else if (removed.result.n === 0)
				return (res.status(404).json({message : 'The id was not found.'}))
			return (res.json({message : 'Type succesfully deleted!'}));
		}
	);
	return (1);
};

/**
* @api {delete} /types/name/:name Delete Type by name
* @apiName deleteTypeByName
* @apiGroup Types
* @apiVersion 0.1.0
*
* @apiParam {String} name Type full name
*
* @apiUse deleteTypeSuccess
*
* @apiError message The name was not found.
* @apiErrorExample Invalid Parameter Value
*     HTTP/1.1 404 Not Found
*     {
*       "message": "The name was not found."
*     }
*/
exports.deleteTypeByName = function (req, res, flag) {
	var name = flag === true ? req.body.name : req.params.name;
	if (!name)
		return flag === true ? -1 : res.json(400, {message : 'The name musn\'t be null'});
	Types.remove({
		name : name
		},
		function (err, removed) {
			if (err)
				return (res.send(err));
			else if (removed.result.n === 0)
				return (res.status(404).json({message : 'The name was not found.'}))
			return (res.json({message : 'Type succesfully deleted!'}));
		}
	);
	return (1);
};