'use strict';

angular.module('tvApp').directive('focusOn', function() {
    return {
        restrict: 'A',
        scope: {
            focusOn: '=focusOn'
        },
        link: function($scope, $element) {
            $scope.$watch('focusOn', function(currentValue, previousValue) {
                if (currentValue === true && !previousValue) {
                    $element[0].focus();
                    $('html, body').animate({
                        scrollTop: $element.offset().top
                    }, 500);
                } else if (currentValue === false && previousValue) {
                    $element[0].blur();
                }
            });
        }
    }
});