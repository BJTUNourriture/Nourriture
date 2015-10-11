/**
 * Created by sylflo on 10/11/15.
 */

var ingredientsController = require('../API/controllers/ingredients');
var express = require('express');
var router = express.Router();

/*
 ** Endpoints for Ingredients
 */
//full JSON endpoints
router.route('/ingredients')
    .post(ingredientsController.postIngredient)
    .delete(ingredientsController.deleteIngredients)
    .get(ingredientsController.getAllIngredients);

//endpoints by id
router.route('/ingredients/id/:id')
    .delete(ingredientsController.deleteIngredientById)
    .put(ingredientsController.putIngredientById)
    .get(ingredientsController.getIngredientById);

//endpoints by name
router.route('/ingredients/name/:name')
    .delete(ingredientsController.deleteIngredientByName)
    .get(ingredientsController.getIngredientsByName);


module.exports = router;