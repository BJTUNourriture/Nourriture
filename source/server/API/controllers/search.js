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
	var items_number = req.body.metadata.items;
	var items_page = req.body.metadata.page;
	var tag_list = req.body.tags;

	//If name and tags are not set

	if (!name && !tag_list)
		return flag === true ? -1 : res.status(400).send({message : 'You must at least set a name or a tag to search'})

	if (!items_number || !items_page)
		return flag === true ? -1 : res.status(400).send({message : 'You must set the metadata'})

	//If name and tags are set

	if (name && tag_list){

	//Get nbr_page_max
		var total_page
			Ingredients.find({
			"name": { "$regex": name, "$options": "i" },
			"tags.name": { $all: tag_list}
			},
			function (err, docs) {
					total_page = docs.length;				
				}
			)

		if (order === ""){
			Ingredients.find({
				"name": { "$regex": name, "$options": "i" },
				"tags.name": { $all: tag_list}
				},
				function (err, docs) {
					if (err)
						return (res.send(err));
					else if (docs.length <= 0)
						return (res.status(404).send({message : 'Nothing find for this search'}))
					return (res.json(docs));
				} 
		).skip((items_page - 1) * items_number).limit(items_number);
		}
		else if (order != ""){
			if (order_order == 'desc')
				order_order = -1
			else
				order_order = 1
			if (!order_field)
				return flag === true ? -1 : res.status(404).send({message : 'The order.field must be set'})
			Ingredients.find({
				"name": { "$regex": name, "$options": "i" },
				"tags.name": { $all: tag_list}
				},
				function (err, docs) {
					if (err)
						return (res.send(err));
					else if (docs.length <= 0)
						return (res.status(404).send({message : 'Nothing find for this search'}))
					else
						return (res.json(docs));
				}
		).skip((items_page - 1) * items_number).sort(query).limit(items_number);
	    }
	}
	
	//If only name is set

	else if (name && !tag_list){

	//Get nbr_page_max
		var total_page
			Ingredients.find({
			"name": { "$regex": name, "$options": "i" }
			},
			function (err, docs) {
					total_page = Math.round(docs.length / items_number);				
				}
			)


		if (order === ""){
			Ingredients.find({
				"name": { "$regex": name, "$options": "i" }
				},
				function (err, docs) {
					if (err)
						return (res.send(err));
					else if (docs.length <= 0)
						return (res.status(404).send({message : 'Nothing find for this search'}))
					return (res.json(docs));
				} 
		).skip((items_page - 1) * items_number).limit(items_number);
		}
		else if (order != ""){
			if (order_order == 'desc')
				order_order = -1
			else
				order_order = 1
			if (!order_field)
				return flag === true ? -1 : res.status(404).send({message : 'The order.field must be set'})	
	
			Ingredients.find({
				"name": { "$regex": name, "$options": "i" }
				},
				function (err, docs) {
					if (err)
						return (res.send(err));
					else if (docs.length <= 0)
						return (res.status(404).send({message : 'Nothing find for this search'}))
					else{
						var newjson = ""
						newjson = {metadata: total_page ,ingredients: docs}
						return (res.json(newjson));
					}
				}
		).skip((items_page - 1) * items_number).sort(query).limit(items_number);
	    }
	}

	//If only tags is set

	else if (!name && tag_list){


	//Get nbr_page_max
		var total_page
			Ingredients.find({
			"tags.name": { $all: tag_list}
			},
			function (err, docs) {
					total_page = docs.length;				
				}
			)

		if (order === ""){
			Ingredients.find({
				"tags.name": { $all: tag_list}
				},
				function (err, docs) {
					if (err)
						return (res.send(err));
					else if (docs.length <= 0)
						return (res.status(404).send({message : 'Nothing find for this search'}))
					return (res.json(docs));
				} 
		).skip((items_page - 1) * items_number).limit(items_number);
		}
		else if (order != ""){
			if (order_order == 'desc')
				order_order = -1
			else
				order_order = 1
			if (!order_field)
				return flag === true ? -1 : res.status(404).send({message : 'The order.field must be set'})
			Ingredients.find({
				"tags.name": { $all: tag_list}
				},
				function (err, docs) {
					if (err)
						return (res.send(err));
					else if (docs.length <= 0)
						return (res.status(404).send({message : 'Nothing find for this search'}))
					else
						return (res.json(docs));
				}
		).skip((items_page - 1) * items_number).sort(query).limit(items_number);
	    }
	}

	return (1);
	
};
