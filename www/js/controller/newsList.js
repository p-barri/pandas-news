angular.module('pandasNews.controllers')
  .controller('NewsListCtrl', ['$scope', '$stateParams', 'newsService',
    function($scope, $stateParams,newsService) {
      $scope.newsList = [];
      $scope.showFilter = false;
      $scope.search = function(){

        $scope.textSearch
      }
      $scope.toggleFilter = function(){
        $scope.showFilter = !$scope.showFilter;
      }
      newsService.findNews().then(function(data){
        $scope.newsList = data.data;
      });
    }
  ]);
