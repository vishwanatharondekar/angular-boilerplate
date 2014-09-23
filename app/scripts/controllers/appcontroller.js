'use strict';

/**
 * @ngdoc function
 * @name xpressbuy.controller:AboutCtrl
 * @description
 * # appcontroller
 * Controller of the xpressbuy
 */
angular.module("xpressbuy")
  .controller('appcontroller', function ($scope, $http) {
	  $scope.appHeading = "Vishwanath XpressBuy Dynamic App heading Here";
	  console.log($http.get);
  });
