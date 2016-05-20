/**
 * @summary Ian needs to change this
 * @module logger.config
 * @memberof Ian needs to change this
 * @since 5/20/16
 * @author Ian Pfeffer - ian.pfeffer@flukenetworks.com
 * @copyright Copyright (c) 2016 NETSCOUT
 */
'use strict';
  
var app = angular.module('App');

app.config(['LoggerProvider', function (LoggerProvider) {
    LoggerProvider.setPrefix('Hello ');
}]);
        