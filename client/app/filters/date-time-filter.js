'use strict';

angular.module('tvApp').filter('dateTime', function () {
    return function (dateTimeNumeric) {
        var date = new Date(dateTimeNumeric),

            options = {
                year: 'numeric',
                month: 'numeric',
                day: 'numeric'
            };

        date = date.toLocaleDateString("ru-RU", options);

        return date;
    };
});
