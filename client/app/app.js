'use strict';

angular.module('tvApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  })
  .run(function ($rootScope, i18n) {

      i18n.get(function (localization) {

        $rootScope.i18n = function (key) {
          return localization[key] || key;
        };

      });

  });