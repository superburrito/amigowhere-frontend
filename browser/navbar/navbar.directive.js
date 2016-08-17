'use strict';

app.directive('navbar', function($state){
	restrict: 'E',
	templateUrl: '/navbar/navbar.html',
	link: function(scope, element, attrs){
		//Todo: $scope of navbar?
		scope.goToHome = function () {
			$state.go('home');
		}
	}
	
});
