// API/controllers/groups.js

/**
* @apiDefine GroupObjectPostParam
*
* @apiParam {String} name Name of the group
* @apiParam {String} [description] Description of the group
* @apiParam {String} admin_id ID of the group's owner
* @apiParam {Object[]} [tags] List of the tags of the group
* @apiParam {String} tags.name Name of the tags
* @apiParam {String} tags.description Description of the tags
* @apiParam {String} tags.flag Flag of the tags
* @apiParam {String} tags.flag.name Name of the flag
* @apiParam {String} tags.flag.level Indicator of the flag
*/

/**
* @apiDefine GroupObjectPutParam
*
* @apiParam {String} [name] Name of the group
* @apiParam {String} [description] Description of the group
* @apiParam {String} [admin_id] ID of the group's owner
* @apiParam {Object[]} [tags] List of the tags of the group
* @apiParam {String} tags.name Name of the tags
* @apiParam {String} tags.description Description of the tags
* @apiParam {String} tags.flag Flag of the tags
* @apiParam {String} tags.flag.name Name of the flag
* @apiParam {String} tags.flag.level Indicator of the flag
*/

/**
* @apiDefine GroupAccessPutParam
*
* @apiParam {String} user_id User ID to update
* @apiParam {Number} access Access right to give to user
*/

/**
* @apiDefine GroupObjectSuccess
*
* @apiSuccess {String} _id Id of the group
* @apiSuccess {String} name Name of the group
* @apiSuccess {String} [description] Description of the group
* @apiSuccess {String} admin_id ID of the group's owner
* @apiSuccess {Object[]} [tags] List of the tags of the group
* @apiParam {Object[]} [tags] List of the tags of the group
* @apiParam {String} tags.name Name of the tags
* @apiParam {String} tags.description Description of the tags
* @apiParam {String} tags.flag Flag of the tags
* @apiParam {String} tags.flag.name Name of the flag
* @apiParam {String} tags.flag.level Indicator of the flag
* @apiParam {Object[]} [users] List of users of the group
* @apiParam {String} users.user_id Id of the user
* @apiParam {String} users.description Description of the users
* @apiParam {String} users.access Access right of the user
* @apiParam {String} users.access.name Name of the access
* @apiParam {String} users.access.level Indicator of the access
*/

/**
* @apiDefine GroupRequestJSON
*
* @apiParamExample {json} Request-Example:
*     {
*       "name": "Le gang du gras",
*       "description": "Fat for life"
*		"admin_id": "561fc840d6c25173533e267f"
*		 "tags" : [{
*					"name" : "fruit",
*					"description" : "Don't event try",
*					"flag" : {
*								"name" : "FORBIDDEN",
*								"level" : 0
*							 }
*				   }],
*		 "users" : [{
*					"user_id" : "456ah145d9c31569845e354a",
*					"access" : {
*								"name" : "ADMIN",
*								"level" : 0
*							 }
*				   }]
*     }
*/

/**
* @apiDefine GroupRequestAccessJSON
*
* @apiParamExample {json} Request-Example:
*     {
*		"user_id": "561fc840d6c25173533e267f",
*		"access": "2"
*		}
*/

var Groups = require('../models/groups');

/*
** POSTS
*/

/**
* @api {post} /groups/ Create a new Group
* @apiName postGroup
* @apiGroup Groups
* @apiVersion 0.1.0
*
* @apiUse GroupObjectPostParam
*
* @apiUse GroupRequestJSON
*
* @apiSuccess message Group succesfully created!
*
* @apiSuccessExample Success-Response
*     HTTP/1.1 200 OK
*	  {
*		"message" : "Group succesfully created!"
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
exports.postGroup = function (req, res) {
	//binds the new group
	var group = new Groups({
		name : req.body.name,
		description : req.body.description,
		users : [{user_id: req.body.admin_id, access: {name : "Admin", level: 0} }],
		tags : req.body.tags
	});

	//saves the group to the db
	 group.save(function (err) {
        if (err)
        	return (res.status(400).send(err));

        return (res.json({message: 'Group succesfully created!'}));
    });
};

/*
** PUTS
*/

/**
* @apiDefine GroupServerAnswersPut
*
* @apiSuccessExample Success-Response
*     HTTP/1.1 200 OK
*	  {
*		"message" : "Group successfully updated!"
*	  }
*
* @apiError message Group not found.
*
* @apiErrorExample Invalid Parameter Value
*	  HTTP/1.1 404 Bad Request
*	  {
*		"message" : "Group not found."
*	  }
*
* @apiError message The key <key> does not exist for Groups.
*
* @apiErrorExample Bad key sent
*	  HTTP/1.1 400 Bad Request
*	  {
*		"message" : "The key <key> does not exist for Groups."
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
* @api {put} /groups/id/:id Update a group by Id
* @apiName putGroupById
* @apiGroup Groups
* @apiVersion 0.1.0
*
* @apiUse GroupObjectPutParam
*
* @apiUse GroupRequestJSON
*
* @apiUse GroupServerAnswersPut
*
*/
exports.putGroupById = function (req, res) {
	if (!req.params.id || Object.keys(req.body).length === 0)
		return (res.status(400).json({message : 'The id musn\'t be null and the request must not be empty.'}));
	Groups.findById(req.params.id,
		function (err, group) {
			return (module.exports.updateGroup(req, res, err, group));
		});
}

/**
* @api {put} /groups/name/:name Update a group by name
* @apiName putGroupByName
* @apiGroup Groups
* @apiVersion 0.1.0
*
* @apiUse GroupObjectPutParam
*
* @apiUse GroupRequestJSON
*
* @apiSuccess message Group successfully updated!
*
* @apiUse GroupServerAnswersPut
*
*/
exports.putGroupByName = function (req, res) {
	if (!req.params.name || Object.keys(req.body).length === 0)
		return (res.status(400).json({message : 'The name musn\'t be null and the request must not be empty.'}));
	Groups.findOne({
		"name" : req.params.name
		},
		function (err, group) {
			return (module.exports.updateGroup(req, res, err, group));
		});
}

exports.updateGroup = function(req, res, err, group) {
	var fields = ["name", "description", "tags"];
	var sent_fields = Object.keys(req.body);

	if (err)
		return (res.send(err));
	else if (group === null)
		return (res.status(404).json({message : 'Group not found.'}))

	for (i=0; i < sent_fields.length; i++)
	{
		if (!(fields.indexOf(sent_fields[i]) > -1))
			return (res.status(400).json({message : 'The key <'+sent_fields[i]+'> does not exist for Groups.'}));
		group[sent_fields[i]] = req.body[sent_fields[i]];
	}

	group.save(function(err) {
		if (err)
			return (res.send(err));
		return (res.json({message : "Group successfully updated!"}));
	});
	return (1);
};



/**
* @api {put} /groups/access/:id Update access right for user in group
* @apiName putAccessRight
* @apiGroup Groups
* @apiVersion 0.1.0
*
* @apiUse GroupAccessPutParam
*
* @apiUse GroupRequestAccessJSON
*
* @apiSuccess message Group successfully updated!
*
* @apiUse GroupServerAnswersPut
*
*/
exports.putAccessRight = function(req, res) {
	if (!req.params.id || Object.keys(req.body).length === 0)
		return (res.status(400).json({message : 'The id musn\'t be null and the request must not be empty.'}));
	Groups.findById(req.params.id,
		function (err, group) {
			return (module.exports.updateAccessRight(req, res, err, group));
		});
}

exports.updateAccessRight = function (req, res, err, group) {
	var name = ["Admin", "Moderateur", "User"];

	if (err)
		return (res.send(err));
	else if (group === null)
		return (res.status(404).json({message: "Group not found"}));

	for (i=0; i < group['users'].length; i++) {
		if (group['users'][i].user_id == req.body['user_id']) {
			group['users'][i].access = {name: name[req.body['access']], level: req.body['access']}
			group.save(function(err) {
				if (err)
					return (res.send(err));
				return (res.json({message : "Access Right successfully updated!"}))
			})
			return (1);
		}
	}
	return (res.status(404).json({message: "User not found"}));
}

/**
* @api {put} /groups/:group_id/add/:user_id Add User to a group
* @apiName addUserToGroup
* @apiGroup Groups
* @apiVersion 0.1.0
*
* @apiParam {String} group_id Group id
* @apiParam {String} user_id User id
*
* @apiSuccess message User has been added to group.
*
* @apiError message The id of the group was not found
* @apiError message The id of the group was not found
* @apiErrorExample Invalid Parameter Value
*     HTTP/1.1 404 Not Found
*     {
*       "message": "The ID was not found."
*     }
*/
exports.addUserToGroup = function(req, res, flag) {
	if (!req.params.user_id || !req.params.group_id)
		return (res.status(400).json({message : 'The id musn\'t be null.'}));

	Groups.findById(req.params.group_id,
		function (err, doc) {
			if (err)
				return (res.send(err));
			else if (doc === null)
				return (res.status(404).json({message : 'The id was not found.'}));

			for (i=0; i < doc['users'].length;i++) {
				if (doc['users'][i].user_id === req.params.user_id)
					return (res.status(400).json({message:'User is already in the group.'}));
			}
			doc['users'].push({user_id: req.params.user_id, access: {name : "User", level: 3} });
			doc.save(function(err) {
				if (err)
					return (res.send(err));
				return (res.status(200).json({message:'User has been added to group.'}));
			})
		}
	);
	return (1);
}

/**
* @api {put} /groups/:group_id/remove/:user_id Remove User to a group
* @apiName removeUserToGroup
* @apiGroup Groups
* @apiVersion 0.1.0
*
* @apiParam {String} group_id Group id
* @apiParam {String} user_id User id
*
* @apiSuccess message User has been removed to group.
*
* @apiError message The id of the group was not found
* @apiError message The id of the group was not found
* @apiErrorExample Invalid Parameter Value
*     HTTP/1.1 404 Not Found
*     {
*       "message": "The ID was not found."
*     }
*/
exports.removeUserToGroup = function (req, res, flag) {
	if (!req.params.user_id || !req.params.group_id)
		return (res.status(400).json({message : 'The id musn\'t be null.'}));

	Groups.findById(req.params.group_id,
		function (err, doc) {
			if (err)
				return (res.send(err));
			else if (doc === null)
				return (res.status(400).json({message:'The id was not found.'}));

			for (i=0; i < doc['users'].length;i++) {
				console.log(doc['users'][i].user_id + '-' + req.params.user_id);
				if (doc['users'][i].user_id === req.params.user_id) {
					console.log(doc['users'][i]);
//					doc['users'].splice(i, 1);
					doc.save(function(err) {
						if (err)
							return (res.send(err));
						return (res.status(200).json({message:'User has been removed to group.'}));
					});
				}
			}
			return (res.status(400).json({message:'User is not in the group.'}));
		}
	);
	return (1);
}



/*
** GETS
*/

/**
* @apiDefine getGroupAnswer
*
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*     {
*		"_id" : "561830c5fecdba4f72668fe8",
*       "name": "Le gang du gras",
*       "description": "Fat for life"
		"admin_id": "561fc840d6c25173533e267f"
*		 "tags" : [{
*					"name" : "fruit",
*					"description" : "Don't event try",
*					"flag" : {
*								"name" : "FORBIDDEN",
*								"level" : 0
*							 }
*				   }]
*		 "users" : [{
*					"user_id" : "456ah145d9c31569845e354a",
*					"access" : {
*								"name" : "ADMIN",
*								"level" : 0
*							 }
*				   }]
*     }
*/

/**
* @api {get} /group/ Request all Groups
* @apiName getAllGroups
* @apiGroup Groups
* @apiVersion 0.1.0
*
* @apiUse GroupObjectSuccess
*
* @apiUse getGroupAnswer
*
* @apiError message There are no existing groups.
* @apiErrorExample Invalid Parameter Value
*     HTTP/1.1 404 Not Found
*     {
*       "message": "The are no existing groups."
*     }
*/

exports.getAllGroups = function(req, res) {
	Groups.find({},
		function(err, docs) {
			if (err)
				return (res.send(err));
			else if (docs.length <= 0)
				return (res.json(404, {message : 'There are no existing groups.'}))
			return (res.json(docs));
		}
	);
	return (1);
};

/**
* @api {get} /groups/id/:id Request Group informations by id
* @apiName getGroupById
* @apiGroup Groups
* @apiVersion 0.1.0
*
* @apiParam {Number} id Groups unique ID
*
* @apiUse GroupObjectSuccess
*
* @apiUse getGroupAnswer
*
* @apiError message The id of the group was not found
* @apiErrorExample Invalid Parameter Value
*     HTTP/1.1 404 Not Found
*     {
*       "message": "The id was not found."
*     }
*/
exports.getGroupById = function (req, res, flag) {
	var id = flag === true ? req.body.id : req.params.id;
	if (!id)
		return flag === true ? -1 : res.json(400, {message : 'The id musn\'t be null'});
	Groups.findById(id,
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
* @api {get} /groups/name/:name Request Group informations by name
* @apiName getGroupByName
* @apiGroup Groups
* @apiVersion 0.1.0
*
* @apiParam {String} name Group partial or full name
*
* @apiUse GroupObjectSuccess
*
* @apiUse getGroupAnswer
*
* @apiError message The name of the group was not found
* @apiErrorExample Invalid Parameter Value
*     HTTP/1.1 404 Not Found
*     {
*       "message": "The name was not found."
*     }
*/
exports.getGroupByName = function (req, res, flag) {
	var name = flag === true ? req.body.name : req.params.name;
	if (!name)
		return flag === true ? -1 : res.json(400, {message : 'The name musn\'t be null'});
	Groups.find({
		"name": { "$regex": name, "$options": "i" }
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

/*
** DELETES
*/

/**
* @apiDefine deleteGroupSuccess
* @apiSuccess message Group succesfully deleted!
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "Group succesfully deleted!"
*     }
*/

/**
* @api {delete} /groups/ Delete Groups (JSON)
* @apiName deleteGroups
* @apiGroup Groups
* @apiVersion 0.1.0
*
* @apiParam {Number} [id] group unique ID
* @apiParam {Sting} [name] group full name
*
* @apiParamExample {json} Request-Example:
*	  {
*		"id" : "56183b64753d867e016c80d2"
*	  }
*
* @apiUse deleteGroupSuccess
*
* @apiError message The id was not found.
* @apiErrorExample Invalid Parameter Value
*     HTTP/1.1 404 Not Found
*     {
*       "message": "The id was not found."
*     }
*/
exports.deleteGroups = function (req, res) {
	var i = -1;
	var callbackReturn = -1;
	var functionPointer = [module.exports.deleteGroupById(req, res, true),
							module.exports.deleteGroupByName(req, res, true)];
	var usage = "No correct argument given. Specify an id or a name";

	while ((callbackReturn = functionPointer[++i]) == -1
		&& i < functionPointer.length - 1);
	return callbackReturn == -1 ? res.json({message : usage}) : callbackReturn;

};

/**
* @api {delete} /groups/id/:id Delete Group by id
* @apiName deleteGroupById
* @apiGroup Groups
* @apiVersion 0.1.0
*
* @apiParam {Number} id Group unique ID
*
* @apiUse deleteGroupSuccess
*
* @apiError message The id was not found.
* @apiErrorExample Invalid Parameter Value
*     HTTP/1.1 404 Not Found
*     {
*       "message": "The id was not found."
*     }
*/
exports.deleteGroupById = function (req, res, flag) {
	var id = flag === true ? req.body.id : req.params.id;
	if (!id)
		return flag === true ? -1 : res.json(400, {message : 'The id musn\'t be null'});
	Groups.remove({
		_id : id
		},
		function (err, removed) {
			if (err)
				return (res.send(err));
			else if (removed.result.n === 0)
				return (res.json(404, {message : 'The id was not found.'}))
			return (res.json({message : 'Group succesfully deleted!'}));
		}
	);
	return (1);
};

/**
* @api {delete} /groups/name/:name Delete Group by name
* @apiName deleteGroupByName
* @apiGroup Groups
* @apiVersion 0.1.0
*
* @apiParam {String} name Group full name
*
* @apiUse deleteGroupSuccess
*
* @apiError message The name was not found.
* @apiErrorExample Invalid Parameter Value
*     HTTP/1.1 404 Not Found
*     {
*       "message": "The name was not found."
*     }
*/
exports.deleteGroupByName = function (req, res, flag) {
	var name = flag === true ? req.body.name : req.params.name;
	if (!name)
		return flag === true ? -1 : res.json(400, {message : 'The name musn\'t be null'});
	Groups.remove({
		name : name
		},
		function (err, removed) {
			if (err)
				return (res.send(err));
			else if (removed.result.n === 0)
				return (res.json(404, {message : 'The name was not found.'}))
			return (res.json({message : 'Group succesfully deleted!'}));
		}
	);
	return (1);
};
