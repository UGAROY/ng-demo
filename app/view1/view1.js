'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', function($scope) {
  $scope.ages = ['0-18', '18-23', '24-30', '31-40', '41-50', '>50', '未知'];

  $scope.mobiles = [
    '华为-荣耀',
    '华为-荣耀畅玩4C',
    '小米-红米',
    '小米-红米2A',
    '小米-红米Note',
    '魅族-魅蓝',
    '魅族-魅蓝Note',
    '联想-乐檬K3',
    'TCL-么么哒',
    '锤子-坚果'
  ];

  $scope.aggregations = [
    '按关键词聚合',
    '按文章类别聚合',
    '按用户年龄聚合',
    '按用户性别聚合',
    '按用户省份聚合',
    '按用户城市聚合',
    '按PGC账号聚合',
    '按文章来源聚合'
  ];

  $scope.categories = [
    '社会',
    '财经',
    '本地',
    '娱乐',
    '国内',
    '国际',
    '健康',
    '汽车',
    '科技',
    '旅游',
    '体育',
    '文化',
    '时尚',
    '教育',
    '美食',
    '房地产',
    '军事',
    '历史',
    '星座',
    '情感',
    '数码',
    '游戏',
    '养生',
    '减肥',
    '动漫',
    '商业',
    '天气',
    '女性',
    '家居',
    '政务',
    '正能量',
    '法律',
    '生活',
    '职场',
    '育儿',
    '自然',
    '购物',
    '电影',
    '辟谣',
    '搞笑'
  ];

  $scope.selected = {
    ages: [],
    mobiles: [],
    aggregation: []
  };

}]);