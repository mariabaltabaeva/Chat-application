(function() {
    function MyCtrl($scope, Room) {
      $scope.rooms = Room.all;
      this.rooms = Room.all
    }

    angular
        .module('blocChat',,['ui.router', 'ui.bootstrap'])
        .controller('MyCtrl', ['$scope', 'Room', 'MyCtrl']);
})();
