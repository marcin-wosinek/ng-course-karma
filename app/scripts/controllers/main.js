'use strict';

/**
 * @ngdoc function
 * @name karmaDemoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the karmaDemoApp
 */
angular.module('karmaDemoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
