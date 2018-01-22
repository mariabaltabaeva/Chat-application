(function() {
    function MyCtrl($scope, Room) {
      $scope.rooms = Room.all;
      this.rooms = Room.all;
    }

    angular
        .module('blocChat')
        .controller('MyCtrl', ['$scope', 'Room', MyCtrl]);
})();
