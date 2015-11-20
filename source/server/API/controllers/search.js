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
var Groups = require('../models/groups')

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
*				"name": "Tom",
				 "total": 150}],
*		"ingredients": [{"_id" : "561830c5fecdba4f72668fe8",
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

	if (metadata == "")
		return flag === true ? -1 : res.status(400).send({message : 'You must set the metadata'})

	

	//If name and tags are set

	if (!name && !tag_list){

		var Json_search = {}
		var newjson = {metadata: {current_page: items_page, order: order}}
	}

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
	var total_items
	Ingredients.find(Json_search,
		function (err, docs) {
			total_items = docs.length;
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
						newjson.metadata.total = total_items
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
						newjson.metadata.total = total_items
						newjson.metadata.total_page = total_page
						newjson.ingredients = docs
						return (res.json(newjson));
					}
				}
		).skip((items_page - 1) * items_number).sort(query).limit(items_number);
	    }
	return (1);
};

/**
* @apiDefine SearchRecipesObjectPostParam
*
* @apiParam {String} [title] Name of the recipes (Regex)
* @apiParam {String[]} [type] Id of the types that your recipes must have.
* @apiParam {Object[]} [order] Order of the return of the search
* @apiParam {String} [order.order] Order (can be asc or desc)
* @apiParam {String} [order.field] Field which is order (ex: fat)
* @apiParam {Object[]} metadata Number of items to return, page of the items
* @apiParam {String} metadata.items number of items that are return for the current page
* @apiParam {String} metadata.page Number of the page that you want to ask
*/

/**
* @apiDefine SearchRecipesRequestJSON
*
* @apiParamExample {json} Request-Example:
*{
*    "title": "pie",
*    "order": {"order": "desc",
*              "field": "fat"
*    },
*    "tags": ['563091df113604b7959a6327'],
*    "metadata": {"items": 1,
*                  "page": 1
*    }
*}
*/

/*
** POSTS
*/

/**
* @api {post} /search/recipes/ Search some recipes
* @apiName postSearchRecipes
* @apiGroup Search
* @apiVersion 0.1.0
*
* @apiUse SearchRecipesObjectPostParam
* 
* @apiUse SearchRecipesRequestJSON
*
* @apiSuccessExample Success-Response
*     HTTP/1.1 200 OK
*	  {
*  "metadata": {
*    "current_page": 1,
*    "order": {
*      "order": "desc",
*      "field": "fat"
*    },
*    "tags": [
*      "563091df113604b7959a6327"
*    ],
*    "total_page": 1,
	"total": 150
*  },
*  "recipes": [
*    {
*      "_id": "56309253113604b7959a632c",
*      "date_edited": "2015-04-01T18:34:23.000Z",
*      "title": "Pumpkin pie",
*      "author_id": "561fc840d6c25173533e267f",
*      "author_name": "Kek man",
*      "description": "It's Halloween time!",
*      "__v": 0,
*      "ingredients": [
*        {
*          "id_ingredient": "562a36ec4f0547a42755bf90",
*          "name_ingredient": "Fuck",
*          "_id": "56309253113604b7959a632d",
*          "amount_ingredient": 100
*        }
*      ],
*      "pictures": [
*        {
*          "thumbnail_url": "/thumbnails/1.jpg",
*          "medium_sized_url": "/medium_sized/1.jpg",
*          "big_sized_url": "/big_sized/1.jpg",
*          "_id": "56309253113604b7959a632e"
*        }
*      ],
*      "comments": [
*        {
*          "id_author": "386fc840d6c25173533e5406",
*          "name_author": "Pacza",
*          "date_posted": "2015-03-31T22:00:00.000Z",
*          "date_edited": "2015-04-01T18:34:23.000Z",
*          "content": "Thank you! Very nice recipe!",
*          "_id": "56309253113604b7959a632f",
*          "visible": true
*        }
*      ],
*      "average_price": 1,
*      "time_preparation": 60,
*      "average_score": 0,
*      "difficulty": 1,
*      "date_posted": "2015-03-31T22:00:00.000Z",
*      "type": {
*        "id_type": "563091df113604b7959a6327",
*        "name": "TopKek"
*      }
*    }
*  ]
*}
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

exports.postSearchRecipes = function (req, res, flag) {

	var title =  req.body.title;
	var author_name = req.body.author_name;
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

	var tag_list = req.body.type;

	//If title and types are not set

	if (metadata == "")
		return flag === true ? -1 : res.status(400).send({message : 'You must set the metadata'})

		//If title and tags are set

	if (!title && !tag_list){

		var Json_search = {}
		var newjson = {metadata: {current_page: items_page, order: order}}
	}

	if (title && tag_list){
	
	var Json_search = {
				"title": { "$regex": title, "$options": "i" },
				"type.id_type": { $all: type_list}
			  };
	var newjson = {metadata: {current_page: items_page, order: order, tags: tag_list, title: title}}

	}
	
	//If only name is set

	else if (title && !tag_list){

	var Json_search = {
				"title": { "$regex": title, "$options": "i" }
			  };
	var newjson = {metadata: {current_page: items_page, order: order, title: title}}

	}

	//If only tags is set

	else if (!title && tag_list){

	var Json_search = {
				"type.id_type": { $all: type_list}
			  };
	var newjson = {metadata: {current_page: items_page, order: order}}

	}
	
	if (author_name) {
		var Json_search = {
				"author_name": { "$regex": author_name, "$options": "i" }
			  };
	var newjson = {metadata: {current_page: items_page, order: order}}
	}

	var total_page
	var total_items
	Recipes.find(Json_search,
		function (err, docs) {
			total_items = docs.length;
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
						newjson.metadata.total = total_items
						newjson.metadata.total_page = total_page
						newjson.recipes = docs
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
						newjson.metadata.total = total_items
						newjson.metadata.total_page = total_page
						newjson.recipes = docs
						return (res.json(newjson));
					}
				}
		).skip((items_page - 1) * items_number).sort(query).limit(items_number);
	    }
	return (1);
}

/**
* @apiDefine SearchGroupsObjectPostParam
*
* @apiParam {String} [name] Name of the group (Regex)
* @apiParam {Object[]} [order] Order of the return of the search
* @apiParam {String} [order.order] Order (can be asc or desc)
* @apiParam {String} [order.field] Field which is order (ex: number)
* @apiParam {Object[]} metadata Number of items to return, page of the items
* @apiParam {String} metadata.items number of items that are return for the current page
* @apiParam {String} metadata.page Number of the page that you want to ask
*/

/**
* @apiDefine SearchGroupsRequestJSON
*
* @apiParamExample {json} Request-Example:
*{
*    "title": "gras",
*    "order": {"order": "desc",
*              "field": "name"
*    },
*    "metadata": {"items": 1,
*                  "page": 1
*    }
*}
*/

/*
** POSTS
*/

/**
* @api {post} /search/groups/ Search some groups
* @apiName postSearchGroups
* @apiGroup Search
* @apiVersion 0.1.0
*
* @apiUse SearchGroupsObjectPostParam
* 
* @apiUse SearchGroupsRequestJSON
*
* @apiSuccessExample Success-Response
*     HTTP/1.1 200 OK
*	  {
*  {
*  "metadata": {
*    "current_page": 1,
*    "order": "",
*    "total": 1,
*    "total_page": null
*  },
*  "groups": [
*    {
*      "_id": "564ee5ca6399549c3a16103f",
*      "name": "totto",
*      "__v": 0,
*      "tags": [],
*      "users": [
*        {
*          "user_id": "564eb7358aa4dcbb2e238429",
*          "_id": "564ee5ca6399549c3a161040",
*          "access": {
*            "name": "Admin",
*            "level": 0
*          }
*        }
*      ]
*    }
*  ]
*}

*}
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

/*exports.postSearchUsers = function (req, res, flag) {
	
	var username =  req.body.username;
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

	console.log(username)

	//If username is not set

	if (!username)
		return flag === true ? -1 : res.status(400).send({message : 'You must at least set a username to search'})

	if (metadata == "")
		return flag === true ? -1 : res.status(400).send({message : 'You must set the metadata'})

	//If title and tags are set

	return (1);
}*/

exports.postSearchGroups = function (req, res, flag) {
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

	if (metadata == "")
		return flag === true ? -1 : res.status(400).send({message : 'You must set the metadata'})

	
	//If name is set

	if (!name){

		var Json_search = {}
		var newjson = {metadata: {current_page: items_page, order: order}}
	}

	//If only name is set

	else if (name){

	var Json_search = {
				"name": { "$regex": name, "$options": "i" }
			  };
	var newjson = {metadata: {current_page: items_page, order: order, name: name}}

	}

	var total_page
	var total_items
	Groups.find(Json_search,
		function (err, docs) {
			total_items = docs.length;
			total_page = Math.round(docs.length / items_number);
		if (total_page <= 0)
			total_page = 1	
		}
	)

		if (order === ""){
			Groups.find(
				Json_search
				,
				function (err, docs) {
					if (err)
						return (res.send(err));
					else if (docs.length <= 0)
						return (res.status(404).send({message : 'Nothing find for this search'}))
					else{
						newjson.metadata.total = total_items
						newjson.metadata.total_page = total_page
						newjson.groups = docs
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
			Groups.find(
				Json_search,
				function (err, docs) {
					if (err){
						return (res.send(err));
						}
					else if (docs.length <= 0){
						return (res.status(404).send({message : 'Nothing find for this search'}))}
					else{
						newjson.metadata.total = total_items
						newjson.metadata.total_page = total_page
						newjson.groups = docs
						return (res.json(newjson));
					}
				}
		).skip((items_page - 1) * items_number).sort(query).limit(items_number);
	    }
	return (1);
};