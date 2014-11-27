"use strict";
angular.module("core.auth")
    .controller("SignUpController", ['$scope', '$location', 'User', function ($scope, $location, User) {


        console.log(User.currentUser, "hello");
        if (User.currentUser) {
            $location.path("/todos");
        }

        User.currentUser = Parse.User.current();

        $scope.signUp = function (form) {
            var user = new Parse.User();
            user.set("email", form.email);
            user.set("username", form.username);
            user.set("password", form.password);

            user.signUp(null, {
                success: function (user) {
                    $scope.currentUser = user;

                    $location.path("/");

                },
                error: function (user, error) {
                    alert("Unable to sign up:  " + error.code + " " + error.message);
                }
            });
        };

    }]);