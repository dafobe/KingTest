angular.module('GamePortfolioApp')
.factory('NavigationFactory', function GamesFactory($location) {
	'use strict';
		
	//Return public interface
	return {
		renderPortfolio : function renderPortfolio() {
			console.log('---- rendering Portfolio ----');
			$location.path('portfolio/');
		},
		renderGallery : function renderGallery() {
			console.log('---- rendering Gallery ----');
			$location.path('gallery/');
		},
		renderGameDetails : function renderGameDetails(id) {
			console.log('---- rendering Game details ----' + id);
			$location.path('/portfolio/game/'+id);
		}
	};
});