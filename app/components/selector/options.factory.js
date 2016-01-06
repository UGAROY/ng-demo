angular.module('index.selector')
  .factory('Options', ['$resource',
    function ($resource) {
      return $resource('options/:optionId.json', {}, {
        query: {method: 'GET', params: {}, isArray: true}
      });
    }]);