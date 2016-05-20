/**
 * @summary Ian needs to change this
 * @module todos.resource
 * @memberof Ian needs to change this
 * @since 5/20/16
 * @author Ian Pfeffer - ian.pfeffer@flukenetworks.com
 * @copyright Copyright (c) 2016 NETSCOUT
 */
'use strict';

var app = angular.module('App');

app.factory('Todos', function ($resource) {
    return $resource('/todos/:id', {}, {}, {});
});