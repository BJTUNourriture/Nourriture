// API/controllers/uploads.js

var path = require('path');
var multer = require('multer');
var recipe_thumbnail_photo_storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../web/src/assets/recipes/thumbnail_pics')
  },
  filename: function (req, file, cb) {
    cb(null,  Date.now() + '-' + file.fieldname + path.extname(file.originalname))
  }
});
var recipe_thumbnail_photo_upload = multer({ storage : recipe_thumbnail_photo_storage}).single('recipe_thumbnail_picture');


/*
** POSTS
*/

/**
* @api {post} /upload/recipes/photo/thumbnail Upload a recipe thumbnail picture
* @apiName postRecipeThumbnailUrl
* @apiGroup Uploads
* @apiVersion 0.1.0
*
* @apiParam {Object[]} recipe_thumbnail_picture Chunks of the picture
*
* @apiParamExample {json} Request-Example:
*     {
*       "recipe_thumbnail_picture": Object
*     }
*
* @apiSuccess message File Successfully Uploaded!
*
* @apiSuccessExample Success-Response
*     HTTP/1.1 200 OK
*	  {
*		"message" : "File Successfully Uploaded!"
*	  }
*
* @apiErrorExample Bad Value Definition
*	  HTTP/1.1 401 BAD REQUEST
*	  {
*		...
*		custom error
*		...
*	  }
*
*/
exports.postRecipeThumbnailUrl = function(req, res) {
	recipe_thumbnail_photo_upload(req, res, function(err) {
		if (err)
			return (res.status(400).send(err));
		return (res.json({message: 'File Successfully Uploaded!'}));
	})
}

