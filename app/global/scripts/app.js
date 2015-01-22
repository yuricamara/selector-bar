'use strict';

angular.module(
  'settings',[
])
  .constant('Settings', {
    'bar': {
      'selectors': 20
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
        "group": "group1",
        "value": "C"
      },
      {
        "group": "group2",
        "value": "D"
      },
      {
        "group": "group2",
        "value": "E"
      },
      {
        "group": "group2",
        "value": "F"
      },
      {
        "group": "group2",
        "value": "G"
      },
      {
        "group": "group1",
        "value": "H"
      },
      {
        "group": "group2",
        "value": "I"
      },
      {
        "group": "group2",
        "value": "J"
      },
      {
        "group": "group2",
        "value": "L"
      },
      {
        "group": "group2",
        "value": "M"
      },
      {
        "group": "group1",
        "value": "N"
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
