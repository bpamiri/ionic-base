"use strict";
angular.module("core.shared")
    .run(function ($ionicPlatform, $state, User) {
        $ionicPlatform.ready(function () {

            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {

                StatusBar.overlaysWebView(true);
            }
            User.setCurrentUser();


            if(User.currentUser){
                $state.go('todos');
            }else{
                $state.go('signUpAuth');
            }

        });
    });
