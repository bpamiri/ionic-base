"use strict";
angular.module("core.auth")
    .controller("SignUpController", ['$scope', '$state', function ($scope, $state) {

        if (Parse.User.current()) {
            $state.go("todos");
        }

        $scope.signUp = function (form) {
            var user = new Parse.User();
            user.set("email", form.email);
            user.set("username", form.username);
            user.set("password", form.password);

            user.signUp(null, {
                success: function (user) {

                    $state.go("todos");

                },
                error: function (user, error) {
                    alert("Unable to sign up:  " + error.code + " " + error.message);
                }
            });
        };

    }]);
