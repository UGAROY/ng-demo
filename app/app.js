'use strict';

// Declare app level module which depends on views, and components
angular.module('indexApp', [
  'ngRoute',
  'ngResource',
  'ngAnimate',
  'indexApp.navbar',
  'indexApp.tasks',
  'indexApp.group-stat',
  'indexApp.group-query',
  'index.core',
  'index.selector',
  'index.checkbox',
  'index.job',
  'ui.bootstrap',
  'ui.bootstrap.typeahead',
  'decipher.tags'

]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/tasks'});
}]);
