define(function (require) {
  var angular = require('angular');
  var html = require('text!./productSelections.html');
  var css = require('css!./productSelections');

  var productSelections = angular.module('productSelections', []);
  productSelections.controller('productSelectionsCtrl', function ($scope, $compile, $templateCache) {

  });
  productSelections.run(function($templateCache) {
     $templateCache.put('productSelections.html', html);
  });
});
