angular.module('index.selector')
  .directive('selector', function (localLang) {

    return {
      restrict: 'EA',
      scope: {
        allOptions: '=',
        selectedValues: '=',
        mode: '@',
        maxHeight: '@'
      },
      templateUrl: 'components/selector/selector.html',
      compile: function () {
        return {
          pre: function (scope) {
            scope.localLang = localLang;

            // Add ticked property
            scope.inModel = scope.allOptions.map(function (option) {
              var selObj = { name: option.name, value: option.value };
              if (scope.selectedValues && scope.selectedValues.indexOf(option.value) !== -1) {
                selObj.ticked = true;
              } else {
                selObj.ticked = false;
              }
              return selObj;
            });

            // On finish selection, update the scope.selectedValues;
            scope.onFinishedSelection = function () {
              scope.selectedValues = scope.outModel.map(function (valueObj) {
                return valueObj.value;
              });
            };
          },
          post: function (scope) {

          }
        }
      }
    };
  });