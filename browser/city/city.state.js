'use strict';

app.config(function ($stateProvider) {
  $stateProvider.state('city', {
    url: '/cities/:cityId',
    templateUrl: '/browser/city/city.html',
    controller: 'CityCtrl'
  });
  
});