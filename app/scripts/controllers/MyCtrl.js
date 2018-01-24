(function() {
    function MyCtrl($scope, Room) {
      $scope.rooms = Room.all;
      this.rooms = Room.all;
    }


    this.goToRoom = function(roomId) {
     $scope.messages = Message.all;
     console.log("Going to room " + roomId);
   }

    angular
        .module('blocChat')
        .controller('MyCtrl', ['$scope', 'Room', MyCtrl]);
})();
