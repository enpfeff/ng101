/**
 * @summary Ian needs to change this
 * @module controllers
 * @memberof Ian needs to change this
 * @since 5/20/16
 * @author Ian Pfeffer - ian.pfeffer@flukenetworks.com
 * @copyright Copyright (c) 2016 NETSCOUT
 */
'use strict';

var app = angular.module('App');

app
    .controller('MainController', function ($scope, TodosService) {

        console.log('Contorller')

        $scope.name = 'Kevin';
        $scope.todos = [];

        TodosService.getTodos()
            .then(assignTodos);


        function assignTodos(resources) {
            return $scope.todos = resources.todos;
        }
    });