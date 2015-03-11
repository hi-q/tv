'use strict';

angular.module('tvApp')
    .controller('MainCtrl', function ($scope, $timeout, channels, programs, discussions) {

        $scope.messagebox = {
            isOpened: false
        };

        $scope.discuss = function (program) {
            $scope.discussingProgram = program;
            setCommenting();
        };

        $scope.addComment = function (comment) {
            var newComment = {
                from: $scope.user,
                text: comment.text
            };

            var programId = $scope.discussingProgram.id;

            discussions.add(newComment, programId, $scope.discussions, $scope.replyingTo);
            $scope.comment = null;
            $scope.replyingTo = null;
        };

        $scope.reply = function (discussionToReplyTo) {
            $scope.discuss($scope.discussingProgram);
            $scope.replyingTo = discussionToReplyTo;
        };

        channels.query(function (channelsList) {
            var channel = channelsList[0],
                channelId = channel.id;

            $scope.channel = channel;

            programs.get(function (programsList) {
                var program = programsList[channelId],
                    currentDateProgram = program[0];

                $scope.currentDateProgram = currentDateProgram;
                var currentPrograms = currentDateProgram.programs;

                $scope.discuss(currentPrograms[0]);

            });
        });

        $scope.$watch('discussingProgram', function (discussingProgram) {

           if (!discussingProgram) {
               return;
           }

            discussions.query(discussingProgram.id, function (discussionsList) {
                $scope.discussions = discussionsList;
            });
        });

        $scope.user = {
            id: 4,
            name: 'Вася Пупкин',
            login: 'poupqine',
            avatarUrl: 'assets/images/avatars/4.png'
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

        function setCommenting() {
            $scope.isCommenting = true;
            $timeout(function () {
                $scope.isCommenting = false;
            }, 500);
        }
    });
