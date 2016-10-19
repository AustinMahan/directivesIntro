// sample angular code

(function() {

  'use strict';

  angular
    .module('myApp', [
      'myApp.config',
      'myApp.components.main'
    ])
    .directive('pokeMans', function ($http) {
      var controller = ['$scope', function ($scope) {
        var vm = this;
        $http.get('http://pokeapi.co/api/v2/pokemon/' + Math.ceil(Math.random() * 200))
        .then((data) => {
          console.log(data);
          vm.sprite = data.data.sprites.front_default
          vm.name = data.data.name
        })
      }]
      return {
        controller: controller,
        scope: {
          get: '&'
        },
        controllerAs: 'vm',
        bindToController: true,
        templateUrl: 'js/components/card.html'
      };
    });

})();
