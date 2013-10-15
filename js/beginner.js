var app = angular.module('myApp', []);

// app.controller('PlayerController', ['$scope', function($scope) {
//   var audio = document.createElement('audio');
//   $scope.audio = audio;

//   audio.src = 'http://pd.npr.org/npr-mp4/npr/sf/2013/07/20130726_sf_05.mp4?orgId=1&topicId=1032&ft=3&f=61';
//   audio.play();
// }]);

var apiKey = 'MDExMDMwMzU0MDEzNjMwNzc4MDcwMWQ5OA001',
    nprUrl = 'http://api.npr.org/query?id=61&fields=relatedLink,title,byline,text,audio,image,pullQuote,all&output=JSON';

app.controller('PlayerController', function($scope, $http) {
  // Hidden our previous section's content
  // construct our http request
  $http({
    method: 'JSONP',
    url: nprUrl + '&apiKey=' + apiKey + '&callback=JSON_CALLBACK'
  }).success(function(data, status) {
    // Store the list of stories on the scope
    // from the NPR API response object (described above)
    $scope.programs = data.list.story;
  }).error(function(data, status) {
    // Some error occurred
  });
});

app.controller('RelatedController', ['$scope', function($scope) {
}]);

app.directive('nprLink', function() {
  return {
    restrict: 'EA',
    require: ['^ngModel'],
    replace: true,
    scope: {
      ngModel: '=',
      play: '&'
    },
    templateUrl: '/views/nprListItem.html',
    link: function(scope, ele, attr) {
      scope.duration = scope.ngModel.audio[0].duration.$text;
    }
  }
});