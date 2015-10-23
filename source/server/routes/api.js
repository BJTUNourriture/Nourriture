/**
 * Created by sylflo on 10/11/15.
 */

var authController = require('../oauth/controllers/auth');
var userController = require('../API/controllers/users');
var ingredientsController = require('../API/controllers/ingredients');
var groupsController = require('../API/controllers/groups');
var recipesController = require('../API/controllers/recipes');
var allergiesController = require('../API/controllers/allergies');
var passport = require('passport');
var express = require('express');
var router = express.Router();

/* Endpoints for connect with Social Network */
router.route('/auth/google')
    .get(passport.authenticate('google', {
            scope: ['https://www.googleapis.com/auth/plus.login',
                , 'https://www.googleapis.com/auth/plus.profile.emails.read']
        }
    ));

router.route('/auth/google/callback')
    .get(passport.authenticate('google', {
        successRedirect: 'http://127.0.0.1:8101/',
        failureRedirect: 'api/auth/google/failure'
    }));


/* Endpoints for User */
router.route('/users')
    .get(authController.isAuthenticated, userController.getUsers);

router.route('/users/register')
    .post(userController.postUser);

router.route('/users/sign-in')
    .post(userController.signinUser);

// add for oAuth
//   .get(authController.isAuthenticated, userController.getUsers);


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
 ** Endpoints for Groups
 */
//full JSON endpoints
router.route('/groups')
    .post(groupsController.postGroup)
    .delete(groupsController.deleteGroups)
    .get(groupsController.getAllGroups);

//endpoints by id
router.route('/groups/id/:id')
    .delete(groupsController.deleteGroupById)
    .put(groupsController.putGroupById)
    .get(groupsController.getGroupById);

//endpoints by name
router.route('/groups/name/:name')
    .delete(groupsController.deleteGroupByName)
    .get(groupsController.getGroupByName);


/*
** Endpoints for Recipes
*/

router.route('/recipes')
    .post(recipesController.postRecipe)
    .delete(recipesController.deleteRecipes)
    .get(recipesController.getAllRecipes);

router.route('/recipes/id/:id')
    .put(recipesController.putRecipeById)
    .delete(recipesController.deleteRecipeById)
    .get(recipesController.getRecipeById);

router.route('/recipes/title/:title')
    .put(recipesController.putRecipeByTitle)
    .delete(recipesController.deleteRecipeByTitle)
    .get(recipesController.getRecipeByTitle);

/*
** Endpoints for Allergies
*/
/*
// full JSON endpoints
router.route('/allergies')
    .post(allergiesController.postAllergy)
    .delete(allergiesController.deleteAllergies)
    .get(allergiesController.getAllAllergies)

// endpoints by id
router.route('/allergies/id/:id')
    .put(allergiesController.putAllergyById)
    .delete(allergiesController.deleteAllergyById)
    .get(allergiesController.getAllergyById)

// endpoints by name
router.rout('/allergies/name/:name')
    .put(allergiesController.putAllergyByName)
    .delete(allergiesController.deleteAllergyByName)
    .get(allergiesController.getAllergyByName)
*/

/*
** Endpoints for Suggestions
*/

//router.route('/suggestions')
//   .get(suggestionsController.getSuggestions);


module.exports = router;
