angular.module('GamePortfolioApp', [
  'ngRoute'
]).config(function ( $routeProvider ) {
  'use strict';
  $routeProvider
    .when('/gallery', {
      templateUrl: 'views/gallery.html',
      controller: 'GalleryCtrl',
      controllerAs: 'gallery'
    }) 
    .when('/portfolio', {
    	templateUrl: 'views/portfolio.html',
    	controller: 'PortfolioCtrl',
    	controllerAs: 'portfolio'
    })
    .otherwise({
      redirectTo: '/gallery'
    });
//    .when('/portfolio/game/:id', {
//      templateUrl: 'views/game.html',
//      controller: 'GameCtrl',
//      controllerAs: 'game'
//    })
//    .otherwise({
//      redirectTo: '/portfolio'
//    });
}).run(function($rootScope){
  $rootScope.$on('$routeChangeError', function(event, current, previous, rejection){
    console.log(event, current, previous, rejection)
  })
});