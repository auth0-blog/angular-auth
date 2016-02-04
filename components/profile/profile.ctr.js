(function() {
  
  'use strict';
  
  angular
    .module('authApp')
    .controller('profileController', profileController);
    
  function profileController($http) {
    
    var vm = this;
    vm.getMessage = getMessage;
    vm.getSecretMessage = getSecretMessage;
    vm.message;
    
    vm.profile = JSON.parse(localStorage.getItem('profile'));
    
    function getMessage() {
      $http.get('http://localhost:3001/api/public', {
        skipAuthorization: true 
      }).then(function(response) {
        vm.message = response.data.message;
      });
    }
    
    function getSecretMessage() {
      $http.get('http://localhost:3001/api/private').then(function(response) {
        vm.message = response.data.message;
      });
    }
    
  }
  
})();