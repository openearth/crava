'use strict';

/**
 * @ngdoc overview
 * @name cravaApp
 * @description
 * # cravaApp
 *
 * Main module of the application.
 */
angular
    .module('cravaApp', [
        'ngAnimate',
        'ngCookies',
        'ngMessages',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ui.bootstrap',
        'angularFileUpload'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .when('/survey', {
                templateUrl: 'views/survey.html',
                controller: 'MainCtrl'
            })
            .when('/wavelet', {
                templateUrl: 'views/wavelet.html',
                controller: 'MainCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });