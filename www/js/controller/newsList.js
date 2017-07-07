angular.module('pandasNews.controllers')
  .controller('NewsListCtrl', ['$scope', '$stateParams', 'newsService',
    function($scope, $stateParams,newsService) {
      $scope.newsList = [];
      $scope.showFilter = false;
      $scope.textSearch = {};
      $scope.search = function(){
        var filter = $scope.textSearch.text;
        newsService.findNews(filter).then(function(data){
          $scope.newsList = data.data;
        });
      };
      $scope.toggleFilter = function(){
        $scope.showFilter = !$scope.showFilter;
      };

      newsService.findNews().then(function(data){
        $scope.newsList = data.data;
      });
    }
  ]);
