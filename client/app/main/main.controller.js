'use strict';

angular.module('tvApp')
    .controller('MainCtrl', function ($scope, $http, channels, programs) {

        $scope.messagebox = {
            isOpened: false
        };

        $scope.discuss = function (program) {
            $scope.discussingProgram = program;
        };

        $scope.addComment = function (comment) {
            $scope.discussingProgram = null;
            $scope.comment = null;
        };

        channels.query(function (channelsList) {
            var channel = channelsList[0],
                channelId = channel.id;

            $scope.channel = channel;

            programs.get(function (programsList) {
                var program = programsList[channelId],
                    currentDateProgram = program[0];

                $scope.currentDateProgram = currentDateProgram;

            });
        });

        $scope.user = {
            name: 'Вася Пупкин',
            login: 'poupqine'
        };

    });
