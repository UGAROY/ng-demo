'use strict';

angular.module('indexApp.navbar', [])

  .controller('NavbarCtrl', ['$scope', '$location', function($scope, $location) {
    $scope.isActive = function (viewLocation) {
      return viewLocation === $location.path();
    };
  }]);