define([
        'angular', 
        'uiRouter',
        'ocLazyLoad',
        'ocLazyLoad-uiRouterDecorator'
        ], function (angular) {

	var app = angular.module('app', ['ui.router', 'oc.lazyLoad', 'oc.lazyLoad.uiRouterDecorator']);

	app.config(function($stateProvider, $locationProvider, $ocLazyLoadProvider) {
		/**
		 * module: string module id
		 * files: a single file (string), or an array of files to load
		 * templateUrl: view template
		 * 
		 * returns an array where the first element is the templateProvider
		 * and the second element is the resolve function
		 */

		$ocLazyLoadProvider.config({
			loadedModules: ['app'],
			asyncLoader: require
		});

		$stateProvider
		/*.state('home', {
			url: "/",
			lazyModule: 'app.collections',
			lazyFiles: 'collections/collections',
			lazyTemplateUrl: 'collection.html', //This is used for taking cached template
			controller: 'collectionCtrl'
		})*/
		.state('home', {
			url: "/",
			lazyModule: 'productPage',
			lazyFiles: 'modules/productPage/productPage',
			lazyTemplateUrl: 'productPage.html', //This is used for taking cached template
			controller: 'productPageCtrl'
		})
		/*.state('home.quantity', {
			url: "quantity",
			lazyModule: 'quantity',
			lazyFiles: 'modules/quantity/quantity',
			lazyTemplateUrl: 'quantity.html', //This is used for taking cached template
			controller: 'quantity'
		})
		.state('home.signin', {
			url: "signin",
			lazyModule: 'app.quantity',
			lazyFiles: 'quantity/quantity',
			lazyTemplateUrl: 'quantity.html', //This is used for taking cached template
			controller: 'quantity'
            templateUrl: "signin.html"
		})
		.state('home.variants', {
			url: "variants",
			lazyModule: 'app.variants',
			lazyFiles: 'modules/variants/variants',
			lazyTemplateUrl: 'variants.html', //This is used for taking cached template
			controller: 'variants'
		})*/
		;
		
		$locationProvider.html5Mode(true);
	});

	app.controller('mainCtrl', function($scope) {
		$scope.name = 'World';
	});

});
