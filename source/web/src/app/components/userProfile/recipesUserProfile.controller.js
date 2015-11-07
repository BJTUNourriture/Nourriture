/**
 * Created by sylflo on 11/7/15.
 */

(function () {

    'use strict';

    angular
        .module('NourritureControllers')
        .controller('RecipesUserProfileController', RecipesUserProfileController);

    RecipesUserProfileController.$inject = ['$scope'];

    function RecipesUserProfileController($scope) {
        var imagePath = 'http://blog.ninja-squad.com/assets/images/ng2-ebook/ng2-logo.png';

        $scope.phones = [
            {type: 'Home', number: '(555) 251-1234'},
            {type: 'Cell', number: '(555) 786-9841'},
            {type: 'Office', number: '(555) 314-1592'}
        ];
        $scope.todos = [
            {
                face: imagePath,
                what: 'Brunch this weekend?',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: " I'll be in your neighborhood doing errands"
            },
            {
                face: imagePath,
                what: 'Brunch this weekend?',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: " I'll be in your neighborhood doing errands"
            },
            {
                face: imagePath,
                what: 'Brunch this weekend?',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: " I'll be in your neighborhood doing errands"
            },
            {
                face: imagePath,
                what: 'Brunch this weekend?',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: " I'll be in your neighborhood doing errands"
            },
            {
                face: imagePath,
                what: 'Brunch this weekend?',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: " I'll be in your neighborhood doing errands"
            },
        ];
    }

})();
