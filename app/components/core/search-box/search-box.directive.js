angular.module('index.core').directive('searchBox', function ($timeout) {
  'use strict';

  var bind = angular.bind;
  var options = {
    onClickFocusDelay: 100,
    onBlurFocusDelay: 250
  };

  return {
    scope: {
      search: '=',
      inputMd: '@',
      inputLg: '@'
    },
    replace: true,
    restrict: 'EA',
    templateUrl: 'components/search-box/search-box.html',
    controller: function ($element) {
      var el = $element.find('input')[0];

      this.showInput = options.showInput;
      if (this.inputMd || this.inputLg) {
        el.removeClass('input-sm');
        el.addClass(this.inputMd ? 'input-md' : 'input-lg');
      }

      this.inputClass = this.inputClass || 'form-control input-sm';
      this.onClick = function ($event) {
        $event.stopPropagation();
        this.showInput = !this.showInput;

        if (this.showInput) {
          $timeout(function () {
            el.focus();
          }, options.onClickFocusDelay);
        } else {
          $element[0].focus();
          this.search = '';
        }
      };

      this.onBlur = function ($event) {
        $event.stopPropagation();
        if (!this.search && this.showInput) {
          $timeout(bind(this, function () {
            this.showInput = false;
          }), options.onBlurFocusDelay);
        }
      };
    },
    controllerAs: 'ctrl',
    bindToController: true
  };
});
