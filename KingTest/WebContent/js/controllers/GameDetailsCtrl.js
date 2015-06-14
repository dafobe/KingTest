/**
 * Controller: GalleryCtrl
 * Manage King's games gallery 
 */
angular.module('GamePortfolioApp')
  .controller('GameDetailsCtrl',
    function GameDetailsCtrl (GamesFactory) {
      'use strict';
      var game = GamesFactory.getGameDetails() || {};
     
      this.name = game['name'];
      this.url = game['url'];
      this.image = game['images']['60x60'];
      
      this.removeGame = function(game){
    	  GamesFactory.removeGame(game);
      };
      
      
    });