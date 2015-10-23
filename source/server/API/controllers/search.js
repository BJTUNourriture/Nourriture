// API/controllers/search.js

/**
* @apiDefine SearchObjectPostParam
*
* @apiParam {String} name Name of the ingredient (Regex)
* @apiParam {Object[]} [order] Order of the return of the search
* @apiParam {Object[]} metadata Number of items to return, page of the items
*/

/**
* @apiDefine SearchRequestJSON
*
* @apiParamExample {json} Request-Example:
*     {
*       "name": "Toma",
*	"order": [{ "field": "fat",
*		     "order": "desc" }],
*	"metadata": [{ "items": "4",
*			"page": "2"}]
*     }
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
	var order = req.body.order;
	var order_order = req.body.order.order;
	var order_field = req.body.order.field;
	var items_number = req.body.metadata.items;
	var items_page = req.body.metadata.page;
	var query = {};
	query[order_field] = order_order;
	if (!name)
		return flag === true ? -1 : res.json(400, {message : 'The name musn\'t be null'})
	if (!items_number || !items_page)
		return flag === true ? -1 : res.json(400, {message : 'You must set the metadata'})
	if (!order)
		Ingredients.find({
			"name": { "$regex": name, "$options": "i" } 
			},
			function (err, docs) {
				if (err)
					return (res.send(err));
				else if (docs.length <= 0)
					return (res.json(404, {message : 'Nothing find for this search'}))
				return (res.json(docs));
			} 
	).skip((items_page - 1) * items_number).limit(items_number);
	if (order)
		if (order_order == 'desc')
			order_order = -1
		else
			order_order = 1
		if (!order_field)
			return flag === true ? -1 : res.json(400, {message : 'The order field must be set'})
		Ingredients.find({
			"name": { "$regex": name, "$options": "i" }
			},
			function (err, docs) {
				if (err)
					return (res.send(err));
				else if (docs.length <= 0)
					return (res.json(404, {message : 'Nothing find for this search'}))
				return (res.json(docs));
			}
	).skip((items_page - 1) * items_number).sort(query).limit(items_number);
	return (1);
};
