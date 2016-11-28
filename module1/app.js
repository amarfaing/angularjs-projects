(function(){
'use strict';
angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){
$scope.lunchList = "";
$scope.lunchListElt= 0;
$scope.message= "";

$scope.displayNumberElt = function (){
  var arraysOfStrings = splitArray($scope.lunchList);
  $scope.lunchListElt = arraysOfStrings.length;
  console.log($scope.lunchListElt);
  var strMsg = displayMessage($scope.lunchListElt);
  console.log(strMsg);
  $scope.message = displayMessage($scope.lunchListElt);
}

function splitArray (string){
  var cal=0;
  return cal = string.split(',');
}

function displayMessage(elt){
  var str="";
  // elt.toInt();
if(elt=1){
  return str= "Enjoy!";
}else if (elt=2) {
  return str= "Enjoy!";
}
else if (elt=3) {
  return str= "Enjoy!";
}
else if (elt>3) {
  return str= "Too much!";
}
else return str;
}

}



})();
