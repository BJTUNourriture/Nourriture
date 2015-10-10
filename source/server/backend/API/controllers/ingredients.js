// API/controllers/ingredients.js

var Ingredients = require('../models/ingredients');

/*
** POSTS
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
* @api {get} /ingredients/id/:id Request Ingredient informations with id
* @apiName getIngredientById
* @apiGroup Ingredients
* @apiVersion 0.1.0
*
* @apiParam {Number} id Ingredients unique ID
*
* @apiSuccess {String} _id Id of the ingredient
* @apiSuccess {String} name Name of the ingredient
* @apiSuccess {String} description Description of the ingredient
* @apiSuccess {Number} fat Fat (in grams) contained in the ingredient
* @apiSuccess {Number} carbohydrates Carbohydrates (in grams) contained in the ingredient
* @apiSuccess {Number} proteins Proteins (in grams) contained in the ingredient
* @apiSuccess {Object[]} tags List of the tags of the ingredient
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

exports.getIngredientsByName = function (req, res, flag) {
	var name = flag === true ? req.body.name : req.params.name;
	if (!name)
		return flag === true ? -1 : res.json(400, {message : 'The id musn\'t be null'});
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