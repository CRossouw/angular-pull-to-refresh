angular.module('mgcrea.pullToRefresh').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('angular-pull-to-refresh.tpl.html',
    "<div class=\"pull-to-refresh\">\r" +
    "\n" +
    "  <i ng-class=\"icon[status]\"></i>&nbsp;\r" +
    "\n" +
    "  <span ng-bind=\"text[status]\"></span>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div ng-transclude></div>\r" +
    "\n"
  );

}]);
