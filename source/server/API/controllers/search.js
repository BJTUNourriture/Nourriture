// API/controllers/search.js

/**
* @apiDefine SearchObjectPostParam
*
* @apiParam {String} [name] Name of the ingredient (Regex)
* @apiParam {String[]} [tags] Name of the tags that your ingredient must have.
* @apiParam {Object[]} [order] Order of the return of the search
* @apiParam {String} [order.order] Order (can be asc or desc)
* @apiParam {String} [order.field] Field which is order (ex: fat)
* @apiParam {Object[]} metadata Number of items to return, page of the items
* @apiParam {String} metadata.items number of items that are return for the current page
* @apiParam {String} metadata.page Number of the page that you want to ask
*/

/**
* @apiDefine SearchRequestJSON
*
* @apiParamExample {json} Request-Example:
*{
*    "name": "fu",
*    "order": {"order": "desc",
*              "field": "fat"
*    },
*    "tags": ['fruit'],
*    "metadata": {"items": 1,
*                  "page": 1
*    }
*}
*/

var Ingredients = require('../models/ingredients');
var Recipes = require('../models/recipes')

/*
** POSTS
*/

/**
* @api {post} /search/ingredients/ Search some Ingredients
* @apiName postSearch
* @apiGroup Search
* @apiVersion 0.1.0
*
* @apiUse SearchObjectPostParam
* 
* @apiUse SearchRequestJSON
*
* @apiSuccessExample Success-Response
*     HTTP/1.1 200 OK
*	  {
*		"metadata": [{"current_page": "2",
*			      "total_page": "24",
*			       "order": {"field": "fat",
*					 "order": "desc"},
*				"name": "Tom"}],
*		"Ingredients": [{"_id" : "561830c5fecdba4f72668fe8",
*      				"name": "Tomato",
*      				"description": "Very yummy fruit."
*				"fat" : 0.3,
*				"carbohydrates" : 5.8,
*				"protein" : 1.3,
*				"tags" : [{
*					"name" : "fruit",
*					"description" : "Tag concerning fruits",
*					"flag" : {
*								"name" : "SAFE",
*								"level" : 0
*							 }
*				   }]
*	  }
*
* @apiError message Nothing find for this search
* @apiErrorExample Invalid Parameter Value
*     HTTP/1.1 404 Not Found
*     {
*       "message": "You must at least set a name or a tag to search"
*     }
*
* @apiErrorExample  No metadata find
*     HTTP/1.1 404 Not Found
*     {
*       "message": "You must set the metadata"
*     }
*
* @apiErrorExample  No order field find
*     HTTP/1.1 404 Not Found
*     {
*       "message": "The order.field must be set"
*     }
*/

exports.postSearchIngredients = function (req, res, flag) {
	var name =  req.body.name;
	var order = ""
	if (req.body.order) {
		var order = req.body.order
		var order_order = req.body.order.order;
		var order_field = req.body.order.field;
		var query = {};
		query[order_field] = order_order;
	}
	var metadata = ""
	if (req.body.metadata){
		metadata = req.body.metadata
		var items_number = req.body.metadata.items;
		var items_page = req.body.metadata.page;
	}
	var tag_list = req.body.tags;

	//If name and tags are not set

	if (!name && !tag_list)
		return flag === true ? -1 : res.status(400).send({message : 'You must at least set a name or a tag to search'})

	if (metadata == "")
		return flag === true ? -1 : res.status(400).send({message : 'You must set the metadata'})

	

	//If name and tags are set

	if (name && tag_list){
	
	var Json_search = {
				"name": { "$regex": name, "$options": "i" },
				"tags.name": { $all: tag_list}
			  };
	var newjson = {metadata: {current_page: items_page, order: order, tags: tag_list, name: name}}

	}
	
	//If only name is set

	else if (name && !tag_list){

	var Json_search = {
				"name": { "$regex": name, "$options": "i" }
			  };
	var newjson = {metadata: {current_page: items_page, order: order, name: name}}

	}

	//If only tags is set

	else if (!name && tag_list){

	var Json_search = {
				"tags.name": { $all: tag_list}
			  };
	var newjson = {metadata: {current_page: items_page, order: order, tags: tag_list}}

	}

	var total_page
	Ingredients.find(Json_search,
		function (err, docs) {
			total_page = Math.round(docs.length / items_number);
		if (total_page <= 0)
			total_page = 1	
		}
	)

		if (order === ""){
			Ingredients.find(
				Json_search
				,
				function (err, docs) {
					if (err)
						return (res.send(err));
					else if (docs.length <= 0)
						return (res.status(404).send({message : 'Nothing find for this search'}))
					else{
						newjson.metadata.total_page = total_page
						newjson.ingredients = docs
						return (res.json(newjson));
					}
				} 
		).skip((items_page - 1) * items_number).limit(items_number);
		}
		else if (order != ""){
			
			if (order_order == "desc")
				order_order = -1
			else
				order_order = 1
			if (!order_field)
				return flag === true ? -1 : res.status(404).send({message : 'The order.field must be set'})
			Ingredients.find(
				Json_search,
				function (err, docs) {
					if (err){
						return (res.send(err));
						}
					else if (docs.length <= 0){
						return (res.status(404).send({message : 'Nothing find for this search'}))}
					else{
						newjson.metadata.total_page = total_page
						newjson.ingredients = docs
						return (res.json(newjson));
					}
				}
		).skip((items_page - 1) * items_number).sort(query).limit(items_number);
	    }
	return (1);
};

exports.postSearchRecipes = function (req, res, flag) {

	var title =  req.body.title;
	var order = ""
	if (req.body.order) {
		var order = req.body.order
		var order_order = req.body.order.order;
		var order_field = req.body.order.field;
		var query = {};
		query[order_field] = order_order;
	}
	var metadata = ""
	if (req.body.metadata){
		metadata = req.body.metadata
		var items_number = req.body.metadata.items;
		var items_page = req.body.metadata.page;
	}

	var type_list = req.body.type;

	//If title and types are not set

	if (!title && !type_list)
		return flag === true ? -1 : res.status(400).send({message : 'You must at least set a title or a type to search'})

	if (metadata == "")
		return flag === true ? -1 : res.status(400).send({message : 'You must set the metadata'})

		//If title and tags are set

	if (title && type_list){
	
	var Json_search = {
				"title": { "$regex": title, "$options": "i" },
				"tags.name": { $all: tag_list}
			  };
	var newjson = {metadata: {current_page: items_page, order: order, tags: tag_list, title: title}}

	}
	
	//If only name is set

	else if (title && !type_list){

	var Json_search = {
				"title": { "$regex": title, "$options": "i" }
			  };
	var newjson = {metadata: {current_page: items_page, order: order, title: title}}

	}

	//If only tags is set

	else if (!title && tag_list){

	var Json_search = {
				"tags.name": { $all: tag_list}
			  };
	var newjson = {metadata: {current_page: items_page, order: order, tags: tag_list}}

	}
	
	var total_page
	Recipes.find(Json_search,
		function (err, docs) {
			total_page = Math.round(docs.length / items_number);
		if (total_page <= 0)
			total_page = 1	
		}
	)

		if (order === ""){
			Recipes.find(
				Json_search
				,
				function (err, docs) {
					if (err)
						return (res.send(err));
					else if (docs.length <= 0)
						return (res.status(404).send({message : 'Nothing find for this search'}))
					else{
						newjson.metadata.total_page = total_page
						newjson.ingredients = docs
						return (res.json(newjson));
					}
				} 
		).skip((items_page - 1) * items_number).limit(items_number);
		}
		else if (order != ""){
			
			if (order_order == "desc")
				order_order = -1
			else
				order_order = 1
			if (!order_field)
				return flag === true ? -1 : res.status(404).send({message : 'The order.field must be set'})
			Recipes.find(
				Json_search,
				function (err, docs) {
					if (err){
						return (res.send(err));
						}
					else if (docs.length <= 0){
						return (res.status(404).send({message : 'Nothing find for this search'}))}
					else{
						newjson.metadata.total_page = total_page
						newjson.ingredients = docs
						return (res.json(newjson));
					}
				}
		).skip((items_page - 1) * items_number).sort(query).limit(items_number);
	    }
	return (1);
}
