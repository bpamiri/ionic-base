"use strict";
angular.module("todo")
    .controller('TodoCreationController', ['$scope', 'Todo', '$state', function ($scope, Todo, $state) {

        $scope.todo = {
            userId: Parse.User.current().userId
        };

        $scope.create = function () {
            Todo.create({content: $scope.todo.content}).success(function (data) {
                $state.go('todos');
            });
        }
    }]);