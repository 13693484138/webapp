'use strict';
angular.module('app').directive('appPosition',[function(){
  return {
    restrict:'A',
    replace:true,
    templateUrl:'view/template/position.html',
    scope:{
      data:"="
    }
  };
}]);
