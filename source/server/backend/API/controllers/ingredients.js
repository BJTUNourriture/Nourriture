// API/controllers/ingredients.js

var Ingredients = require('../models/ingredients');

exports.postIngredient = function (req, res) {
	//binds the new ingredient
	var ingredient = new Ingredients({
		name : req.body.name,
		description : req.body.description,
		fat : req.body.fat,
		carbohydrates : req.body.carbohydrates,
		proteins : req.body.proteins,
		tags : req.body.tags
	});

	//saves the ingredient to the db
	 ingredient.save(function (err) {
        if (err)
        	res.send(err);

        res.json({message: 'Ingredient succesfully created!'});
    });
};