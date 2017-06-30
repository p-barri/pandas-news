/**
 * Created by muevetoto on 30/06/17.
 */
angular.module("pandasNews").factory('newsService', ['$http', '$q', function ($http, $q) {
  var key = "d5a229dbf07145a082fe3d48f1e12f91";

  function findNews(filter, page, limit) {
    var url = "https://newsapi.org/v1/articles?source=google-news&sortBy=top&apiKey=" + key;
    var deferer = $q.defer();
    $http.get(url).then(function (data) {
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