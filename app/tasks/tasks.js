'use strict';

angular.module('indexApp.tasks', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/tasks', {
    templateUrl: 'tasks/tasks.html',
    controller: 'TasksCtrl'
  });
}])

.controller('TasksCtrl', ['$scope', function($scope) {
  $scope.jobs = [
    {name: '省份分母', username: 'luoyu', startDate: new Date(), progress: 10},
    {name: '年龄分母', username: 'roy', startDate: new Date(), progress: 30},
    {name: 'ISIS文章', username: 'james', startDate: new Date(), progress: 50},
    {name: '用户统计', username: 'curry', startDate: new Date(), progress: 100},
    {name: '铁路用户性别年龄', username: 'duncan', startDate: new Date(), progress: 20},
    {name: '巴黎恐怖袭击', username: 'paul', startDate: new Date(), progress: 40},
    {name: '天津港事件', username: 'tom', startDate: new Date(), progress: 100},
    {name: '日本沉没', username: 'nobody', startDate: new Date(), progress: 80}
  ];
}]);