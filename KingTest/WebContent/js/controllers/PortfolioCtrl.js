/**
 * Controller: GalleryCtrl
 * Manage King's games gallery 
 */
angular.module('GamePortfolioApp')
  .controller('PortfolioCtrl',
    function GalleryCtrl ($scope, GamesFactory) {
      'use strict';
      $scope.portFolioGames = GamesFactory.getGames();
      
      $scope.removeGame = function(game){
    	  GamesFactory.removeGame(game);
      };
      
      
    });