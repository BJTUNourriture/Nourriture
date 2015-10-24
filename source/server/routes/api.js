/**
 * Created by sylflo on 10/11/15.
 */

var authController = require('../oauth/controllers/auth');
var userController = require('../API/controllers/users');
var ingredientsController = require('../API/controllers/ingredients');
var typesController = require('../API/controllers/types');
var groupsController = require('../API/controllers/groups');
var recipesController = require('../API/controllers/recipes');
var allergiesController = require('../API/controllers/allergies');
var jwt = require('jsonwebtoken')
var passport = require('passport');
var searchController = require('../API/controllers/search');
var express = require('express');
var expressJwt = require('express-jwt');
var router = express.Router();
var User = require('../API/models/users');


//verify the jwt
var verifyJwt = expressJwt({
    secret: '18B63D7DDDD8C614227C8F31D8A25DEB92F249C391267DF9A28A5ACC00458837',
    getToken: function fromHeaderOrQuerystring(req) {
        console.log("getToken!!!!", req.headers.authorization.split(' ')[1]);
        if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Topkek')
            return req.headers.authorization.split(' ')[1];
        if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Toplel') {
            console.log("TESTTTTTTT", req.headers.authorization.split(' ')[1]);
            var decoded = jwt.verify(req.headers.authorization.split(' ')[1], 'jwtSecret');
            User.findOne({_id: decoded.client.userId}, function (err, user) {
                if (err) {

                    return callback(err);
                }

                // No user found
                if (!user) {
                    //return callback(null, false);
                    return false;
                }

                console.log("User == ", user);

                //callback(null, user, {scope: '*'})
            });
            //console.log("test = ", req.headers.authorization.split(' ')[1]);
            //return true;
        }
        return null;
    }
});


/* Endpoints for User */

router.route('/users/sign-in')
    .post(userController.signinUser);

router.route('/users')
    .get(/*authController.isAuthenticated,*/ verifyJwt, userController.getUsers);

router.route('/users/register')
    .post(userController.postUser);


// add for oAuth
//   .get(authController.isAuthenticated, userController.getUsers);

/*
 ** Endpoints for Ingredients
 */
//full JSON endpoints
router.route('/ingredients')
    .post(ingredientsController.postIngredient)
    .delete(ingredientsController.deleteIngredients)
    .get(verifyJwt, ingredientsController.getAllIngredients);

//endpoints by id
router.route('/ingredients/id/:id')
    .delete(ingredientsController.deleteIngredientById)
    .put(ingredientsController.putIngredientById)
    .get(ingredientsController.getIngredientById);

//endpoints by name
router.route('/ingredients/name/:name')
    .delete(ingredientsController.deleteIngredientByName)
    .put(ingredientsController.putIngredientByName)
    .get(ingredientsController.getIngredientsByName);

/*
 ** Endpoints for Types
 */
//full JSON endpoints
router.route('/types')
    .post(typesController.postType)
    .delete(typesController.deleteTypes)
    .get(typesController.getAllTypes);

//endpoints by id
router.route('/types/id/:id')
    .delete(typesController.deleteTypeById)
    .get(typesController.getTypeById);

//endpoints by name
router.route('/types/name/:name')
    .delete(typesController.deleteTypeByName)
    .get(typesController.getTypesByName);

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
    .put(groupsController.putGroupByName)
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
 ** Endpoints for Search
 */


router.route('/search/ingredients/')
    .post(searchController.postSearchIngredients);


/*
 ** Endpoints for Suggestions
 */

//router.route('/suggestions')
//   .get(suggestionsController.getSuggestions);


module.exports = router;
