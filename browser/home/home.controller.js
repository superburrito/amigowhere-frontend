'use strict';

// Both Home Controller and City Controller use the City Factory
app.controller('HomeCtrl', function($scope, $state, $stateParams, CityFactory){
	CityFactory.getAllCities()
	.then(function(cities){
		$scope.cities = cities;
	});

	$scope.goToCity = function(cityId){
		$state.go('city', {id: cityId})
	}

});
