"use strict";
angular.module("core.user")
    .run(function (User) {
        User.setCurrentUser();
    });

