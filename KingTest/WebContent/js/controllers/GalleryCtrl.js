/**
 * Controller: GalleryCtrl
 * Manage King's games gallery 
 */
angular.module('GamePortfolioApp')
  .controller('GalleryCtrl',
    function GalleryCtrl ($scope, GamesFactory) {
      'use strict';
      $scope.allGames = [];
      $scope.title = 'Gallery'
      var getAllGames = GamesFactory.getAllGames();
      if(getAllGames){
    	  getAllGames.then(function(data){
    		  // add games list to the scope
    		  $scope.allGames = data.games;
    		  console.log('---allGames : ', $scope.allGames)
    	  });
      }
      
      $scope.addGame = function(game){
    	  GamesFactory.addGame(game);
    	  console.log('--- add game : ', game);
      };
      
      $scope.removeGame = function(game){
    	  GamesFactory.removeGame(game);
      };
    });