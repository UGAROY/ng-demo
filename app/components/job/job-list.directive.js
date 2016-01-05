angular.module('index.job')
  .directive('jobList', function () {
    'use strict';

    return {
      restrict: 'EA',
      scope: {
        jobs: '='
      },
      templateUrl: 'components/job/job-list.html',
      link: function (scope) {
        scope.search = {
          filter: ''
        };
      }
    }
  });