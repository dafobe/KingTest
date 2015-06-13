angular.module('GamePortfolioApp')
.factory('GamesFactory', function GamesFactory($q, $http, $location) {
	'use strict';
	var games = [];
	
	var remove = function(game){
		var i = 0,
			end = games.length;
		
		for(;i<end;i++){
			if(games[i]['short'] === game.short){
				games.slice(i,1);
				break
			}
		}
	}
	return {
		getAllGames : function () {
			var deferred = $q.defer();
			$http.get('json/games.json')
			.success(function (data) {
				deferred.resolve(data);
			})
			.error(function (data) {
				deferred.reject(data);
			});
			return deferred.promise;
		},
		getGames : function(){
			console.log('--- retrieving games : ', games);
			return games;
		},
		addGame : function(game /*Object*/){
			games.push(game);
			console.log('--- added game : ', game, games);
		},
		removeGame : function(game /*Object*/){
			remove(game);
		}
		
		
	};
});