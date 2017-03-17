'use strict';
angular.module('app').controller('mainCtrl', ['$http', '$scope', function($http, $scope){
$http.get('/data/positionList.json').then(function(resp){
  $scope.list = resp.data;
});
}]);

//    $scope.list=[
//      {
//        id:'1',
//        name:'销售',
//        imageUrl:'image/company-3.png',
//        companyname:'千度',
//        city:'上海',
//        industry:'互联网',
//        time:'2016-06-01 11:05'
//      },
//      {
//        id:'2',
//        name:'web前端',
//        imageUrl:'image/company-1.png',
//        companyname:'慕课网',
//        city:'北京',
//        industry:'互联网',
//        time:'2016-08-02 01:05'
//      }
//    ]
// }]);
