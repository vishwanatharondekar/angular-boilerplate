define(['angular', 'text!./lazy-loaded.html', 'css!./style'], function (angular, lazyHTML) {
   
  var appLazy = angular.module('app.lazy', []);
  appLazy.controller('lazyCtrl', function ($scope, $compile, $templateCache) {
    $scope.data = 'This is dynamic content coming from lazy.js file';
  });
  appLazy.run(function($templateCache) {
     $templateCache.put('lazy.html', lazyHTML);
  });
});