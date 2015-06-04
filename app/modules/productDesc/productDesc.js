define(function (require) {
  var angular = require('angular');
  var html = require('text!./productDesc.html');
  var css = require('css!./productDesc');

  var productDesc = angular.module('productDesc', []);
  productDesc.controller('productDescCtrl', function ($scope, $compile, $templateCache) {
  	$scope.product = "Product name here";
  });
  productDesc.run(function($templateCache) {
     $templateCache.put('productDesc.html', html);
  });

  productDesc.directive('ztbProdDesc', function(){
    return {
      template: html
    };
  })

});
