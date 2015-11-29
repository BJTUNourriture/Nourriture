// oauth/controllers/clients.js

/**
* @apiDefine ClientObjectPostParam
*
* @apiParam {String} name Name of client
* @apiParam {String} id Id of the client
* @apiParam {String} secret Secret of the client
* @apiParam {String} userId User id of the client
* 
*/



/**
* @apiDefine IngredientObjectSuccess
*
* @apiSuccess {String} _id Id of the ingredient
* @apiSuccess {String} name Name of client
* @apiSuccess {String} id Id of the clien
* @apiSuccess {String} secret Secret of the client
* @apiSuccess {String} userId User id of the client
*/

/**
* @apiDefine ClientObjectSuccess
*
* @apiSuccess {String} _id Id of the ingredient
* @apiSuccess {String} name Name of client
* @apiSuccess {String} id Id of the clien
* @apiSuccess {String} secret Secret of the client
* @apiSuccess {String} userId User id of the client
*/

/**
* @apiDefine ClientRequestJSON
*
* @apiParamExample {json} Request-Example:
*     {
*       "name": "My application OAuth",
*       "id": "id_application_OAuth",
*	"secret": "My super secret key",
*       "userId": "dfdsf84984dfdsfsf84"
*     }
*/


var Client = require('../models/client');

/*
** POSTS
*/

/**p
* @api {post} /clients/ Create a new Client
* @apiName postClient
* @apiGroup OAuthClient
* @apiVersion 0.1.0
*
* @apiUse ClientObjectPostParam
*
* @apiUse ClientRequestJSON
*
* @apiSuccess message Client succesfully created!
*
* @apiSuccessExample Success-Response
*     HTTP/1.1 200 OK
*	  {
*		"message" : "Client succesfully created!"
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

exports.postClients = function (req, res) {
    var client = new Client();

    client.name = req.body.name;
    client.id = req.body.id;
    client.secret = req.body.secret;
    client.userId = req.user._id;

    client.save(function (err) {
        if (err)
            return res.status(400).send(err);

        return res.status(200).json({message: 'Client successfully created', data: client});
    });
};

/**
* @apiDefine getClientAnswer
*
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*     {
*       "name": "My application OAuth",
*       "id": "id_application_OAuth",
*	"secret": "My super secret key",
*       "userId": "dfdsf84984dfdsfsf84"
*       
*     }
*/



/**
* @api {get} /clients/ Request all the Clients of the connected user
* @apiName getAllUserClients
* @apiGroup OAuthClient
* @apiVersion 0.1.0
*
* @apiUse ClientObjectSuccess
*
* @apiUse getClientAnswer
*
* @apiError message There are no existing ingredients.
* @apiErrorExample Invalid Parameter Value
*     HTTP/1.1 404 Not Found
*     {
*       "message": "There are no existing clients."
*     }
*/
exports.getClients = function (req, res) {

    // Use the Client model to find all clients
    Client.find({userId: req.user._id}, function (err, clients) {
        if (err)
            return res.status(400).send(err);

        return res.status(200).json(clients);
    });
};
