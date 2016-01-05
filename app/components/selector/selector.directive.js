angular.module('index.selector')
  .directive('selector', function (localLang) {

    return {
      restrict: 'EA',
      scope: {
        mode: '@',
        allValues: '=',
        selectedValues: '='
      },
      templateUrl: 'components/selector/selector.html',
      compile: function () {
        return {
          pre: function (scope) {
            scope.localLang = localLang;
            if (!scope.allValues) {
              return;
            }

            // Convert value array to object array that can be recognized by multi-select directive
            scope.inModel = scope.allValues.map(function (value) {
              var valueObj = { name: value };
              if (scope.selectedValues && scope.selectedValues.indexOf(value) !== -1) {
                valueObj.ticked = true;
              } else {
                valueObj.ticked = false;
              }
              return valueObj;
            });

            // On finish selection, update the scope.selectedValues;
            scope.onFinishedSelection = function () {
              scope.selectedValues = scope.outModel.map(function (valueObj) {
                return valueObj.name;
              });
            };
          },
          post: function (scope) {

          }
        }
      }
    };
  });