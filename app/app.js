'use strict';

// Declare app level module which depends on views, and components
angular.module('indexApp', [
  'ngRoute',
  'indexApp.navbar',
  'indexApp.tasks',
  'indexApp.group-query',
  'index.core',
  'index.selector',
  'index.checkbox',
  'index.job',
  'ui.bootstrap'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/tasks'});
}]);
