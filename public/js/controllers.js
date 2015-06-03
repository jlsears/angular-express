'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('AppCtrl', function ($scope, $http) {

    $http({
      method: 'GET',
      url: '/api/name'
    }).
    success(function (data, status, headers, config) {
      $scope.name = data.name;
    }).
    error(function (data, status, headers, config) {
      $scope.name = 'Error!';
    });

  }).
  controller('MyCtrl1', function ($scope) {
    // write Ctrl here

  }).
  controller('RegisterController', function ($scope) {
    $scope.words = "You can register here if you like";

  }).
  controller('LoginController', function ($scope) {
    $scope.words = "Login here to be so super organized";

  }).
  controller('IndexController', function ($scope) {
    $scope.words = "Login here to do the things";

  }).
  controller('InformationController', function ($scope) {
    $scope.words = "Wield ultimate to do list power here";

  }).

  controller('MyCtrl2', function ($scope) {
    // write Ctrl here

  });
