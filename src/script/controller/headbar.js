'use strict';
angular.module('app').directive('appHeadbar',[function(){
	return {
	    restrict:'A',
	    replace:true,
	    templateUrl:'view/template/headbar.html',
      scope:{
        text:'='
      },
      link:function(scope){
        scope.back=function(){
          window.history.back();
        }
      }
  };
}]);
