/**
 * Created by muevetoto on 30/06/17.
 */
angular.module("pandasNews").factory('newsService', ['$http', '$httpParamSerializer', '$q', function ($http, $httpParamSerializer, $q) {

  function findNews(filter, page, limit) {
    var url = "http://74.207.253.57/hanga_test/api/public";
    var query = $httpParamSerializer({q: filter, max: limit, page: page});
    var deferer = $q.defer();
    $http.get(url+ "?" + query ).then(function (data) {
      deferer.resolve(data);
    }, function () {
      deferer.reject();
    });
    return deferer.promise;
  }

  return {
    findNews: function(filter, page, limit){
      return findNews(filter, page, limit);
    }
  };
}]);