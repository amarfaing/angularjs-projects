(function(){
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective)
.constant('ApiPath', "https://davids-restaurant.herokuapp.com");


function FoundItemsDirective() {
  var ddo = {
    templateUrl : 'foundItems.html',
    scope: {
      found: '<',
      onRemove: '&'
    },
    controller: FoundItemsDirectiveController,
    controllerAs: 'list',
    bindToController: true
  };
  return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService){
  var list = this;

  list.narrowItem = function(searchTerm){
  var promise = MenuSearchService.getMatchedMenuItems();

  promise.then(function (response) {

        list.items = response.data;
        list.found = [];

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

  list.removeItem = function (item) {
      var index = list.found.indexOf(item);
      list.found.splice(index, 1);
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

}

function FoundItemsDirectiveController(){

}

})();
