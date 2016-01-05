angular.module('index.checkbox')
  .directive('checkboxGroup', function () {
    return {
      restrict: 'EA',
      scope: {
        allValues: '=',
        selectedValues: '='
      },
      templateUrl: 'components/checkbox-group/checkbox.html'
    }
  });