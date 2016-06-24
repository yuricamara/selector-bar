'use strict';

angular.module(
  'settings',[
])
  .constant('Settings', {
    'bar': {
      'selectors': 10
    },
    'selector': {
      'CSSSelectorFst' : 'red', //nome do seletor para o primeiro grupo
      'CSSSelectorSnd' : 'green' //nome do seletor para o segundo grupo
    }
  })
  .controller('DataCtrl',['$scope', function($scope){

    $scope.options = [
      {
        "group": "red",
        "value": "4"
      },
      {
        "group": "red",
        "value": "5"
      },
      {
        "group": "green",
        "value": "1"
      },
      {
        "group": "green",
        "value": "2"
      },
      {
        "group": "green",
        "value": "3"
      }
    ];
  }]);

angular.module(
  'app', [
    'ng',
    'settings',
    'templates'
  ]
);
