// API/controllers/ingredients.js

/**
* @apiDefine IngredientObjectParam
*
* @apiParam {String} _id Id of the ingredient
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
* @apiSuccess {String} [name] Name of the ingredient
* @apiSuccess {String} [description] Description of the ingredient
* @apiSuccess {Number} [fat] Fat (in grams) contained in the ingredient
* @apiSuccess {Number} [carbohydrates] Carbohydrates (in grams) contained in the ingredient
* @apiSuccess {Number} [proteins] Proteins (in grams) contained in the ingredient
* @apiSuccess {Object[]} [tags] List of the tags of the ingredient
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
* @apiUse IngredientObjectParam
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
*
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*	  {
*		"message" : "Ingredient succesfully created!"
*	  }
*
* @apiErrorExample Error Response:
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
** GETS
*/

/**
* @apiDefine getIngredientAnswer
*
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
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
* @apiErrorExample Error-Response:
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
* @apiErrorExample Error-Response:
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
* @apiParam {String} name Ingredients unique name
*
* @apiUse IngredientObjectSuccess
*
* @apiUse getIngredientAnswer
*
* @apiError message The name of the ingredient was not found
* @apiErrorExample Error-Response:
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