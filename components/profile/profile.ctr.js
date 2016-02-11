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
    
    // Makes a call to a public API route that
    // does not require authentication. We can 
    // avoid sending the JWT as an Authorization
    // header with skipAuthorization: true
    function getMessage() {
      $http.get('http://localhost:3001/api/public', {
        skipAuthorization: true 
      }).then(function(response) {
        vm.message = response.data.message;
      });
    }
    
    // Makes a call to a private endpoint that does 
    // require authentication. The JWT is automatically
    // sent with HTTP calls using jwtInterceptorProvider in app.js
    function getSecretMessage() {
      $http.get('http://localhost:3001/api/private').then(function(response) {
        vm.message = response.data.message;
      });
    }
    
  }
  
})();