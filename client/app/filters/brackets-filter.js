'use strict';

angular.module('tvApp').filter('brackets', function () {
    return function (str) {
       return '(' + str + ')';
    };
});
