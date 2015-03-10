'use strict';

angular.module('tvApp').factory('programs', [
    '$resource',
    function ($resource) {

        return $resource(
            'assets/data/programs.json'
        );
    }
]);
