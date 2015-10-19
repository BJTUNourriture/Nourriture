// API/controllers/ingredients.js

/**
* @apiDefine RecipeObjectPostParam
*
* @apiParam {String} title Name of the recipe
* @apiParam {String} author_id Id of the author of the recipe
* @apiParam {String} author_name Name of the author of the recipe
* @apiParam {String} [description] Description of the recipe
* @apiParam {Date} [date_posted] [default : Date.now] Date when the recipe was posted
* @apiParam {Date} [date_edited] Date when the recipe was edited
* @apiParam {Number} [difficulty] [default : 0, min : 0, max : 3] Difficulty set for the recipe
* @apiParam {Number} [average_score] [default : 0, min : 0, max : 5] Average score voted by the users for the recipe
* @apiParam {Number} [time_preparation] [default : 0, min : 0, max : 90000] Time it takes to make the recipe (in min)
* @apiParam {Number} [average_price] [default : 0, min : 0, max : 3] Average cost of the recipe
* @apiParam {Object[]} ingredients List of the ingredients needed for the recipe
* @apiParam {String} ingredients.id_ingredient Id of the ingredient
* @apiParam {String} ingredients.name_ingredient Name of the ingredient
* @apiParam {Number} [ingredients.amount_ingredient] [default : 0, min : 0, max : 1000000] Grams of the ingredient needed
* @apiParam {Object[]} [comments] List of the comments posted for the recipe
* @apiParam {String} comments.id_author Id of the author of the comment
* @apiParam {String} comments.name_author Name of the author of the comment
* @apiParam {Date} comments.date_posted [default : Date.now] Date when the comment was posted
* @apiParam {Date} [comments.date_edited] Date when the comment was edited
* @apiParam {String} comments.content The comment itself
* @apiParam {Boolean} [comments.visible] [default : true] Is the comment visible by others
* @apiParam {Object[]} [pictures] List of the pictures posted by the author for the recipe
* @apiParam {String} pictures.thumbnail_url Url of the thumbnail version of the picture
* @apiParam {String} pictures.medium_sized_url Url of the medium size version of the picture
* @apiParam {String} [pictures.big_sized_url] Url of the big size version of the picture
*/

/**
* @apiDefine RecipeObjectSuccess
*
* @apiSuccess {String} _id Id of the recipe
* @apiSuccess {String} title Name of the recipe
* @apiSuccess {String} author_id Id of the author of the recipe
* @apiSuccess {String} author_name Name of the author of the recipe
* @apiSuccess {String} [description] Description of the recipe
* @apiSuccess {Date} [date_posted] [default : Date.now] Date when the recipe was posted
* @apiSuccess {Date} [date_edited] Date when the recipe was edited
* @apiSuccess {Number} [difficulty] [default : 0, min : 0, max : 3] Difficulty set for the recipe
* @apiSuccess {Number} [average_score] [default : 0, min : 0, max : 5] Average score voted by the users for the recipe
* @apiSuccess {Number} [time_preparation] [default : 0, min : 0, max : 90000] Time it takes to make the recipe (in min)
* @apiSuccess {Number} [average_price] [default : 0, min : 0, max : 3] Average cost of the recipe
* @apiSuccess {Object[]} ingredients List of the ingredients needed for the recipe
* @apiSuccess {String} ingredients.id_ingredient Id of the ingredient
* @apiSuccess {String} ingredients.name_ingredient Name of the ingredient
* @apiSuccess {Number} [ingredients.amount_ingredient] [default : 0, min : 0, max : 1000000] Grams of the ingredient needed
* @apiSuccess {Object[]} [comments] List of the comments posted for the recipe
* @apiSuccess {String} comments.id_author Id of the author of the comment
* @apiSuccess {String} comments.name_author Name of the author of the comment
* @apiSuccess {Date} comments.date_posted [default : Date.now] Date when the comment was posted
* @apiSuccess {Date} [comments.date_edited] Date when the comment was edited
* @apiSuccess {String} comments.content The comment itself
* @apiSuccess {Boolean} [comments.visible] [default : true] Is the comment visible by others
* @apiSuccess {Object[]} [pictures] List of the pictures posted by the author for the recipe
* @apiSuccess {String} pictures.thumbnail_url Url of the thumbnail version of the picture
* @apiSuccess {String} pictures.medium_sized_url Url of the medium size version of the picture
* @apiSuccess {String} [pictures.big_sized_url] Url of the big size version of the picture
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
*		"date_posted" : "2015-03-31T22:00:00.000Z",
*		"date_edited" : "2015-04-01T18:34:23.000Z",
*		"difficulty" : 1,
*		"average_score" : 0,
*		"time_preparation" : 60,
*		"average_price" : 1,
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
	var default_fields = ["difficulty", "date_edited", "date_posted", "average_score", "time_preparation", "average_price"];
	var recipe = new Recipes({
		title : req.body.title,
		author_id : req.body.author_id,
		author_name : req.body.author_name,
		description : req.body.description,
		ingredients : req.body.ingredients,
		comments : req.body.comments,
		pictures : req.body.pictures
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
*		"date_posted" : "2015-03-31T22:00:00.000Z",
*		"date_edited" : "2015-04-01T18:34:23.000Z",
*		"difficulty" : 1,
*		"average_score" : 0,
*		"time_preparation" : 60,
*		"average_price" : 1,
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