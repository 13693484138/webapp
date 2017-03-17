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
	}).state('compaly',{
		url:'/compaly/:id',
		templateUrl:"view/compaly.html",
		controller:"compalyCtrl"
	});
	$urlRouterProvider.otherwise('main');
}]);
