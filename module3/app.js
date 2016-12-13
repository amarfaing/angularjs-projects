(function(){
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective)
.constant('ApiPath', "https://davids-restaurant.herokuapp.com");


function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      found: '<',
      onRemove: '&'
    }
  };

  return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService){
  var list = this;

  list.narrowItem = function(searchTerm){
  var promise = MenuSearchService.getMatchedMenuItems();

  promise.then(function (response) {

        list.found = [];
        list.items = response.data;

        if(list.searchTerm){
         for(var i = 0; i < list.items.menu_items.length; i++) {
               if (list.items.menu_items[i].description.toLowerCase().indexOf(list.searchTerm) !== -1) {
                 list.found.push(list.items.menu_items[i]);
               }
          }
        }

   })
   .catch(function (error) {
     console.log("error");
   })

  };


}

MenuSearchService.$inject = ['$http', 'ApiPath'];
function MenuSearchService($http, ApiPath){
var service = this;

service.getMatchedMenuItems = function (searchTerm){
  var response = $http({
    method : "GET",
    url: (ApiPath + "/menu_items.json")
    });

  return response;
  };

  service.removeItem = function (itemIndex) {
      found.splice(itemIndex, 1);
   };

}

})();
