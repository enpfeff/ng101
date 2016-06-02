/**
 * @summary Ian needs to change this
 * @module router.config
 * @memberof Ian needs to change this
 * @since 6/2/16
 * @author Ian Pfeffer - ian.pfeffer@flukenetworks.com
 * @copyright Copyright (c) 2016 NETSCOUT
 */
'use strict';

var app = angular.module('App');

app.config(['$timeout', '$urlRouterProvider', '$stateProvider', function ($timeout, $urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '',
            abstract: true,
            template: '<div ui-view></div>',
            controller: 'HomeController as home',
            resolve: {
                key: function ($timeout) {
                    console.log('reolved entered');
                    return $timeout(function () {
                        console.log('Timeout reached');
                    }, 3000);
                }
            }
        })

        .state('concrete', {
            parent: 'home',
            url: '/home',
            templateUrl: '/templates/home.html',
            controller: 'ConcreteController as concrete'
        })

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            url: '/about',
            templateUrl: '/templates/about.html'
        });
}]);