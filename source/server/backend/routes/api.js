/**
 * Created by sylflo on 10/11/15.
 */

var authController = require('../oauth/controllers/auth');
var userController = require('../API/controllers/users');
var ingredientsController = require('../API/controllers/ingredients');
var recipesController = require('../API/controllers/recipes');
var express = require('express');
var router = express.Router();


/* Endpoints for User */
router.route('/users')
    .post(userController.postUsers)
    .get(authController.isAuthenticated, userController.getUsers);

module.exports = router;


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


/*
** Endpoints for Recipes
*/
router.route('/recipes')
    .post(recipesController.postRecipe);

/*
** Endpoints for Suggestions
*/

//router.route('/suggestions')
//   .get(suggestionsController.getSuggestions);


module.exports = router;