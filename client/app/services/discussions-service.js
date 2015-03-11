'use strict';

angular.module('tvApp').factory('discussionsCache', [
    '$cacheFactory',
    function ($cacheFactory) {
        var cache = $cacheFactory('discussions');

        return cache;
    }
]);


angular.module('tvApp').factory('discussions', [
    '$resource',
    'discussionsCache',
    function ($resource, discussionsCache) {

        var discussions = $resource(
            'assets/data/discussions.json',
            {
                id: '@id'
            },
            {
                query: {
                    isArray: false
                }
            }
        );

        var originalQuery = discussions.query;
        discussions.query = function (id, success) {
            var cachedDiscussions = discussionsCache.get(id);

            if (!!cachedDiscussions) {
                success(cachedDiscussions);
                return;
            }

            originalQuery(id, function (data) {
                success(data[id] || []);
            });
        };

        discussions.add = function (discussion, programId, discussions, replyingTo) {
            angular.extend(discussion, {
                id: generateId(discussions),
                dateTime: new Date().valueOf()
            });

            switch (!!replyingTo) {
                case true:
                    replyingTo.replies = replyingTo.replies || [];
                    discussion.id = generateId(replyingTo.replies);
                    replyingTo.replies.push(discussion);
                    break;
                default:
                    discussions.push(discussion);
            }

            discussionsCache.put(programId, discussions);
        };

        function generateId(discussions) {
            // these are expected to be generated on server side
            var lastDiscussion = discussions[discussions.length - 1] || { id: 0 };
            var id = lastDiscussion.id + 1;
            return id;
        }

        return discussions;
    }
]);
