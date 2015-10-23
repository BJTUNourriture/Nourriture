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
*
*/
