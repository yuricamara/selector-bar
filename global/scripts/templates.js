angular.module('templates', []).run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('/app/diretivas/sb-bar/sb-bar.tpl.html',
    "<ul>\n" +
    "  <li class=\"sb-selector sb-selector-none\" ng-click=\"removeAll()\">\n" +
    "    <a>None</a>\n" +
    "  </li>\n" +
    "\n" +
    "  <sb-selector\n" +
    "    ng-repeat=\"value in optionsAttr | orderBy:'group'\"\n" +
    "    selection=\"value\"\n" +
    "  >\n" +
    "    {{$index + 1}}\n" +
    "  </sb-selector>\n" +
    "\n" +
    "  <li class=\"sb-selector sb-selector-unselectable-group\" ng-repeat=\"placeholder in placeholders track by $index\">\n" +
    "    <a>{{$index + optionsAttr.length + 1}}</a>\n" +
    "  </li>\n" +
    "\n" +
    "  <li class=\"sb-selector sb-selector-all\" ng-click=\"addAll()\">\n" +
    "    <a>All</a>\n" +
    "  </li>\n" +
    "</ul>\n" +
    "\n"
  );


  $templateCache.put('/app/diretivas/sb-selector/sb-selector.tpl.html',
    "<li\n" +
    "  ng-class=\"[setGroupClass(selectionAttr.group), isActive()]\"\n" +
    "  ng-click=\"addSelected($event)\"\n" +
    "  class=\"sb-selector\"\n" +
    ">\n" +
    "  <a>\n" +
    "    <ng-transclude></ng-transclude>\n" +
    "  </a>\n" +
    "</li>\n" +
    "\n"
  );

}]);
