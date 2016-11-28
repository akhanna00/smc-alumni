
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

	.when('/events/:id', {
		templateUrl : 'pages/event-template.min.html',
		controller : 'displayEventController'
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

// Make a controller for the events page
myApp.controller('eventController', ['$scope', function($scope) {
	// Store the JSON of the data to be displayed as events
	$scope.events = events;
}]);

// Make a controller for the home page
myApp.controller('homeController', ['$scope', '$http', function($scope, $http) {
	// Store the JSON of the data to be displayed as events
	$http.get('https://smc-test.cdn.prismic.io/api/documents/search?ref=WDXEdB8AACEA--PD#format=json').then(function(response) {
		console.log(response);
	})
	$scope.events = events;
	$scope.stories = stories;
	console.log("hello");
}]);

// Make a controller for each event
myApp.controller('displayEventController', ['$scope', '$routeParams', function($scope, $routeParams) {
	// Make a template to display each event
	var eventsLen = events.length;
	// Loop through all the objects in the json
	for(var i = 0; i < eventsLen; i++) {
		var event = events[i];
		if (event.id === $routeParams.id) {
			$scope.event = event;
			break;
		}
	}
}]);

// Data to be stored
// Events
var events = [
	{
		name: 'Homecoming',
		date: '11/16/2016',
		time: '5:00 PM',
		summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod elit sit amet condimentum mollis. Mauris commodo malesuada urna, pellentesque eleifend",
		image: "https://placehold.it/250x200",
		id: "my_first_article"
	},
	{
		name: 'Homecoming2',
		date: '11/18/2016',
		time: '7:00 PM',
		summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod elit sit amet condimentum mollis. Mauris commodo malesuada urna, pellentesque eleifend",
		image: "https://placehold.it/250x200",
		id: "my_1_article"
	},
	{
		name: 'Homecoming',
		date: '11/15/2016',
		time: '4:00 PM',
		summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod elit sit amet condimentum mollis. Mauris commodo malesuada urna, pellentesque eleifend",
		image: "https://placehold.it/250x200",
		id: "my_second_article"
	},
	{	
		name: 'Homecoming',
		date: '11/16/2016',
		time: '5:00 PM',
		summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod elit sit amet condimentum mollis. Mauris commodo malesuada urna, pellentesque eleifend",
		image: "https://placehold.it/250x200",
		id: "my_first_article"
	},
	{
		name: 'Homecoming',
		date: '11/18/2016',
		time: '7:00 PM',
		summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod elit sit amet condimentum mollis. Mauris commodo malesuada urna, pellentesque eleifend",
		image: "https://placehold.it/250x200",
		id: "my_second_article"
	},
	{
		name: 'Homecoming',
		date: '11/15/2016',
		time: '4:00 PM',
		summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod elit sit amet condimentum mollis. Mauris commodo malesuada urna, pellentesque eleifend",
		image: "https://placehold.it/250x200",
		id: "my_first_article" 
	},
	{
		name: 'Homecoming',
		date: '11/16/2016',
		time: '5:00 PM',
		summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod elit sit amet condimentum mollis. Mauris commodo malesuada urna, pellentesque eleifend",
		image: "https://placehold.it/250x200",
		id: "my_second_article"
	},
	{
		name: 'Homecoming',
		date: '11/18/2016',
		time: '7:00 PM',
		summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod elit sit amet condimentum mollis. Mauris commodo malesuada urna, pellentesque eleifend",
		image: "https://placehold.it/250x200",
		id: "my_first_article"
	},
	{
		name: 'Homecoming',
		date: '11/15/2016',
		time: '4:00 PM',
		summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod elit sit amet condimentum mollis. Mauris commodo malesuada urna, pellentesque eleifend",
		image: "https://placehold.it/250x200",
		id: "my_first_article" 
	},
	{
		name: 'Homecoming',
		date: '11/16/2016',
		time: '5:00 PM',
		summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod elit sit amet condimentum mollis. Mauris commodo malesuada urna, pellentesque eleifend",
		image: "https://placehold.it/250x200",
		id: "my_second_article"
	},
	{
		name: 'Homecoming',
		date: '11/18/2016',
		time: '7:00 PM',
		summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod elit sit amet condimentum mollis. Mauris commodo malesuada urna, pellentesque eleifend",
		image: "https://placehold.it/250x200",
		id: "my_first_article"
	},
	{
		name: 'Homecoming',
		date: '11/15/2016',
		time: '4:00 PM',
		summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod elit sit amet condimentum mollis. Mauris commodo malesuada urna, pellentesque eleifend",
		image: "https://placehold.it/250x200",
		id: "my_first_article" 
	},
	{
		name: 'Homecoming',
		date: '11/16/2016',
		time: '5:00 PM',
		summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod elit sit amet condimentum mollis. Mauris commodo malesuada urna, pellentesque eleifend",
		image: "https://placehold.it/250x200",
		id: "my_second_article"
	},
	{
		name: 'Homecoming',
		date: '11/18/2016',
		time: '7:00 PM',
		summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod elit sit amet condimentum mollis. Mauris commodo malesuada urna, pellentesque eleifend",
		image: "https://placehold.it/250x200",
		id: "my_first_article"
	},
	{
		name: 'Homecoming',
		date: '11/15/2016',
		time: '4:00 PM',
		summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod elit sit amet condimentum mollis. Mauris commodo malesuada urna, pellentesque eleifend",
		image: "https://placehold.it/250x200",
		id: "my_first_article" 
	},
	{
		name: 'Homecoming',
		date: '11/16/2016',
		time: '5:00 PM',
		summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod elit sit amet condimentum mollis. Mauris commodo malesuada urna, pellentesque eleifend",
		image: "https://placehold.it/250x200",
		id: "my_second_article"
	},
	{
		name: 'Homecoming',
		date: '11/18/2016',
		time: '7:00 PM',
		summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod elit sit amet condimentum mollis. Mauris commodo malesuada urna, pellentesque eleifend",
		image: "https://placehold.it/250x200",
		id: "my_first_article"
	},
	{
		name: 'Homecoming',
		date: '11/15/2016',
		time: '4:00 PM',
		summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod elit sit amet condimentum mollis. Mauris commodo malesuada urna, pellentesque eleifend",
		image: "https://placehold.it/250x200",
		id: "my_second_article"
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
