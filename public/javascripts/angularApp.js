var app = angular.module('nodeAnalytics', []);

app.factory('myService', function($http) {
  var myService = {
    async: function() {
      // $http returns a promise, which has a then function, which also returns a promise
      var promise = $http.get('https://graph.facebook.com/lowes').then(function (response) {
        // The then function here is an opportunity to modify the response
        console.log(response);
        // The return value gets picked up by the then in the controller.
        return response.data;
      });
      // Return the promise to the controller
      return promise;
    }
  };
  return myService;
});


app.controller('MainCtrl', [
'$scope', 'myService', '$window',
  function($scope, myService, $window){
    $scope.test = 'Hello world!';
     myService.async().then(function(d) {
      $scope.data = d.likes;
      $window.data = $scope.data;
      console.log($scope.data)
    });
}]);


