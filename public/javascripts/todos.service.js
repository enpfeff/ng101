/**
 * @summary Ian needs to change this
 * @module todos.service
 * @memberof Ian needs to change this
 * @since 5/20/16
 * @author Ian Pfeffer - ian.pfeffer@flukenetworks.com
 * @copyright Copyright (c) 2016 NETSCOUT
 */
'use strict';
         
var app = angular.module('App');

app.factory('TodosService', function ($http, Todos) {

    console.log('Factory');

    return {
        getTodos: getTodos
    };

    function getTodos() {
        return Todos.get({id: '1234'}).$promise;
    }
});