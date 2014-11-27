"use strict";
angular.module("core.auth")
    .controller("LogoutController", ['$scope','$state',function ($scope, $state) {

        $scope.logOut = function (form) {
            Parse.User.logOut();
            $state.go("loginAuth");
        };
    }]);