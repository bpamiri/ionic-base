"use strict";
angular.module("core.auth")

    .controller('LoginController', ['$scope', '$state', function ($scope, $state) {

        if (Parse.User.current()) {
            $state.go("todos");
        }

        $scope.logIn = function (form) {
            Parse.User.logIn(form.username, form.password, {
                success: function (user) {

                    $state.go("todos");
                },
                error: function (user, error) {
                    alert("Unable to log in: " + error.code + " " + error.message);
                }
            });
        };

    }]);
