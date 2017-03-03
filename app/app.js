'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('eatNlike', ['ngRoute']);
app.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  //$locationProvider.hashPrefix('!');

  $routeProvider.when('/home', {
      templateUrl: 'views/page.html',
      controller: 'homeCtrl'
  });

  $routeProvider.when('/about', {
      templateUrl: 'views/page.html',
      controller: 'aboutCtrl'
  });

  $routeProvider.otherwise({redirectTo: '/home'});

  $locationProvider.html5Mode(true);

}]);
