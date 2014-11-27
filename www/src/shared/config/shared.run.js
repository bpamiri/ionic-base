"use strict";
angular.module("core.shared")
    .run(function ($ionicPlatform, $state) {
        $ionicPlatform.ready(function () {

            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {

                StatusBar.overlaysWebView(true);
            }
            $state.go('signUpAuth');
        });
    });
