"use strict";
angular.module("todo")
    .config(function ($stateProvider) {
        $stateProvider.state('todos', {
            url: '/todos',
            controller: 'TodoListController',
            templateUrl: 'src/todo/views/todos.html'
        }).state('createTodo', {
            url: '/todo/new',
            controller: 'TodoCreationController',
            templateUrl: 'src/todo/views/create-todo.html'
        }).state('editTodo', {
            url: '/todo/edit/:id/:content',
            controller: 'TodoEditController',
            templateUrl: 'src/todo/views/edit-todo.html'
        })
    });