 (function() {
   function config($locationProvider, $stateProvider) {
         $locationProvider
             .html5Mode({
                 enabled: true,
                 requireBase: false
              });

          $stateProvider
    .state('controller', {
        url: '/',
        controller: 'MyCtrl as controller',
        templateUrl: '/templates/myCtrl.html'
    });
  }
   angular
   .module('blocChat')
   .config(config);
  })();
