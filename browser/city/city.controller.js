'use strict';

app.controller('CityCtrl', function($scope, $stateParams, CityFactory){
	CityFactory.getOneCity($stateParams.id)
	.then(function(city){
		$scope.city = city;
	})

});
