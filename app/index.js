
// Create Angular Module
var myApp = angular.module("myApp", ["ngRoute"]);

// Configure routes
myApp.config(["$routeProvider", function($routeProvider) {
	$routeProvider

	.when('/', {
		templateUrl : 'pages/home.min.html',
		controller : 'homeController'
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

// Make a controller for the home page
myApp.controller('homeController', ['$scope', function($scope) {
	// Store the JSON of the data to be displayed as events
	$scope.events = events;
}]);

// Data to be stored
var events = [
	{
		name: 'Homecoming',
		time: "November 5th",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod elit sit amet condimentum mollis. Mauris commodo malesuada urna, pellentesque eleifend"
	},
	{
		name: 'International Day', 
		time: 'November 6th',
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod elit sit amet condimentum mollis. Mauris commodo malesuada urna, pellentesque eleifend"

	}, 
	{
		name: "Veteran's Day",
		time: 'November 8th',
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod elit sit amet condimentum mollis. Mauris commodo malesuada urna, pellentesque eleifend"

	}
];
