(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/templates/home.template.html'
  })

  // Categories list page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/templates/categories.template.html',
    controller: 'CategoriesController as menu',
    resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }

  });

  // Items List page
    // .state('items', {
    //   url: '/items/{category}',
    //   templateUrl: 'src/menu/templates/items.template.html',
    //   controller: 'ItemsController as category',
    //   resolve: {
    //     items: ['$stateParams', 'MenuDataService',
    //            function ($stateParams, MenuDataService) {
    //             return MenuDataService.getItemsForCategory($stateParams.category);
    //            }]
    //   }
    //});

}

})();
