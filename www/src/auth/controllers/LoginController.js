"use strict";
angular.module("core.auth")

    .controller('LoginController', ['$scope', '$location', function ($scope, $location) {


        $scope.logIn = function (form) {
            Parse.User.logIn(form.username, form.password, {
                success: function (user) {

                    $location.path("/todos");
                },
                error: function (user, error) {
                    alert("Unable to log in: " + error.code + " " + error.message);
                }
            });
        };

    }]);
