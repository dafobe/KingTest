/**
 * Controller: GalleryCtrl
 * Manage King's games gallery 
 */
angular.module('GamePortfolioApp')
  .controller('GalleryCtrl',
    function GalleryCtrl (GamesFactory, NavigationFactory) {
      'use strict';
      var 	ctrl = this,
      		getAllGames = GamesFactory.getAllGames(),
      		getPortfolioGames = GamesFactory.getGames();
      
      this.allGames = [];
      this.portfolioGames = getPortfolioGames || [];
      
      if(!this.allGames.length && getAllGames){
    	  getAllGames.then(angular.bind(this, function then(data) {
    		  ctrl.allGames = data;
    	  }));
      }
      
      this.addGame = function(game){
    	  !ctrl._isInPortfolio(game.short) && GamesFactory.addGame(game);
    	  ctrl.portfolioGames = GamesFactory.getGames();
      };
      
      this.removeGame = function(game){
    	  GamesFactory.removeGame(game);
      };
      this.showPortfolio = function(){
    	  NavigationFactory.renderPortfolio();
      };
      this._isInPortfolio = function(gameId /*String*/){
    	  for(var i=0,end=ctrl.portfolioGames.length;i<end;i++){
    		  if (ctrl.portfolioGames[i].id === gameId){
    			  return true;
    		  }
    	  }
    	  return false;
      }
    });