'use strict';

angular.module('tvApp').directive('onEnter', function () {
    var enter = 13;

    return function (scope, element, attrs) {
        element.bind('keydown keypress', function (event) {

            if (event.which !== enter) {
                return;
            }

            scope.$apply(function (){
                scope.$eval(attrs.onEnter);
            });

            event.preventDefault();
        });
    };
});