"use strict";
angular.module("core.auth")
    .controller("LogoutController", ['$scope', '$locations', 'User',function ($scope, $location, User) {

        $scope.logOut = function (form) {
            Parse.User.logOut();
            User.currentUser = null;
            $location.path("/user/login")
        };
    }]);