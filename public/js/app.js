'use strict';

// Declare app level module which depends on filters, and services

angular.module('myApp', [
  'myApp.controllers',
  'myApp.filters',
  'myApp.services',
  'myApp.directives'
]).
config(function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/view1', {
      templateUrl: 'partials/partial1',
      controller: 'MyCtrl1'
    }).
    when('/view2', {
      templateUrl: 'partials/partial2',
      controller: 'MyCtrl2'
    }).
    when('/register', {
      templateUrl: 'partials/register',
      controller: 'RegisterController'
    }).
    when('/login', {
      templateUrl: 'partials/login',
      controller: 'LoginController'
    }).
    when('/index', {
      templateUrl: 'partials/index',
      controller: 'IndexController'
    }).
    when('/information', {
      templateUrl: 'partials/information',
      controller: 'InformationController'
    }).
    otherwise({
      redirectTo: '/view1'
    });

  $locationProvider.html5Mode(true);

  console.log($('.menu'));
});
