(function () {
'use strict';

angular.module('MenuApp')
.service('MenuDataService', MenuDataService)
.constant('ApiPath', "https://davids-restaurant.herokuapp.com");

MenuDataService.$inject = ['$http', 'ApiPath']
function MenuDataService($http, ApiPath){
  var service = this;

  service.getAllCategories = function (){
    var response = $http({
      method : "GET",
      url: (ApiPath + "/categories.json")
      });

    return response;
    };

}

})();
