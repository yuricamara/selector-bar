angular.module('app')
  .directive('sbBar', function(Settings) {
    return {
      restrict: 'E',

      scope:{
        optionsAttr: '=options'
      },

      templateUrl: '/app/diretivas/sb-bar/sb-bar.tpl.html',

      controller: 'sbBarCtrl',

      require: ['sbBar','ngModel'],

      controllerAs: 'sbBar',

      link: function(scope, element, attrs, controller){
        var sbBarController = controller[0],
            ngModelController = controller[1];

        sbBarController.init(ngModelController);

        scope.addAll = sbBarController.addAllObjects;
        scope.removeAll = sbBarController.removeAllObjects;

        scope.$watch('optionsAttr.length', function(){
          scope.placeholders = new Array ( Settings.bar.selectors - scope.optionsAttr.length );
          sbBarController.options(scope.optionsAttr);
        });
      }
    }
  });
