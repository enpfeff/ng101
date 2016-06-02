/**
 * @summary Ian needs to change this
 * @module home.controller
 * @memberof Ian needs to change this
 * @since 6/2/16
 * @author Ian Pfeffer - ian.pfeffer@flukenetworks.com
 * @copyright Copyright (c) 2016 NETSCOUT
 */
'use strict';


var app = angular.module('App');

app.controller('HomeController', ['$scope', function ($scope) {
    var home = this;

    console.log('Home Controller');
    
    home.message = 'Hello All';

}]);