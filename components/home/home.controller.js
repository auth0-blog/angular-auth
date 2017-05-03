(function () {

  'use strict';

  angular
    .module('app')
    .controller('HomeController', homeController);

  homeController.$inject = ['authService', '$http'];

  function homeController(authService, $http) {

    var vm = this;
    vm.auth = authService;

    vm.getMessage = function() {
      $http.get('http://localhost:3001/api/public').then(function(response) {
        vm.message = response.data.message;
      });
    }
    
    // Makes a call to a private endpoint.
    // We will append our access_token to the call and the backend will
    // verify that it is valid before sending a response.
    vm.getSecretMessage = function() {
      $http.get('http://localhost:3001/api/private', {headers : {
        Authorization: 'Bearer ' + localStorage.getItem('access_token')
      }}).then(function(response) {
        vm.message = response.data.message;
      }).catch(function(error){
        vm.message = "You must be logged in to access this resource."
      });
    }

  }

})();
