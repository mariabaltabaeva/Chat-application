(function() {
    function MyCtrl($scope, Room, Message) {
      $scope.rooms = Room.all;
      this.rooms = Room.all;


    this.goToRoom = function(roomId) {
     $scope.messages = Message.getByRoomId(roomId);
     console.log("Going to room " + roomId);
     console.log("Found " + $scope.messages.length + " messages.");
   }
   }

    angular
        .module('blocChat')
        .controller('MyCtrl', ['$scope', 'Room', 'Message', MyCtrl]);
})();
