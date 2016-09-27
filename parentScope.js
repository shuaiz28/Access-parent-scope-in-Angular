var app = angular.module('parentChildCtrl', []);
app.controller('parentCtrl', function($scope) {
	$scope.name = 'Parent Controller';
	$scope.parentName = 'parent';
})

app.controller('childCtrl', function($scope) {
	$scope.name = 'Childe Controller';
})