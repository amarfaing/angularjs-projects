(function(){
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiPath', "https://davids-restaurant.herokuapp.com");

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService){
  var list = this;
  var promise = MenuSearchService.getMatchedMenuItems();

}

MenuSearchService.$inject = ['$http', 'ApiPath']
function MenuSearchService($http, ApiPath){
var service = this;

service.getMatchedMenuItems = function (searchTerm){
  var response = $http({
    method : "GET",
    url: (ApiPath + "/menu_items.json"),
      params: {
        category: searchTerm
      }
    });
  return response;
  };

}

})();
