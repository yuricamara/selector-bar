angular.module('app')
  .controller('sbBarCtrl', ['$scope', '$filter', function($scope, $filter){
    var self = this,
        ngModel = null,
        ngModelValue = [],
        options;

    /********** Startup **********/

    //Startup iniciado pela diretiva sbBar

    self.init = function (ngModelCtrl) {
      ngModel = ngModelCtrl;
      ngModel.$setViewValue([]);
    };

    self.options = function (optionsList) {
      options = $filter('orderBy')(optionsList, 'group');
    }

    /******** Utilities **********/

    self.existObject = function(selectedObject) {
      return !!_.find(ngModel.$viewValue, selectedObject);
    }

    self.ObjectInOptionsByPosition = function(pos){
      return _.at(options, pos)[0];
    }

    self.addObject = function(selectedObject){

      ngModel.$viewValue.push(selectedObject);
    }

    self.addSectionOnly = function (selectedObject) {
      ngModel.$setViewValue([selectedObject]);
    }

    /******** Get **********/

    self.getObjects = function (){
      return ngModel.$viewValue;
    }

    /******** Add **********/

    //Btn 'all'
    self.addAllObjects = function () {
      for(var i = 0, l = options.length; i < l; i++){
        if(!self.existObject( self.ObjectInOptionsByPosition(i) )){
          self.addObject( self.ObjectInOptionsByPosition(i) );
        }
      }
    }

    self.addSelectedByClick = function(selectedObject, ObjectsInNgModel) {

      if(self.existObject(selectedObject)){
        //Caso o object já esteja no ng-model
          // e só ele esteja selecionado
          if(ObjectsInNgModel === 1){
            // Retira ele do ng-model
            self.removeSelectedObject(selectedObject);
          } else if (ObjectsInNgModel > 1) {
            // Retira só os outros do ng-model
            self.addSectionOnly(selectedObject); // add só o object
          }
      } else {
        //Caso o object não esteja no ng-model
        self.addSectionOnly(selectedObject); // add só o object
      }
    }

    self.addSelectedByCmd = function(selectedObject){

      var isInNgmodel = _.find(ngModel.$viewValue, selectedObject);

      if(isInNgmodel) {
        //Tira
        _.pull(ngModel.$viewValue, selectedObject);
      }else{
        //Coloca
        ngModel.$viewValue.push(selectedObject);
      }
    }

    /******** Remove **********/

    self.removeSelectedObject = function (selectedObject){
      _.pull(ngModel.$viewValue, selectedObject);
    }

    self.removeAllObjects = function (){
      ngModel.$setViewValue([]);
    }
  }]);
