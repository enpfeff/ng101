/**
 * @summary Ian needs to change this
 * @module myName.directive
 * @memberof Ian needs to change this
 * @since 5/20/16
 * @author Ian Pfeffer - ian.pfeffer@flukenetworks.com
 * @copyright Copyright (c) 2016 NETSCOUT
 */
'use strict';

var app = angular.module('App');

app.directive('myName', [function () {
    return {
        scope: {
            surName: '=name'
        },
        template: '<button ng-click="click($event)">Hello</button>',
        restrict: 'E',
        controller: ['$scope', function ($scope) {

            console.log('controller');

            $scope.click = click;

            function click(event) {
                console.log(event);
            }
        }],
        link: function (scope, element, attr) {
            console.log(element);
        },
        replace: true
    }
}]);