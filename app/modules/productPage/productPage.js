define(function (require) {
  var angular = require('angular');
  var html = require('text!./productPage.html');
  var css = require('css!./productPage');

  var productDesc = require('./../productDesc/productDesc');
  var productDetails = require('./../productDetails/productDetails');

  var productPage = angular.module('productPage', ['productDesc', 'productDetails']);
  productPage.controller('productPageCtrl', function ($scope, $compile, $templateCache) {

  });
  productPage.run(function($templateCache) {
     $templateCache.put('productPage.html', html);
  });
});
