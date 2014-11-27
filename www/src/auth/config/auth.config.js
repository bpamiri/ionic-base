"use strict";
angular.module("core.auth")
    .config(function ($stateProvider) {
        $stateProvider.state("loginAuth", {
            url: "/auth/login",
            controller: "LoginController",
            templateUrl: "src/auth/views/login.html"
        }).state("logoutAuth", {
            url: "/auth/logout",
            controller: "LogoutController",
            templateUrl: "src/auth/views/login.html"
        }).state("signUpAuth", {
            url: "/auth/sign-up",
            controller: "SignUpController",
            templateUrl: "src/auth/views/sign-up.html"
        });
    });
