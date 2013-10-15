var app = angular.module('myApp', []);

/* dumb sample stuff */

app.run(function($rootScope) {
  $rootScope.name = "Karen Rustad";
});

app.controller('MyController', function($scope) {
  $scope.person = {
    name: "Ari Lerner"
  };
});

app.controller('ParentController', function($scope) {
  $scope.person = {greeted: false};
});

app.controller('ChildController', function($scope) {
  $scope.sayHello = function() {
    $scope.person.greeted = true;
  }
});

/* end dumb sample stuff */

app.controller('PlayerController', ['$scope', function($scope) {
    $scope.playing = false;
    $scope.audio = document.createElement('audio');
    $scope.audio.src = '/media/halfwaythere.mp3';
}]);

app.controller('RelatedController', ['$scope', function($scope) {
}]);