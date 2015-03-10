'use strict';

angular.module('tvApp').directive('focuseOn', function() {
    return {
        restrict: 'A',
        scope: {
            focuseOn: '=focuseOn'
        },
        link: function($scope, $element) {
            $scope.$watch('focuseOn', function(currentValue, previousValue) {
                if (currentValue === true && !previousValue) {
                    $element[0].focus();
                } else if (currentValue === false && previousValue) {
                    $element[0].blur();
                }
            });
        }
    }
});