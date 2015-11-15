// API/controllers/recipes.js

/**
* @apiDefine RecipeObjectPostParam
*
* @apiParam {String} title Name of the recipe
* @apiParam {ObjectId} author_id Id of the author of the recipe
* @apiParam {String} author_name Name of the author of the recipe
* @apiParam {String} [description] Description of the recipe
* @apiParam {Object[]} [type] Type of the recipe
* @apiParam {ObjectId} type.id_type Id of the type
* @apiParam {String} type.name Name of the type
* @apiParam {Date} [date_posted] [default : Date.now] Date when the recipe was posted
* @apiParam {Date} [date_edited] Date when the recipe was edited
* @apiParam {Number} [difficulty] [default : 0, min : 0, max : 3] Difficulty set for the recipe
* @apiParam {Number} [average_score] [default : 0, min : 0, max : 5] Average score voted by the users for the recipe
* @apiParam {Number} [time_preparation] [default : 0, min : 0, max : 90000] Time it takes to make the recipe (in min)
* @apiParam {Number} [average_price] [default : 0, min : 0, max : 3] Average cost of the recipe
* @apiParam {Object[]} ingredients List of the ingredients needed for the recipe
* @apiParam {ObjectId} ingredients.id_ingredient Id of the ingredient
* @apiParam {String} ingredients.name_ingredient Name of the ingredient
* @apiParam {Number} [ingredients.amount_ingredient] [default : 0, min : 0, max : 1000000] Grams of the ingredient needed
* @apiParam {Object[]} [comments] List of the comments posted for the recipe
* @apiParam {ObjectId} comments.id_author Id of the author of the comment
* @apiParam {String} comments.name_author Name of the author of the comment
* @apiParam {Date} comments.date_posted [default : Date.now] Date when the comment was posted
* @apiParam {Date} [comments.date_edited] Date when the comment was edited
* @apiParam {String} comments.content The comment itself
* @apiParam {Boolean} [comments.visible] [default : true] Is the comment visible by others
* @apiParam {Object[]} [pictures] List of the pictures posted by the author for the recipe
* @apiParam {String} pictures.thumbnail_url Url of the thumbnail version of the picture
* @apiParam {String} pictures.medium_sized_url Url of the medium size version of the picture
* @apiParam {String} [pictures.big_sized_url] Url of the big size version of the picture
* @apiParam {Number} [number_vote] Number of votes for this recipe.
* @apiParam {Object[]} [votes] List of all the votes for this recipe. 
* @apiParam {Number} [votes.vote] Vote for a recipe.
* @apiParam {ObjectId} [votes.id_author] Id of the author's vote.

*/

/**
* @apiDefine RecipeObjectPutParam
*
* @apiParam {String} [title] Name of the recipe
* @apiParam {ObjectId} [author_id] Id of the author of the recipe
* @apiParam {String} [author_name] Name of the author of the recipe
* @apiParam {String} [description] Description of the recipe
* @apiParam {Object[]} [type] Type of the recipe
* @apiParam {ObjectId} type.id_type Id of the type
* @apiParam {String} type.name Name of the type
* @apiParam {Date} [date_posted] [default : Date.now] Date when the recipe was posted
* @apiParam {Date} [date_edited] Date when the recipe was edited
* @apiParam {Number} [difficulty] [default : 0, min : 0, max : 3] Difficulty set for the recipe
* @apiParam {Number} [average_score] [default : 0, min : 0, max : 5] Average score voted by the users for the recipe
* @apiParam {Number} [time_preparation] [default : 0, min : 0, max : 90000] Time it takes to make the recipe (in min)
* @apiParam {Number} [average_price] [default : 0, min : 0, max : 3] Average cost of the recipe
* @apiParam {Object[]} [ingredients] List of the ingredients needed for the recipe
* @apiParam {ObjectId} [ingredients.id_ingredient] Id of the ingredient
* @apiParam {String} [ingredients.name_ingredient] Name of the ingredient
* @apiParam {Number} [ingredients.amount_ingredient] [default : 0, min : 0, max : 1000000] Grams of the ingredient needed
* @apiParam {Object[]} [comments] List of the comments posted for the recipe
* @apiParam {ObjectId} [comments.id_author] Id of the author of the comment
* @apiParam {String} [comments.name_author] Name of the author of the comment
* @apiParam {Date} [comments.date_posted] [default : Date.now] Date when the comment was posted
* @apiParam {Date} [comments.date_edited] Date when the comment was edited
* @apiParam {String} [comments.content] The comment itself
* @apiParam {Boolean} [comments.visible] [default : true] Is the comment visible by others
* @apiParam {Object[]} [pictures] List of the pictures posted by the author for the recipe
* @apiParam {String} [pictures.thumbnail_url] Url of the thumbnail version of the picture
* @apiParam {String} [pictures.medium_sized_url] Url of the medium size version of the picture
* @apiParam {String} [pictures.big_sized_url] Url of the big size version of the picture
* @apiParam {Number} [number_vote] Number of votes for this recipe.
* @apiParam {Object[]} [votes] List of all the votes for this recipe. 
* @apiParam {Number} [votes.vote] Vote for a recipe.
* @apiParam {ObjectId} [votes.id_author] Id of the author's vote.
*/

/**
* @apiDefine RecipeObjectSuccess
*
* @apiSuccess {String} _id Id of the recipe
* @apiSuccess {String} title Name of the recipe
* @apiSuccess {ObjectId} author_id Id of the author of the recipe
* @apiSuccess {String} author_name Name of the author of the recipe
* @apiSuccess {String} [description] Description of the recipe
* @apiSuccess {Object[]} [type] Type of the recipe
* @apiSuccess {ObjectId} type.id_type Id of the type
* @apiSuccess {String} type.name Name of the type
* @apiSuccess {Date} [date_posted] [default : Date.now] Date when the recipe was posted
* @apiSuccess {Date} [date_edited] Date when the recipe was edited
* @apiSuccess {Number} [difficulty] [default : 0, min : 0, max : 3] Difficulty set for the recipe
* @apiSuccess {Number} [average_score] [default : 0, min : 0, max : 5] Average score voted by the users for the recipe
* @apiSuccess {Number} [time_preparation] [default : 0, min : 0, max : 90000] Time it takes to make the recipe (in min)
* @apiSuccess {Number} [average_price] [default : 0, min : 0, max : 3] Average cost of the recipe
* @apiSuccess {Object[]} ingredients List of the ingredients needed for the recipe
* @apiSuccess {ObjectId} ingredients.id_ingredient Id of the ingredient
* @apiSuccess {String} ingredients.name_ingredient Name of the ingredient
* @apiSuccess {Number} [ingredients.amount_ingredient] [default : 0, min : 0, max : 1000000] Grams of the ingredient needed
* @apiSuccess {Object[]} [comments] List of the comments posted for the recipe
* @apiSuccess {ObjectId} comments.id_author Id of the author of the comment
* @apiSuccess {String} comments.name_author Name of the author of the comment
* @apiSuccess {Date} comments.date_posted [default : Date.now] Date when the comment was posted
* @apiSuccess {Date} [comments.date_edited] Date when the comment was edited
* @apiSuccess {String} comments.content The comment itself
* @apiSuccess {Boolean} [comments.visible] [default : true] Is the comment visible by others
* @apiSuccess {Object[]} [pictures] List of the pictures posted by the author for the recipe
* @apiSuccess {String} pictures.thumbnail_url Url of the thumbnail version of the picture
* @apiSuccess {String} pictures.medium_sized_url Url of the medium size version of the picture
* @apiSuccess {String} [pictures.big_sized_url] Url of the big size version of the picture
* @apiSuccess {Number} [number_vote] Number of votes for this recipe.
* @apiSuccess {Object[]} [votes] List of all the votes for this recipe. 
* @apiSuccess {Number} [votes.vote] Vote for a recipe.
* @apiSuccess {ObjectId} [votes.id_author] Id of the author's vote.
*/

/**
* @apiDefine RecipeRequestJSON
*
* @apiParamExample {json} Request-Example:
*     {
*       "title": "Pumpkin pie",
*       "author_id": "561fc840d6c25173533e267f",
*       "author_name": "Kek man",
*       "description" : "It's Halloween time!",
*		"type" : {
*				"id_type" : "689ed840d6c25173533g895",
*				"name" : "pie"
*		},
*		"date_posted" : "2015-03-31T22:00:00.000Z",
*		"date_edited" : "2015-04-01T18:34:23.000Z",
*		"difficulty" : 1,
*		"average_score" : 0,
*		"time_preparation" : 60,
*		"average_price" : 1,
*		"number_vote" : 1,
*		"votes" : [{
*						"vote": 4,
*						"id_author" : "386fc840d6c25173533e546h"
*					}],
*		"ingredients" : [{
*						"id_ingredient" : "689ed840d6c25173533g895",
*						"name_ingredient" : "Pumpkin",
*						"amount_ingredient" : 100
*				   	}],
*		"comments" : [{
*						"id_author" : "386fc840d6c25173533e546h",
*						"name_author" : "Pacza",
*						"date_posted" : "2015-03-31T22:00:00.000Z",
*						"date_edited" : "2015-04-01T18:34:23.000Z",
*						"content" : "Thank you! Very nice recipe!",
*						"visible" : true
*				   	}],
*		"pictures" : [{
*						"thumbnail_url" : "/thumbnails/1.jpg",
*						"medium_sized_url" : "/medium_sized/1.jpg",
*						"big_sized_url" : "/big_sized/1.jpg"
*				   	}]
*     }
*/

var Recipes = require('../models/recipes');

/*
** POSTS
*/

/**
* @api {post} /recipes/ Create a new Recipe
* @apiName postRecipe
* @apiGroup Recipes
* @apiVersion 0.1.0
*
* @apiUse RecipeObjectPostParam
*
* @apiUse RecipeRequestJSON
*
* @apiSuccess message Recipe succesfully created!
*
* @apiSuccessExample Success-Response
*     HTTP/1.1 200 OK
*	  {
*		"message" : "Recipe succesfully created!"
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

exports.postRecipe = function(req, res) {
	var default_fields = ["difficulty", "date_edited", "date_posted", "average_score", "time_preparation", "average_price", "votes", "number_vote"];
	var recipe = new Recipes({
		title : req.body.title,
		type : req.body.type,
		author_id : req.body.author_id,
		author_name : req.body.author_name,
		description : req.body.description,
		recipes : req.body.recipes,
		comments : req.body.comments,
		pictures : req.body.pictures,
		ingredients  : req.body.ingredients
	});

	for (i = 0; i < default_fields.length; i++)
	{
		if (req.body[default_fields[i]] !== undefined)
			recipe.set(default_fields[i], req.body[default_fields[i]]);
	}
	recipe.save(function (err) {
        if (err)
        	return (res.status(400).send(err));
        return (res.json({message: 'Recipe succesfully created!'}));
    });
};

/*
** PUTS
*/

/**
* @apiDefine RecipeServerAnswersPut
*
* @apiSuccessExample Success-Response
*     HTTP/1.1 200 OK
*	  {
*		"message" : "Recipe successfully updated!"
*	  }
*
* @apiError message Recipe not found.
*
* @apiErrorExample Invalid Parameter Value
*	  HTTP/1.1 404 Bad Request
*	  {
*		"message" : "Recipe not found."
*	  }
*
* @apiError message The key <key> does not exist for Recipes.
*
* @apiErrorExample Bad key sent
*	  HTTP/1.1 400 Bad Request
*	  {
*		"message" : "The key <key> does not exist for Recipes."
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
* @api {put} /recipes/id/:id Update a Recipe by Id
* @apiName putRecipeById
* @apiGroup Recipes
* @apiVersion 0.1.0
*
* @apiUse RecipeObjectPutParam
*
* @apiUse RecipeRequestJSON
*
* @apiUse RecipeServerAnswersPut
*
*/
exports.putRecipeById = function (req, res) {
	if (!req.params.id || Object.keys(req.body).length === 0)
		return (res.status(400).json({message : 'The id musn\'t be null and the request must not be empty.'}));
	Recipes.findById(req.params.id,
		function (err, recipe) {
			return (module.exports.updateRecipe(req, res, err, recipe));
		});
}

/**
* @api {put} /recipes/title/:title Update a Recipe by title
* @apiName putRecipeByTitle
* @apiGroup Recipes
* @apiVersion 0.1.0
*
* @apiUse RecipeObjectPutParam
*
* @apiUse RecipeRequestJSON
*
* @apiSuccess message Recipe successfully updated!
*
* @apiUse RecipeServerAnswersPut
*
*/
exports.putRecipeByTitle = function (req, res) {
	if (!req.params.title || Object.keys(req.body).length === 0)
		return (res.status(400).json({message : 'The title musn\'t be null and the request must not be empty.'}));
	Recipes.findOne({
		"title" : req.params.title
		},
		function (err, recipe) {
			return (module.exports.updateRecipe(req, res, err, recipe));
		});
}

exports.updateRecipe = function(req, res, err, recipe) {
	var fields = ["title", "author_id", "author_name", "description", "type", "date_posted", "date_edited", "difficulty", "average_score", "average_price", "time_preparation", "comments", "pictures", "ingredients", "votes", "number_vote"];
	var sent_fields = Object.keys(req.body);

	if (err)
		return (res.send(err));
	else if (recipe === null)
		return (res.status(404).json({message : 'Recipe not found.'}))

	for (i=0; i < sent_fields.length; i++)
	{
		if (!(fields.indexOf(sent_fields[i]) > -1))
			return (res.status(400).json({message : 'The key <'+sent_fields[i]+'> does not exist for Recipes.'}));
		recipe[sent_fields[i]] = req.body[sent_fields[i]];
	}

	recipe.save(function(err) {
		if (err)
			return (res.send(err));
		return (res.json({message : "Recipe successfully updated!"}));
	});
	return (1);
};

/*
** GETS
*/

/**
* @apiDefine getRecipeAnswer
*
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*     {
*		"_id" : "281fc840d6c25173533er546"
*       "title": "Pumpkin pie",
*       "author_id": "561fc840d6c25173533e267f",
*       "author_name": "Kek man",
*       "description" : "It's Halloween time!",
*		"type" : {
*				"id_type" : "689ed840d6c25173533g895",
*				"name" : "pie"
*		},
*		"date_posted" : "2015-03-31T22:00:00.000Z",
*		"date_edited" : "2015-04-01T18:34:23.000Z",
*		"difficulty" : 1,
*		"average_score" : 0,
*		"time_preparation" : 60,
*		"average_price" : 1,
*		"number_vote" : 1,
*		"votes" : [{
*						"vote": 4,
*						"id_author" : "386fc840d6c25173533e546h"
*					}],
*		"ingredients" : [{
*						"id_ingredient" : "689ed840d6c25173533g895",
*						"name_ingredient" : "Pumpkin",
*						"amount_ingredient" : 100
*				   	}],
*		"comments" : [{
*						"id_author" : "386fc840d6c25173533e546h",
*						"name_author" : "Pacza",
*						"date_posted" : "2015-03-31T22:00:00.000Z",
*						"date_edited" : "2015-04-01T18:34:23.000Z",
*						"content" : "Thank you! Very nice recipe!",
*						"visible" : true
*				   	}],
*		"pictures" : [{
*						"thumbnail_url" : "/thumbnails/1.jpg",
*						"medium_sized_url" : "/medium_sized/1.jpg",
*						"big_sized_url" : "/big_sized/1.jpg"
*				   	}]
*     }
*/

/**
* @api {get} /recipes/ Request all the Recipes
* @apiName getAllRecipes
* @apiGroup Recipes
* @apiVersion 0.1.0
*
* @apiUse RecipeObjectSuccess
*
* @apiUse getRecipeAnswer
*
* @apiError message There are no existing recipes.
* @apiErrorExample Invalid Parameter Value
*     HTTP/1.1 404 Not Found
*     {
*       "message": "There are no existing recipes."
*     }
*/

exports.getAllRecipes = function(req, res) {
	Recipes.find({},
		function(err, docs) {
			if (err)
				return (res.send(err));
			else if (docs.length <= 0)
				return (res.json(404, {message : 'There are no existing recipes.'}))
			return (res.json(docs));
		}
	);
	return (1);
};

/**
* @api {get} /recipes/id/:id Request Recipe informations by id
* @apiName getRecipeById
* @apiGroup Recipes
* @apiVersion 0.1.0
*
* @apiParam {Number} id Recipes unique ID
*
* @apiUse RecipeObjectSuccess
*
* @apiUse getRecipeAnswer
*
* @apiError message The id of the recipe was not found
* @apiErrorExample Invalid Parameter Value
*     HTTP/1.1 404 Not Found
*     {
*       "message": "The id was not found."
*     }
*/
exports.getRecipeById = function (req, res, flag) {
	var id = flag === true ? req.body.id : req.params.id;
	if (!id)
		return flag === true ? -1 : res.json(400, {message : 'The id musn\'t be null'});
	Recipes.findById(id,
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
* @api {get} /recipes/title/:title Request Recipe informations by title
* @apiName getRecipeByTitle
* @apiGroup Recipes
* @apiVersion 0.1.0
*
* @apiParam {String} title Recipe partial or full title
*
* @apiUse RecipeObjectSuccess
*
* @apiUse getRecipeAnswer
*
* @apiError message The title of the recipe was not found
* @apiErrorExample Invalid Parameter Value
*     HTTP/1.1 404 Not Found
*     {
*       "message": "The title was not found."
*     }
*/
exports.getRecipeByTitle = function (req, res, flag) {
	var title = flag === true ? req.body.title : req.params.title;
	if (!title)
		return flag === true ? -1 : res.json(400, {message : 'The title musn\'t be null'});
	Recipes.find({
		"title": { "$regex": title, "$options": "i" } 
		},
		function (err, docs) {
			if (err)
				return (res.send(err));
			else if (docs.length <= 0)
				return (res.json(404, {message : 'The title was not found.'}))
			return (res.json(docs));
		}
	);
	return (1);
};

/*
** DELETES
*/

/**
* @apiDefine deleteRecipeSuccess
* @apiSuccess message Recipe succesfully deleted!
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*	  {
*		"message" : "Recipe succesfully deleted!"
*	  }
*/

/**
* @api {delete} /recipes/ Delete Recipes (JSON)
* @apiName deleteIngredients
* @apiGroup Recipes
* @apiVersion 0.1.0
*
* @apiParam {Number} [id] Recipe unique ID
* @apiParam {Sting} [title] Recipe full name
*
* @apiParamExample {json} Request-Example:
*	  {
*		"id" : "56183b64753d867e016c80d2"
*	  }
*
* @apiUse deleteRecipeSuccess
*
* @apiError message The id was not found.
* @apiErrorExample Invalid Parameter Value
*     HTTP/1.1 404 Not Found
*     {
*       "message": "The id was not found."
*     }
*/
exports.deleteRecipes = function (req, res) {
	var i = -1;
	var callbackReturn = -1;
	var functionPointer = [module.exports.deleteRecipeById(req, res, true),
							module.exports.deleteRecipeByTitle(req, res, true)];
	var usage = "No correct argument given. Specify an id or a title";

	while ((callbackReturn = functionPointer[++i]) == -1
		&& i < functionPointer.length - 1);
	return callbackReturn == -1 ? res.json({message : usage}) : callbackReturn;

};

/**
* @api {delete} /recipes/id/:id Delete Recipe by id
* @apiName deleteRecipeById
* @apiGroup Recipes
* @apiVersion 0.1.0
*
* @apiParam {Number} id Recipe unique ID
*
* @apiUse deleteRecipeSuccess
*
* @apiError message The id was not found.
* @apiErrorExample Invalid Parameter Value
*     HTTP/1.1 404 Not Found
*     {
*       "message": "The id was not found."
*     }
*/
exports.deleteRecipeById = function (req, res, flag) {
	var id = flag === true ? req.body.id : req.params.id;
	if (!id)
		return flag === true ? -1 : res.json(400, {message : 'The id musn\'t be null'});
	Recipes.remove({
		_id : id
		},
		function (err, removed) {
			if (err)
				return (res.send(err));
			else if (removed.result.n === 0)
				return (res.json(404, {message : 'The id was not found.'}))
			return (res.json({message : 'Recipe succesfully deleted!'}));
		}
	);
	return (1);
};

/**
* @api {delete} /recipes/title/:title Delete Recipe by title
* @apiName deleteRecipeByTitle
* @apiGroup Recipes
* @apiVersion 0.1.0
*
* @apiParam {String} name Recipe full name
*
* @apiUse deleteRecipeSuccess
*
* @apiError message The title was not found.
* @apiErrorExample Invalid Parameter Value
*     HTTP/1.1 404 Not Found
*     {
*       "message": "The title was not found."
*     }
*/
exports.deleteRecipeByTitle = function (req, res, flag) {
	var title = flag === true ? req.body.title : req.params.title;
	if (!title)
		return flag === true ? -1 : res.json(400, {message : 'The title musn\'t be null'});
	Recipes.remove({
		title : title
		},
		function (err, removed) {
			if (err)
				return (res.send(err));
			else if (removed.result.n === 0)
				return (res.json(404, {message : 'The title was not found.'}))
			return (res.json({message : 'Recipe succesfully deleted!'}));
		}
	);
	return (1);
};