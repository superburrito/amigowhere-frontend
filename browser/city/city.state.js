'use strict';

app.config(function ($stateProvider) {
  $stateProvider.state('city', {
    url: '/:cityName',
    templateUrl: 'city.html'
  });
});