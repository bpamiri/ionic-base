"use strict";
angular.module("todo")
    .controller('TodoListController', ['$scope', 'Todo', function ($scope, Todo) {

        Todo.getAll({userId: Parse.User.current().userId}).success(function (data) {
            $scope.items = data.results;
        });

        $scope.onItemDelete = function (item) {
            Todo.delete(item.objectId);
            $scope.items.splice($scope.items.indexOf(item), 1);
        }

    }]);