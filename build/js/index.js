'use strict';

angular.module('app',['ui.router']);
'use strict';

angular.module('app').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$stateProvider.state('main', {
		url: "/main",
		templateUrl: "view/main.html",
		controller: 'mainCtrl'
	}).state('postionli',{
		url:"/postionli/:id",
		templateUrl:"view/postionli.html",
		controller:"postionliCtrl"
	});
	$urlRouterProvider.otherwise('main');
}]);

'use strict';
angular.module('app').directive('appCompany',[function(){
	return {
	restrict:'A',
	replace:true,
	templateUrl:'view/template/conpany.html'
  };
}]);

'use strict';
angular.module('app').directive('appFoot',[function(){
	return {
	restrict:'A',
	replace:true,
	templateUrl:'view/template/foot.html'
  };
}]);

'use strict';
angular.module('app').directive('appHead',[function(){
	return {
	    restrict:'A',
	    replace:true,
	    templateUrl:'view/template/head.html'
  };
}]);

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

'use strict';
angular.module('app').controller('mainCtrl',['$scope',function($scope){
   $scope.list=[
     {
       id:'1',
       name:'销售',
       imageUrl:'image/company-3.png',
       companyname:'千度',
       city:'上海',
       industry:'互联网',
       time:'2016-06-01 11:05'
     },
     {
       id:'2',
       name:'web前端',
       imageUrl:'image/company-1.png',
       companyname:'慕课网',
       city:'北京',
       industry:'互联网',
       time:'2016-08-02 01:05'
     }
   ]
}]);

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

'use strict';
angular.module("app").directive('appPositionInfo',[function(){
  return{
    restrict:"A",
    replace:true,
    templateUrl:"view/template/positionInfo.html",
    scope:{
      isActive:"="
    },
    link:function($scope){
      $scope.imagePath=$scope.isActive?'image/star-active.png':'image/star.png';
    }
  }
}])

'use strict';
angular.module('app').controller('postionliCtrl',['$scope',function($scope){

}]);
