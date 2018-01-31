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

    function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
        var $uibModalInstance = $uibModal.open({
             animation: this.animationsEnabled,
             templateUrl : '/templates/usernameModal.html',
             controller: 'UsernameModalInstanceCtrl',
             controllerAs: 'usernameModal'
         });

         $uibModalInstance.result.then(function(username) {
             $cookies.put('blocChatCurrentUser', username);
         }, function() {
             $log.info('Modal dismissed at ' + new Date());
         });
  }
    return currentUser;
}

   angular
   .module('blocChat',['ui.router', 'ui.bootstrap', 'firebase','ngCookies'])
   .run(['$cookies', '$uibModal', BlocChatCookies])
   .config(config);
  })();
