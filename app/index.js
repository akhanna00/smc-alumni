// Create Angular Module
var myApp = angular.module("myApp", ["ngRoute"]);

// Configure routes
myApp.config(["$routeProvider", function($routeProvider) {
	$routeProvider

	.when('/', {
		templateUrl : 'pages/home.min.html'
	})

	.when('/about', {
		templateUrl : 'pages/about.min.html'
	})

	.when('/contact', {
		templateUrl : 'pages/contact.min.html'
	})

	.when('/join', {
		templateUrl : 'pages/join.min.html'
	})

	.when('/support', {
		templateUrl : 'pages/support.min.html'
	})
	
}]);