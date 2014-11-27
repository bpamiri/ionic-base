"use strict";
angular.module("core.user")

    .service("User", function () {


        this.currentUser = null;

        this.setCurrentUser = function () {

            this.currentUser = window.localStorage.currentUser || null;
        };

        this.unsetCurrentUser = function () {

            delete window.localStorage.currentUser;
            delete this.currentUser;
        };


    });