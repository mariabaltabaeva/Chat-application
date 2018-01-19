

    angular
        .module('blocChat',,['ui.router', 'ui.bootstrap'])
        .controller('createRoom', function ($uibModal, $log, $document) {

          $scope.showForm = function () {
            $scope.message = "Create new room";
            console.log($scope.message);
});
