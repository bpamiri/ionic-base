"use strict";
angular.module("core.auth")

    .controller('LoginController', ['$scope', '$location', 'User', function ($scope, $location, User) {

        console.log(User.currentUser, "hello");
        if(User.currentUser){
            $location.path("/todos");
        }
        User.currentUser = Parse.User.current();

        $scope.logIn = function (form) {
            Parse.User.logIn(form.username, form.password, {
                success: function (user) {
                    User.currentUser = user;
                    $location.path("/todos");
                },
                error: function (user, error) {
                    alert("Unable to log in: " + error.code + " " + error.message);
                }
            });
        };

    }]);