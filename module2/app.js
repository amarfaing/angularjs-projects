(function (){
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject =['ShoppingListCheckOffService'];

function ToBuyController(ShoppingListCheckOffService){
  var itemToBuy = this;

}


AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
var itemBought = this;

}

function ShoppingListCheckOffService(){
var service = this;

//list of to buy items
var items = [];
service.addItem = function (itemName, itemQuantity){
  var item = {
    name: itemName,
    quantity: itemQuantity
  }
  items.push(item);
};



}


}());
