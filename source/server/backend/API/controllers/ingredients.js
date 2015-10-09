// API/controllers/ingredients.js

var Ingredients = require('../models/ingredients');

exports.postIngredient = function (req, res) {
	console.log(req);

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
        	return (res.send(err));

        return (res.json({message: 'Ingredient succesfully created!'}));
    });
};

exports.deleteIngredients = function (req, res) {
	var i = -1;
	var callbackReturn = -1;
	var functionPointer = [module.exports.deleteIngredientById(req, res, true)];
	var usage = "No correct argument given. Specify an id or a name";

	while ((callbackReturn = functionPointer[++i]) == -1
		&& i < functionPointer.length - 1);
	return callbackReturn == -1 ? res.json({message : usage}) : callbackReturn;

};

exports.deleteIngredientById = function (req, res, flag) {
	var id = flag ? req.body.id : req.params.id;
		if (!id)
			return flag ? (-1) : res.json({message : 'The id musn\'t be null'});
	Ingredients.remove({
		_id : id
		},
		function (err, ingredient) {
			if (err)
				return (res.send(err));
			return (res.json({message : 'Ingredient succesfully deleted!'}));
		}
	);
	return (1);
};