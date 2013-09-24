/* Main JS File */

angular.module('cover', ['ngRoute', 'ngAnimate', 'ngSanitize']).config(function($routeProvider){
	$routeProvider.
		when('/', {controller:MainCtrl, templateUrl:'views/home.html'}).
		otherwise({redirectTo:'/'});
});

function MainCtrl($scope, $http){
	$scope.name = "Vikrant"
}