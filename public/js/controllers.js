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
      $scope.words = "Register here, yo!!";

    }).
    controller('LoginController', function ($scope) {
      $scope.words = "Login here, yo!!";

    }).
    controller('IndexController', function ($scope) {
      $scope.words = "Index page here!!";

    }).
    controller('InformationController', function ($scope) {
      $scope.words = "Page for both form AND the list here!!";

    }).

    controller('MyCtrl2', function ($scope) {
      // write Ctrl here

  });
