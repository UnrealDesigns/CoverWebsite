/* Main JS File */

angular.module('cover', []).config(function($routeProvider){
	$routeProvider.
		when('/', {controller:MainCtrl, templateUrl:'views/home.html'}).
		otherwise({redirectTo:'/'});
});

function MainCtrl($scope){
	$scope.name = "Vikrant";

	$scope.navLinks = [
						{href:"#", name:"Home"},
						{href:"#", name:"Home"},
						{href:"#", name:"Home"},
						{href:"#", name:"Home"}
	];

	$scope.contentBlocks = [
						{image:"#", imagealt:"POST1", title:"Post 1", description:"This is the first post"},
						{image:"#", imagealt:"POST2", title:"Post 2", description:"This is the second post"},
	];
}