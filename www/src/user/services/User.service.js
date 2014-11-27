"use strict";
angular.module("core.user")
    .service("User", [function () {
        this.currentUser = null;
    }]);