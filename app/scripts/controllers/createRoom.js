(function() {
    function CreateRoomCtrl($uibModal, Room) {
       this.open = function() {
            // open an instance of the modal and store it in
            //   the variable modalInstance
            var modalInstance = $uibModal.open({
                templateUrl : '/templates/modal.html',
                controller: 'ModalInstanceCtrl',
                controllerAs: 'modal'
            });

           // add a promise to the modal instance; these functions
           //   will run when the modal instance returns a result
           modalInstance.result.then(function(name) {
               // This function runs when the modal instance
               //   is submitted
               this.room = name;
               Room.add(this.room);
           }, function() {
               // This function runs when the modal instance
               //   is canceled or dismissed
           });
       };
    }

    angular
        .module('blocChat')
        .controller('CreateRoomCtrl', ['$uibModal', 'Room', CreateRoomCtrl]);
})();
