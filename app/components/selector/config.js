'use strict';

angular.module('index.selector', [
    'ngResource',
    'isteven-multi-select'
  ])

  .value('localLang', {
    selectAll: '全选',
    selectNone: '清除',
    reset: '重置',
    search: '查找',
    nothingSelected: '请选择...'
  });
