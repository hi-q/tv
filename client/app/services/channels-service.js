'use strict';

angular.module('tvApp').factory('channels', [
    '$resource',
    function ($resource) {

        return $resource(
            'assets/data/channels.json'
        );
    }
]);
