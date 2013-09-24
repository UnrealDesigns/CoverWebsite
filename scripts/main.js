/* Main JS File */

angular.module('cover', ['ngRoute', 'ngAnimate', 'ngSanitize']).config(function($routeProvider){
	$routeProvider.
		when('/', {controller:MainCtrl, templateUrl:'views/home.html'}).
		otherwise({redirectTo:'/'});
});

function MainCtrl($scope, $http){
	baseURL = "";
	$http.get(baseURL+'scripts/data.json').then(function(response){
		$scope.data = response.data;
		console.log($scope.data);
	});
}