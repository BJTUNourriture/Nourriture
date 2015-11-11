// API/controllers/allergies.js

/**
* @apiDefine AllergyObjectPostParam
*
* @apiParam {String} name Name of the allergy
* @apiParam {String} [description] Description of the allergy
* @apiParam {Object[]} [ingredients] List of the ingredients the allergy is based on
* @apiParam {ObjectId} ingredients.id_ingredient Id of the ingredient of the allergy
* @apiParam {String} ingredients.name_ingredient Name of the ingredient of the allergy
*/

/**
* @apiDefine AllergyObjectPutParam
*
* @apiParam {String} [name] Name of the allergy
* @apiParam {String} [description] Description of the allergy
* @apiParam {Object[]} [ingredients] List of the ingredients the allergy is based on
* @apiParam {ObjectId} ingredients.id_ingredient Id of the ingredient of the allergy
* @apiParam {String} ingredients.name_ingredient Name of the ingredient of the allergy
*/

/**
* @apiDefine AllergyObjectSuccess
*
* @apiSuccess {String} _id Id of the allergy
* @apiSuccess {String} name Name of the allergy
* @apiSuccess {String} [description] Description of the allergy
* @apiSuccess {Object[]} [ingredients] List of the ingredients the allergy is based on
* @apiParam {ObjectId} ingredients.id_ingredient Id of the ingredient of the allergy
* @apiParam {String} ingredients.name_ingredient Name of the ingredient of the allergy
*/

/**
* @apiDefine AllergyRequestJSON
*
* @apiParamExample {json} Request-Example:
*     {
*       "name": "Nuts",
*       "description": "All nuts"
*		"ingredients" : [{
*					        "id_ingredient" : "689ed300d6c22573533g895",
*						    "name_ingredient" : "Peanut"
*				   	    },
*                       {
*                           "id_ingredient" : "234kf542a9g78512468a450",
*                           "name_ingredient" : "cashew nut"
*                       }]
*     }
*/

var Allergies = require('../models/allergies');

/*
** POSTS
*/

/**
* @api {post} /allergies/ Create a new Allergy
* @apiName postAllergy
* @apiGroup Allergies
* @apiVersion 0.1.0
*
* @apiUse AllergyObjectPostParam
*
* @apiUse AllergyRequestJSON
*
* @apiSuccess message Allergy succesfully created!
*
* @apiSuccessExample Success-Response
*     HTTP/1.1 200 OK
*	  {
*		"message" : "Allergy succesfully created!"
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

exports.postAllergy = function (req, res) {
	//binds the new allergy
	var allergy = new Allergies({
		name : req.body.name,
		description : req.body.description,
		ingredients : req.body.ingredients
	});

	//saves the allergy to the db
	 allergy.save(function (err) {
        if (err)
        	return (res.status(400).send(err));

        return (res.json({message: 'Allergy succesfully created!'}));
    });
};

/*
** PUTS
*/

/**
* @apiDefine AllergyServerAnswersPut
*
* @apiSuccessExample Success-Response
*     HTTP/1.1 200 OK
*	  {
*		"message" : "Allergy successfully updated!"
*	  }
*
* @apiError message Allergy not found.
*
* @apiErrorExample Invalid Parameter Value
*	  HTTP/1.1 404 Bad Request
*	  {
*		"message" : "Allergy not found."
*	  }
*
* @apiError message The key <key> does not exist for Allergies.
*
* @apiErrorExample Bad key sent
*	  HTTP/1.1 400 Bad Request
*	  {
*		"message" : "The key <key> does not exist for Allergies."
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
* @api {put} /allergies/id/:id Update an Allergy by Id
* @apiName putAllergyById
* @apiGroup Allergies
* @apiVersion 0.1.0
*
* @apiUse AllergyObjectPutParam
*
* @apiUse AllergyRequestJSON
*
* @apiUse AllergyServerAnswersPut
*
*/
exports.putAllergyById = function (req, res) {
	if (!req.params.id || Object.keys(req.body).length === 0)
		return (res.status(400).json({message : 'The id musn\'t be null and the request must not be empty.'}));
	Allergies.findById(req.params.id,
		function (err, allergy) {
			return (module.exports.updateAllergy(req, res, err, allergy));
		});
}

/**
* @api {put} /allergies/name/:name Update an Allergy by name
* @apiName putAllergyByName
* @apiGroup Allergies
* @apiVersion 0.1.0
*
* @apiUse AllergyObjectPutParam
*
* @apiUse AllergyRequestJSON
*
* @apiSuccess message Allergy successfully updated!
*
* @apiUse AllergyServerAnswersPut
*
*/
exports.putAllergyByName = function (req, res) {
	if (!req.params.name || Object.keys(req.body).length === 0)
		return (res.status(400).json({message : 'The name musn\'t be null and the request must not be empty.'}));
	Allergies.findOne({
		"name" : req.params.name 
		},
		function (err, allergy) {
			return (module.exports.updateAllergy(req, res, err, allergy));
		});
}

exports.updateAllergy = function(req, res, err, allergy) {
	var fields = ["name", "description", "ingredients"];
	var sent_fields = Object.keys(req.body);

	if (err)
		return (res.send(err));
	else if (allergy === null)
		return (res.status(404).json({message : 'Allergy not found.'}))

	for (i=0; i < sent_fields.length; i++)
	{
		if (!(fields.indexOf(sent_fields[i]) > -1))
			return (res.status(400).json({message : 'The key <'+sent_fields[i]+'> does not exist for Allergies.'}));
		allergy[sent_fields[i]] = req.body[sent_fields[i]];
	}

	allergy.save(function (err) {
		if (err)
			return (res.send(err));
		return (res.json({message : "Allergy successfully updated!"}));
	});
	return (1);
};

/*
** GETS
*/

/**
* @apiDefine getAllergyAnswer
*
* @apiSuccessExample Success-Response:
*     {
*       "_id": "561830k5fecdba4f72668fe8"
*       "name": "Nuts",
*       "description": "All nuts"
*		"ingredients" : [{
*					        "id_ingredient" : "689ed300d6c22573533g895",
*						    "name_ingredient" : "Peanut"
*				   	    },
*                       {
*                           "id_ingredient" : "234kf542a9g78512468a450",
*                           "name_ingredient" : "cashew nut"
*                       }]
*     }
*/

/**
* @api {get} /allergies/ Request all the Allergies
* @apiName getAllAllergies
* @apiGroup Allergies
* @apiVersion 0.1.0
*
* @apiUse AllergyObjectSuccess
*
* @apiUse getAllergyAnswer
*
* @apiError message There are no existing allergies.
* @apiErrorExample Invalid Parameter Value
*     HTTP/1.1 404 Not Found
*     {
*       "message": "There are no existing allergies."
*     }
*/

exports.getAllAllergies = function(req, res) {
	Allergies.find({},
		function(err, docs) {
			if (err)
				return (res.send(err));
			else if (docs.length <= 0)
				return (res.json(404, {message : 'There are no existing allergies.'}))
			return (res.json(docs));
		}
	);
	return (1);
};

/**
* @api {get} /allergies/id/:id Request Allergy informations by id
* @apiName getAllergyById
* @apiGroup Allergies
* @apiVersion 0.1.0
*
* @apiParam {Number} id Allergies unique ID
*
* @apiUse AllergyObjectSuccess
*
* @apiUse getAllergyAnswer
*
* @apiError message The id of the allergy was not found
* @apiErrorExample Invalid Parameter Value
*     HTTP/1.1 404 Not Found
*     {
*       "message": "The id was not found."
*     }
*/
exports.getAllergyById = function (req, res, flag) {
	var id = flag === true ? req.body.id : req.params.id;
	if (!id)
		return flag === true ? -1 : res.json(400, {message : 'The id musn\'t be null'});
	Allergies.findById(id,
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
* @api {get} /allergies/name/:name Request Allergy informations by name
* @apiName getAllergyByName
* @apiGroup Allergies
* @apiVersion 0.1.0
*
* @apiParam {String} name Allergy partial or full name
*
* @apiUse AllergyObjectSuccess
*
* @apiUse getAllergyAnswer
*
* @apiError message The name of the allergy was not found
* @apiErrorExample Invalid Parameter Value
*     HTTP/1.1 404 Not Found
*     {
*       "message": "The name was not found."
*     }
*/
exports.getAllergyByName = function (req, res, flag) {
	var name = flag === true ? req.body.name : req.params.name;
	if (!name)
		return flag === true ? -1 : res.json(400, {message : 'The name musn\'t be null'});
	Allergies.find({
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
* @apiDefine deleteAllergySuccess
* @apiSuccess message Allergy succesfully deleted!
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*	  {
*		"message" : "Allergy succesfully deleted!"
*	  }
*/

/**
* @api {delete} /allergies/ Delete Allergies (JSON)
* @apiName deleteAllergies
* @apiGroup Allergies
* @apiVersion 0.1.0
*
* @apiParam {Number} [id] Allergy unique ID
* @apiParam {Sting} [name] Allergy full name
*
* @apiParamExample {json} Request-Example:
*	  {
*		"id" : "56183b64753d867e016c80d2"
*	  }
*
* @apiUse deleteAllergySuccess
*
* @apiError message The id was not found.
* @apiErrorExample Invalid Parameter Value
*     HTTP/1.1 404 Not Found
*     {
*       "message": "The id was not found."
*     }
*/
exports.deleteAllergies = function (req, res) {
	var i = -1;
	var callbackReturn = -1;
	var functionPointer = [module.exports.deleteAllergyById(req, res, true),
							module.exports.deleteAllergyByName(req, res, true)];
	var usage = "No correct argument given. Specify an id or a name";

	while ((callbackReturn = functionPointer[++i]) == -1
		&& i < functionPointer.length - 1);
	return callbackReturn == -1 ? res.json({message : usage}) : callbackReturn;

};

/**
* @api {delete} /allergies/id/:id Delete Allergy by id
* @apiName deleteAllergyById
* @apiGroup Allergies
* @apiVersion 0.1.0
*
* @apiParam {Number} id Allergy unique ID
*
* @apiUse deleteAllergySuccess
*
* @apiError message The id was not found.
* @apiErrorExample Invalid Parameter Value
*     HTTP/1.1 404 Not Found
*     {
*       "message": "The id was not found."
*     }
*/
exports.deleteAllergyById = function (req, res, flag) {
	var id = flag === true ? req.body.id : req.params.id;
	if (!id)
		return flag === true ? -1 : res.json(400, {message : 'The id musn\'t be null'});
	Allergies.remove({
		_id : id
		},
		function (err, removed) {
			if (err)
				return (res.send(err));
			else if (removed.result.n === 0)
				return (res.json(404, {message : 'The id was not found.'}))
			return (res.json({message : 'Allergy succesfully deleted!'}));
		}
	);
	return (1);
};

/**
* @api {delete} /allergies/name/:name Delete Allergy by name
* @apiName deleteAllergyByName
* @apiGroup Allergies
* @apiVersion 0.1.0
*
* @apiParam {String} name Allergy full name
*
* @apiUse deleteAllergySuccess
*
* @apiError message The name was not found.
* @apiErrorExample Invalid Parameter Value
*     HTTP/1.1 404 Not Found
*     {
*       "message": "The name was not found."
*     }
*/
exports.deleteAllergyByName = function (req, res, flag) {
	var name = flag === true ? req.body.name : req.params.name;
	if (!name)
		return flag === true ? -1 : res.json(400, {message : 'The name musn\'t be null'});
	Allergies.remove({
		name : name
		},
		function (err, removed) {
			if (err)
				return (res.send(err));
			else if (removed.result.n === 0)
				return (res.json(404, {message : 'The name was not found.'}))
			return (res.json({message : 'Allergy succesfully deleted!'}));
		}
	);
	return (1);
};