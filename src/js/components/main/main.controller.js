(function() {

  'use strict';

  angular
    .module('myApp.components.main', [])
    .controller('mainController', mainController);

  mainController.$inject = ['$scope', '$http'];

  function mainController($scope, $http) {
    /*jshint validthis: true */
  }

})();
