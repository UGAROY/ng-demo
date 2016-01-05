'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope', function($scope) {
  $scope.jobs = [
    {name: '查找任务1', username: 'luoyu', startDate: new Date(), progress: 10},
    {name: '查找任务2', username: 'roy', startDate: new Date(), progress: 30},
    {name: '统计任务1', username: 'james', startDate: new Date(), progress: 50},
    {name: '聚类任务2', username: 'curry', startDate: new Date(), progress: 100}
  ];
}]);