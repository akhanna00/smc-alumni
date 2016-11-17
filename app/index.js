
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
		templateUrl : 'pages/events.min.html',
		controller : 'eventController'
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
myApp.controller('eventController', ['$scope', function($scope) {
	// Store the JSON of the data to be displayed as events
	$scope.events = events;
}]);

// Make a controller for the home page
myApp.controller('homeController', ['$scope', function($scope) {
	// Store the JSON of the data to be displayed as events
	$scope.events = events;
	$scope.stories = stories;
}]);

// Data to be stored
// Events
var events = [
	{
		name: 'Homecoming',
		date: '11/16/2016',
		time: '5:00 PM',
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod elit sit amet condimentum mollis. Mauris commodo malesuada urna, pellentesque eleifend"
	},
	{
		name: 'Homecoming',
		date: '11/18/2016',
		time: '7:00 PM',
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod elit sit amet condimentum mollis. Mauris commodo malesuada urna, pellentesque eleifend"
	},
	{
		name: 'Homecoming',
		date: '11/15/2016',
		time: '4:00 PM',
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod elit sit amet condimentum mollis. Mauris commodo malesuada urna, pellentesque eleifend"
	},{
		name: 'Homecoming',
		date: '11/16/2016',
		time: '5:00 PM',
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod elit sit amet condimentum mollis. Mauris commodo malesuada urna, pellentesque eleifend"
	},
	{
		name: 'Homecoming',
		date: '11/18/2016',
		time: '7:00 PM',
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod elit sit amet condimentum mollis. Mauris commodo malesuada urna, pellentesque eleifend"
	},
	{
		name: 'Homecoming',
		date: '11/15/2016',
		time: '4:00 PM',
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod elit sit amet condimentum mollis. Mauris commodo malesuada urna, pellentesque eleifend"
	}, 
	{
		name: 'Homecoming',
		date: '11/16/2016',
		time: '5:00 PM',
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod elit sit amet condimentum mollis. Mauris commodo malesuada urna, pellentesque eleifend"
	},
	{
		name: 'Homecoming',
		date: '11/18/2016',
		time: '7:00 PM',
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod elit sit amet condimentum mollis. Mauris commodo malesuada urna, pellentesque eleifend"
	},
	{
		name: 'Homecoming',
		date: '11/15/2016',
		time: '4:00 PM',
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod elit sit amet condimentum mollis. Mauris commodo malesuada urna, pellentesque eleifend"
	}, 
	{
		name: 'Homecoming',
		date: '11/16/2016',
		time: '5:00 PM',
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod elit sit amet condimentum mollis. Mauris commodo malesuada urna, pellentesque eleifend"
	},
	{
		name: 'Homecoming',
		date: '11/18/2016',
		time: '7:00 PM',
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod elit sit amet condimentum mollis. Mauris commodo malesuada urna, pellentesque eleifend"
	},
	{
		name: 'Homecoming',
		date: '11/15/2016',
		time: '4:00 PM',
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod elit sit amet condimentum mollis. Mauris commodo malesuada urna, pellentesque eleifend"
	}, 
	{
		name: 'Homecoming',
		date: '11/16/2016',
		time: '5:00 PM',
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod elit sit amet condimentum mollis. Mauris commodo malesuada urna, pellentesque eleifend"
	},
	{
		name: 'Homecoming',
		date: '11/18/2016',
		time: '7:00 PM',
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod elit sit amet condimentum mollis. Mauris commodo malesuada urna, pellentesque eleifend"
	},
	{
		name: 'Homecoming',
		date: '11/15/2016',
		time: '4:00 PM',
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod elit sit amet condimentum mollis. Mauris commodo malesuada urna, pellentesque eleifend"
	}, 
	{
		name: 'Homecoming',
		date: '11/16/2016',
		time: '5:00 PM',
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod elit sit amet condimentum mollis. Mauris commodo malesuada urna, pellentesque eleifend"
	},
	{
		name: 'Homecoming',
		date: '11/18/2016',
		time: '7:00 PM',
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod elit sit amet condimentum mollis. Mauris commodo malesuada urna, pellentesque eleifend"
	},
	{
		name: 'Homecoming',
		date: '11/15/2016',
		time: '4:00 PM',
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod elit sit amet condimentum mollis. Mauris commodo malesuada urna, pellentesque eleifend"
	}
];

// Alumni Stories
var stories = [
	{
		name: 'Lorem ipsum',
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod elit sit amet condimentum mollis. Mauris commodo malesuada urna, pellentesque eleifend"
	},
	{
		name: 'Lorem ipsum', 
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod elit sit amet condimentum mollis. Mauris commodo malesuada urna, pellentesque eleifend"

	}, 
	{
		name: "Lorem ipsum",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod elit sit amet condimentum mollis. Mauris commodo malesuada urna, pellentesque eleifend"

	}
];