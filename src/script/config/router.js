'use strict';

angular.module('app').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$stateProvider.state('main', {
		url: "/main",
		templateUrl: "view/main.html",
		controller: 'mainCtrl'
	}).state('postionli',{
		url:"/postionli/:id",
		templateUrl:"view/postionli.html",
		controller:"postionliCtrl"
	});
	$urlRouterProvider.otherwise('main');
}]);
