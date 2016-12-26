(function(){
'use strict';

angular.module('newsletter')
.config(routeConfig);

/**
 * Configures the routes and views
 */
routeConfig.$inject = ['$stateProvider'];
function routeConfig ($stateProvider){
  //Routes
  $stateProvider
  .state('newsletter', {
    abstract: true,
    templateUrl: 'src/newsletter/newsletter.html'
  })
  .state('newsletter.signup', {
    url:'/signup',
    templateUrl: 'src/newsletter/signup.html',
    controller: 'SignUpController',
    controllerAs: 'signUpCtrl'
  });



}


})();
