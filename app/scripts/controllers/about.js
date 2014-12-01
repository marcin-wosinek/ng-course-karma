'use strict';

/**
 * @ngdoc function
 * @name karmaDemoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the karmaDemoApp
 */
angular.module('karmaDemoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
