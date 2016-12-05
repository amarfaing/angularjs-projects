(function (){
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject =['ShoppingListCheckOffService'];

function ToBuyController(ShoppingListCheckOffService){
  var toBuyList = this;
  toBuyList.items= ShoppingListCheckOffService.getItems();

  toBuyList.addItemBought = function (itemIndex, itemName, itemQuantity){
     ShoppingListCheckOffService.addItemBought(itemIndex, itemName, itemQuantity);
  };
}


AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];

function AlreadyBoughtController(ShoppingListCheckOffService){
  var boughtList = this;
  boughtList.items = ShoppingListCheckOffService.getItemsBought();

}

function ShoppingListCheckOffService(){
  var service = this;

  //list of to buy items
  var itemsToBuy = [
    {
      name: "Cookies",
      quantity: 10
    },
    {
      name: "Donuts",
      quantity: 5
    },
    {
      name: "Milk",
      quantity: 1
    },
    {
      name: "Banana",
      quantity: 1
    },
    {
      name: "Vegetables",
      quantity: 3
    }
  ];

  //list of items bought
  var itemsBought =[];

service.addItemBought = function(itemIndex, itemName, itemQuantity){
  var item = {
          name: itemName,
          quantity: itemQuantity
    };

  itemsBought.push(item);
  itemsToBuy.splice(itemIndex, 1);
};

service.getItems = function(){
  return itemsToBuy;
};

service.getItemsBought = function(){
  return itemsBought;
};

}


}());
