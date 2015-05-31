'use strict';

angular.module(
  'settings',[
])
  .constant('Settings', {
    'bar': {
      'selectors': 10
    },
    'selector': {
      'CSSSelectorFst' : 'group1', //nome do seletor para o primeiro grupo
      'CSSSelectorSnd' : 'group2' //nome do seletor para o segundo grupo
    }
  })
  .controller('DataCtrl',['$scope', function($scope){

    $scope.options = [
      {
        "group": "group1",
        "value": "A"
      },
      {
        "group": "group1",
        "value": "B"
      },
      {
        "group": "group2",
        "value": "C"
      },
      {
        "group": "group2",
        "value": "D"
      },
      {
        "group": "group2",
        "value": "E"
      }
    ];
  }]);

angular.module(
  'app', [
    'ng',
    'ngAria',
    'ngAnimate',
    'settings',
    'templates'
  ]
);
