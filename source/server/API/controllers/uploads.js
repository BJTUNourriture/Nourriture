// API/controllers/uploads.js

var multer = require('multer');
var recipe_thumbnail_photo_upload = multer({dest : '../web/src/assets/recipes/'}).single('recipe_thumbnail_picture');

exports.postRecipeThumbnailUrl = function(req, res) {
	recipe_thumbnail_photo_upload(req, res, function(err) {
		if (err)
			return (res.status(400).send(err));
		return (res.json({message: 'File Successfully Uploaded!'}));
	})
}

