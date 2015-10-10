// API/controllers/ingredients.js

/**
* @apiDefine IngredientObjectPostParam
*
* @apiParam {String} name Name of the ingredient
* @apiParam {String} [description] Description of the ingredient
* @apiParam {Number} [fat] Fat (in grams) contained in the ingredient
* @apiParam {Number} [carbohydrates] Carbohydrates (in grams) contained in the ingredient
* @apiParam {Number} [proteins] Proteins (in grams) contained in the ingredient
* @apiParam {Object[]} [tags] List of the tags of the ingredient
*/

/**
* @apiDefine IngredientObjectPutParam
*
* @apiParam {String} [name] Name of the ingredient
* @apiParam {String} [description] Description of the ingredient
* @apiParam {Number} [fat] Fat (in grams) contained in the ingredient
* @apiParam {Number} [carbohydrates] Carbohydrates (in grams) contained in the ingredient
* @apiParam {Number} [proteins] Proteins (in grams) contained in the ingredient
* @apiParam {Object[]} [tags] List of the tags of the ingredient
*/

/**
* @apiDefine IngredientObjectSuccess
*
* @apiSuccess {String} _id Id of the ingredient
* @apiSuccess {String} name Name of the ingredient
* @apiSuccess {String} [description] Description of the ingredient
* @apiSuccess {Number} [fat] Fat (in grams) contained in the ingredient
* @apiSuccess {Number} [carbohydrates] Carbohydrates (in grams) contained in the ingredient
* @apiSuccess {Number} [proteins] Proteins (in grams) contained in the ingredient
* @apiSuccess {Object[]} [tags] List of the tags of the ingredient
*/

/**
* @apiDefine IngredientRequestJSON
*
* @apiParamExample {json} Request-Example:
*     {
*       "name": "Tomato",
*       "description": "Very yummy fruit."
*		 "fat" : 0.3,
*		 "carbohydrates" : 5.8,
*		 "protein" : 1.3,
*		 "tags" : [{
*					"name" : "fruit",
*					"description" : "Tag concerning fruits",
*					"flag" : {
*								"name" : "SAFE",
*								"level" : 0
*							 }
*				   }]
*     }
*/

var Ingredients = require('../models/ingredients');

/*
** POSTS
*/

/**
* @api {post} /ingredients/ Create a new Ingredient
* @apiName postIngredient
* @apiGroup Ingredients
* @apiVersion 0.1.0
*
* @apiUse IngredientObjectPostParam
*
* @apiUse IngredientRequestJSON
*
* @apiSuccess message Ingredient succesfully created!
*
* @apiSuccessExample Success-Response
*     HTTP/1.1 200 OK
*	  {
*		"message" : "Ingredient succesfully created!"
*	  }
*
* @apiErrorExample Bad Value Definition
*	  HTTP/1.1 200 OK
*	  {
*		...
*		mongoose custom error
*		...
*	  }
*
*/
exports.postIngredient = function (req, res) {
	//binds the new ingredient
	var ingredient = new Ingredients({
		name : req.body.name,
		description : req.body.description,
		fat : req.body.fat,
		carbohydrates : req.body.carbohydrates,
		proteins : req.body.proteins,
		tags : req.body.tags
	});

	//saves the ingredient to the db
	 ingredient.save(function (err) {
        if (err)
        	return (res.send(err));

        return (res.json({message: 'Ingredient succesfully created!'}));
    });
};

/*
** PUTS
*/

/**
* @apiDefine IngredientServerAnswersPut
*
* @apiSuccessExample Success-Response
*     HTTP/1.1 200 OK
*	  {
*		"message" : "Ingredient successfully updated!"
*	  }
*
* @apiError message Ingredient not found.
*
* @apiErrorExample Invalid Parameter Value
*	  HTTP/1.1 404 Bad Request
*	  {
*		"message" : "Ingredient not found."
*	  }
*
* @apiError message The key <key> does not exist for Ingredients.
*
* @apiErrorExample Bad key sent
*	  HTTP/1.1 400 Bad Request
*	  {
*		"message" : "The key <key> does not exist for Ingredients."
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
* @api {put} /ingredients/id/:id Update an Ingredient by Id
* @apiName putIngredientById
* @apiGroup Ingredients
* @apiVersion 0.1.0
*
* @apiUse IngredientObjectPutParam
*
* @apiUse IngredientRequestJSON
*
* @apiUse IngredientServerAnswersPut
*
*/
exports.putIngredientById = function (req, res) {
	if (!req.params.id || Object.keys(req.body).length === 0)
		return (res.status(400).json({message : 'The id musn\'t be null and the request must not be empty.'}));
	Ingredients.findById(req.params.id,
		function (err, ingredient) {
			return (module.exports.updateIngredient(req, res, err, ingredient));
		});
}

/**
* @api {put} /ingredients/name/:name Update an Ingredient by name
* @apiName putIngredientByName
* @apiGroup Ingredients
* @apiVersion 0.1.0
*
* @apiUse IngredientObjectPutParam
*
* @apiUse IngredientRequestJSON
*
* @apiSuccess message Ingredient successfully updated!
*
* @apiUse IngredientServerAnswersPut
*
*/
exports.putIngredientByName = function (req, res) {
	if (!req.params.name || Object.keys(req.body).length === 0)
		return (res.status(400).json({message : 'The name musn\'t be null and the request must not be empty.'}));
	Ingredients.findOne({
		"name" : req.params.name 
		},
		function (err, ingredient) {
			return (module.exports.updateIngredient(req, res, err, ingredient));
		});
}

exports.updateIngredient = function(req, res, err, ingredient) {
	var fields = ["name", "description", "fat", "carbohydrates", "proteins", "tags"];
	var sent_fields = Object.keys(req.body);

	if (err)
		return (res.send(err));
	else if (ingredient === null)
		return (res.status(404).json({message : 'Ingredient not found.'}))

	for (i=0; i < sent_fields.length; i++)
	{
		if (!(fields.indexOf(sent_fields[i]) > -1))
			return (res.status(400).json({message : 'The key <'+sent_fields[i]+'> does not exist for Ingredients.'}));
		ingredient[sent_fields[i]] = req.body[sent_fields[i]];
	}

	ingredient.save(function(err) {
		if (err)
			return (res.send(err));
		return (res.json({message : "Ingredient successfully updated!"}));
	});
	return (1);
};

/*
** GETS
*/

/**
* @apiDefine getIngredientAnswer
*
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*     {
*		"_id" : "561830c5fecdba4f72668fe8",
*       "name": "Tomato",
*       "description": "Very yummy fruit."
*		"fat" : 0.3,
*		"carbohydrates" : 5.8,
*		"protein" : 1.3,
*		"tags" : [{
*					"name" : "fruit",
*					"description" : "Tag concerning fruits",
*					"flag" : {
*								"name" : "SAFE",
*								"level" : 0
*							 }
*				   }]
*     }
*/

/**
* @api {get} /ingredients/ Request all the Ingredients
* @apiName getAllIngredients
* @apiGroup Ingredients
* @apiVersion 0.1.0
*
* @apiUse IngredientObjectSuccess
*
* @apiUse getIngredientAnswer
*
* @apiError message There are no existing ingredients.
* @apiErrorExample Invalid Parameter Value
*     HTTP/1.1 404 Not Found
*     {
*       "message": "The are no existing ingredients."
*     }
*/

exports.getAllIngredients = function(req, res) {
	Ingredients.find({},
		function(err, docs) {
			if (err)
				return (res.send(err));
			else if (docs.length <= 0)
				return (res.json(404, {message : 'There are no existing ingredients.'}))
			return (res.json(docs));
		}
	);
	return (1);
};

/**
* @api {get} /ingredients/id/:id Request Ingredient informations by id
* @apiName getIngredientById
* @apiGroup Ingredients
* @apiVersion 0.1.0
*
* @apiParam {Number} id Ingredients unique ID
*
* @apiUse IngredientObjectSuccess
*
* @apiUse getIngredientAnswer
*
* @apiError message The id of the ingredient was not found
* @apiErrorExample Invalid Parameter Value
*     HTTP/1.1 404 Not Found
*     {
*       "message": "The id was not found."
*     }
*/
exports.getIngredientById = function (req, res, flag) {
	var id = flag === true ? req.body.id : req.params.id;
	if (!id)
		return flag === true ? -1 : res.json(400, {message : 'The id musn\'t be null'});
	Ingredients.findById(id,
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
* @api {get} /ingredients/name/:name Request Ingredient informations by name
* @apiName getIngredientByName
* @apiGroup Ingredients
* @apiVersion 0.1.0
*
* @apiParam {String} name Ingredient partial or full name
*
* @apiUse IngredientObjectSuccess
*
* @apiUse getIngredientAnswer
*
* @apiError message The name of the ingredient was not found
* @apiErrorExample Invalid Parameter Value
*     HTTP/1.1 404 Not Found
*     {
*       "message": "The name was not found."
*     }
*/
exports.getIngredientsByName = function (req, res, flag) {
	var name = flag === true ? req.body.name : req.params.name;
	if (!name)
		return flag === true ? -1 : res.json(400, {message : 'The name musn\'t be null'});
	Ingredients.find({
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
* @apiDefine deleteIngredientSuccess
* @apiSuccess message Ingredient succesfully created!
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*	  {
*		"message" : "Ingredient succesfully deleted!"
*	  }
*/

/**
* @api {delete} /ingredients/ Delete Ingredients (JSON)
* @apiName deleteIngredients
* @apiGroup Ingredients
* @apiVersion 0.1.0
*
* @apiParam {Number} [id] Ingredient unique ID
* @apiParam {Sting} [name] Ingredient full name
*
* @apiParamExample {json} Request-Example:
*	  {
*		"id" : "56183b64753d867e016c80d2"
*	  }
*
* @apiUse deleteIngredientSuccess
*
* @apiError message The id was not found.
* @apiErrorExample Invalid Parameter Value
*     HTTP/1.1 404 Not Found
*     {
*       "message": "The id was not found."
*     }
*/
exports.deleteIngredients = function (req, res) {
	var i = -1;
	var callbackReturn = -1;
	var functionPointer = [module.exports.deleteIngredientById(req, res, true),
							module.exports.deleteIngredientByName(req, res, true)];
	var usage = "No correct argument given. Specify an id or a name";

	while ((callbackReturn = functionPointer[++i]) == -1
		&& i < functionPointer.length - 1);
	return callbackReturn == -1 ? res.json({message : usage}) : callbackReturn;

};

/**
* @api {delete} /ingredients/id/:id Delete Ingredient by id
* @apiName deleteIngredientById
* @apiGroup Ingredients
* @apiVersion 0.1.0
*
* @apiParam {Number} id Ingredient unique ID
*
* @apiUse deleteIngredientSuccess
*
* @apiError message The id was not found.
* @apiErrorExample Invalid Parameter Value
*     HTTP/1.1 404 Not Found
*     {
*       "message": "The id was not found."
*     }
*/
exports.deleteIngredientById = function (req, res, flag) {
	var id = flag === true ? req.body.id : req.params.id;
	if (!id)
		return flag === true ? -1 : res.json(400, {message : 'The id musn\'t be null'});
	Ingredients.remove({
		_id : id
		},
		function (err, removed) {
			if (err)
				return (res.send(err));
			else if (removed.result.n === 0)
				return (res.json(404, {message : 'The id was not found.'}))
			return (res.json({message : 'Ingredient succesfully deleted!'}));
		}
	);
	return (1);
};

/**
* @api {delete} /ingredients/name/:name Delete Ingredient by name
* @apiName deleteIngredientByName
* @apiGroup Ingredients
* @apiVersion 0.1.0
*
* @apiParam {String} name Ingredient full name
*
* @apiUse deleteIngredientSuccess
*
* @apiError message The name was not found.
* @apiErrorExample Invalid Parameter Value
*     HTTP/1.1 404 Not Found
*     {
*       "message": "The name was not found."
*     }
*/
exports.deleteIngredientByName = function (req, res, flag) {
	var name = flag === true ? req.body.name : req.params.name;
	if (!name)
		return flag === true ? -1 : res.json(400, {message : 'The name musn\'t be null'});
	Ingredients.remove({
		name : name
		},
		function (err, removed) {
			if (err)
				return (res.send(err));
			else if (removed.result.n === 0)
				return (res.json(404, {message : 'The name was not found.'}))
			return (res.json({message : 'Ingredient succesfully deleted!'}));
		}
	);
	return (1);
};