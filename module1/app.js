(function(){
'use strict';
angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){
console.log($scope.lunchList);
var arraysOfStrings = $scope.lunchList.split(',');
var lunchListElt = arraysOfStrings.lenght;
console.log(lunchListElt);

$scope.checklist = function(){
// if (lunchListElement){
//   $scope.message = "Please enter data first";
// // }else if (){
//
// }


}

}


})();
