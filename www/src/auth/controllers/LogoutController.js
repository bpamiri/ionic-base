"use strict";
angular.module("core.auth")
    .controller("LogoutController", ['$scope', '$locations',function ($scope, $location) {

        $scope.logOut = function (form) {
            Parse.User.logOut();
            $location.path("/user/login")
        };
    }]);