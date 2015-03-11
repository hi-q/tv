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

        $scope.messages = [
            {
                id: 1,
                from: {
                    id: 1,
                    name: 'Снежная звезда',
                    avatarUrl: 'assets/images/avatars/1.png'
                },
                text: 'Ура!',
                dateTime: 1426047428773,
                isRead: false
            },
            {
                id: 2,
                from: {
                    id: 2,
                    name: 'Елена Бурякова',
                    avatarUrl: 'assets/images/avatars/2.png'
                },
                text: 'позвони поговорим',
                dateTime: 1425047428673,
                isRead: false
            },
            {
                id: 3,
                from: {
                    id: 3,
                    name: 'Светлана Бергер',
                    avatarUrl: 'assets/images/avatars/3.png'
                },
                text: 'нашел?',
                dateTime: 1416046428373,
                isRead: false
            }
        ];

    });
