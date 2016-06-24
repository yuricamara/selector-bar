angular.module('app')
  .directive('sbSelector', function(Settings) {
    return {
      restrict: 'E',

      scope: {
        selectionAttr: '=selection'
      },

      templateUrl: '/app/diretivas/sb-selector/sb-selector.tpl.html',

      replace: true,

      transclude: true,

      require: '^sbBar',

      link: function (scope, element, attrs, controller){

        var sbSelectorController = controller,

            cleanAllActiveState = function(){
              sbSelectorController.getInitAds();
            };

        scope.addSelected = function(event) {
          var ObjectsInNgModel = sbSelectorController.getObjects().length;

          //command
          if(event.ctrlKey){
            sbSelectorController.addSelectedByCmd(scope.selectionAttr);
          } else {
            //click only
            sbSelectorController.addSelectedByClick(scope.selectionAttr, ObjectsInNgModel);
          }
        }

        //Apensas seta a classe do seletor de object pra dizer se está ou não no model
        scope.isActive = function() {
          if(sbSelectorController.existObject(scope.selectionAttr)){
            return 'sb-selected is-active';
          }else {
            return null;
          }
        };

        scope.setGroupClass = function(group){
          if(group === Settings.selector.CSSSelectorFst){
            return 'sb-selector-fst-group';
          }else if(group === Settings.selector.CSSSelectorSnd){
            return 'sb-selector-snd-group';
          }else{
            return 'sb-selector-unselectable-group';
          }
        }
      }
    }
  })
