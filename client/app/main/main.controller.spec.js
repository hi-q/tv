'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('tvApp'));

  var MainCtrl,
      scope;

  beforeEach(module(function($provide) {
    $provide.factory('i18n', function () {
      function i18n() { }

      i18n.get = function () {
        return {};
      };

      return i18n;
    });
  }));

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {



    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope,
      channels: {
        query: function() {
          return [
            {
              'id': 1,
              'name': 'Новый канал',
              'description': 'Новый канал открыт Василием Пупкиным в 1999 году.',
              'logoUrl': 'assets/images/channels/new-channel/logo.jpeg',
              'bannerUrl': 'assets/images/channels/new-channel/banner.jpeg'
            }
          ];
        }
      }
    });
  }));

  it('should attach a list of messages to the scope', function () {
    expect(scope.messages.length).toBe(3);
  });
});
