(function(){
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiPath', "https://davids-restaurant.herokuapp.com");

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService){
  var list = this;

  list.narrowItem = function(searchTerm){
  var promise = MenuSearchService.getMatchedMenuItems();

  promise.then(function (response) {
    list.items = response.data;
    console.log(list.items);
    console.log(list.searchTerm);
   })
   .catch(function (error) {
     console.log(error);
   })

  //  for(var i = 0; i < list.items.length; i++) {
  //        if (list.items[i].toLowerCase().indexOf(list.searchTerm) !== -1) {
  //          list.matchedItems.push(list.items[i]);
  //          console.log(list.matchedItems);
  //        }
  //   }

};

}

MenuSearchService.$inject = ['$http', 'ApiPath'];
function MenuSearchService($http, ApiPath){
var service = this;

//to use searchTerm in function with param
service.getMatchedMenuItems = function (){
  var response = $http({
    method : "GET",
    url: (ApiPath + "/menu_items.json")
      //,
      // params: {
      //   category: searchTerm
      // }
    });



  return response;
  };

}

})();
