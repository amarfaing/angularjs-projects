(function(){
'use strict';
angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){
$scope.lunchList = null;
$scope.lunchListElt = 0;
$scope.message = " ";

$scope.display = function (){
  var arraysOfStrings = splitArray($scope.lunchList);
  $scope.lunchListElt = arraysOfStrings.length;
  var strMsg = displayMessage($scope.lunchListElt);
  $scope.message = displayMessage($scope.lunchListElt);
}

function splitArray (string){
  var cal = 0;
  if(string !== null && string !== ""){
  return cal = string.split(',');
}
return cal;
}

function displayMessage(elt){
  var str = "";

  if(elt===1){
    return str = "Enjoy!";
  }else if (elt===2) {
    return str = "Enjoy!";
  }
  else if (elt===3) {
    return str = "Enjoy!";
  }
  else if (elt>3) {
    return str = "Too much!";
  }
    else return str ="Please enter data first";
  }

}


})();
