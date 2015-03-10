'use strict';

angular.module('tvApp').factory('i18n', [
    '$resource',
    function ($resource) {

        return $resource(
            'assets/data/i18n.json'
        );
    }
]);
