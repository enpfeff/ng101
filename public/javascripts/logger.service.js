/**
 * @summary Ian needs to change this
 * @module logger.service
 * @memberof Ian needs to change this
 * @since 5/20/16
 * @author Ian Pfeffer - ian.pfeffer@flukenetworks.com
 * @copyright Copyright (c) 2016 NETSCOUT
 */
'use strict';

var app = angular.module('App');

app.provider('Logger', function () {
    var thePrefix = '';


    this.setPrefix = function (prefix) {
        thePrefix = prefix;
    };

    this.$get = [function () {
        return {
            println: println
        };

        function println(msg) {
            console.log(thePrefix + msg);
        }
    }]
});
        