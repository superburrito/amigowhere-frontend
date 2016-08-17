'use strict';

app.config(function ($stateProvider) {
  $stateProvider.state('city', {
    url: '/cities/:cityId',
    templateUrl: 'city.html',
    controller: 'CityCtrl'
  });
  
});