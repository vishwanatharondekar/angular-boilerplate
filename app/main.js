require.config({
	paths: {
        angular: 'bower_components/angular/angular',
        jquery: 'bower_components/jquery/dist/jquery',
        uiRouter: 'http://angular-ui.github.io/ui-router/release/angular-ui-router',
        ocLazyLoad: 'vendor/ocLazyLoad',
        'ocLazyLoad-uiRouterDecorator': 'vendor/ocLazyLoad-uiRouterDecorator',
        app: 'app',
        css : '//cdnjs.cloudflare.com/ajax/libs/require-css/0.1.1/css',
		text : '//cdnjs.cloudflare.com/ajax/libs/require-text/2.0.12/text'
	},
	shim: {
		'angular': {
			exports: 'angular',
			deps : ['jquery']
		},
		'ngRoute': ['angular'],
		'app': ['angular']
	}
});


require(['angular', 'app'], function(angular) {
	'use strict';
	angular.bootstrap(document, ['app']);
});