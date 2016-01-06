'use strict';

angular.module('indexApp.group-stat', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/group-stat', {
      templateUrl: 'group-stat/group-stat.html',
      controller: 'GroupStatCtrl'
    });
  }])

  .controller('GroupStatCtrl', ['$scope', 'Options', function ($scope, Options) {

    $scope.model = {
      gids: [],
      keywords: [],
      media_ids: [],
      sources: [],
      user_like_keywords: []
    };

    $scope.times = Options.query({optionId: 'times'});
    $scope.orderFields = Options.query({optionId: 'orderFields'});
    $scope.groupCategories = Options.query({optionId: 'groupCategories'});

    $scope.userAges = Options.query({optionId: 'userAges'});
    $scope.userGenders = Options.query({optionId: 'userGenders'});
    $scope.userCities = Options.query({optionId: 'userCities'});
    $scope.userLikeCategories = Options.query({optionId: 'userLikeCategories'});
    $scope.userProvinces = Options.query({optionId: 'userProvinces'});
    $scope.userPhoneBrands = Options.query({optionId: 'userPhoneBrands'});
    $scope.userPhoneSeries = Options.query({optionId: 'userPhoneSeries'});

  }]);