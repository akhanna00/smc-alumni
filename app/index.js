
// Create Angular Module
var myApp = angular.module("myApp", ["ngRoute"]);

// Configure routes
myApp.config(["$routeProvider", function($routeProvider) {
	$routeProvider

	.when('/', {
		templateUrl : 'pages/home.min.html'
	})

	.when('/events', {
		templateUrl : 'pages/events.min.html'
	})

	.when('/contact', {
		templateUrl : 'pages/contact.min.html'
	})

	.when('/join', {
		templateUrl : 'pages/join.min.html'
	})

	.when('/why', {
		templateUrl : 'pages/why.min.html'
	})

	.when('/faq', {
		templateUrl : 'pages/faq.min.html'
	})

	.when('/donate', {
		templateUrl : 'pages/donate.min.html'
	})
	
}]);