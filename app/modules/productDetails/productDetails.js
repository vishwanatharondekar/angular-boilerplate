define(function (require) {
  var angular = require('angular');
  var html = require('text!./productDetails.html');
  var css = require('css!./productDetails');

  var productDetails = angular.module('productDetails', []);
  productDetails.controller('productDetailsCtrl', function ($scope, $compile, $templateCache) {
  	$scope.product.price = "100";
  });
  productDetails.run(function($templateCache) {
     $templateCache.put('productDetails.html', html);
  });
});
