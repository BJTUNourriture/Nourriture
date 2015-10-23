// API/controllers/search.js

/**
* @apiDefine SearchObjectPostParam
*
* @apiParam {String} [name] Name of the ingredient (Regex)
* @apiParam {Object[]} [order] Order of the return of the search
* @apiParam {Object[]} [metadata] Number of items to return, page of the items
*/

/**
* @apiDefine SearchRequestJSON
*
* @apiParamExample {json} Request-Example:
*     {
*       "name": "Toma",
*	"order": [{ "field": "calories",
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
* @apiSuccess message Search succesfully return!
*
*/
