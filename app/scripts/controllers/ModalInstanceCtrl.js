(function() {

    function ModalInstanceCtrl($uibModalInstance) {
       this.submit = function() {
            // Don't forget to use ng-model to bind the
            //   input text box to modal.roomName
            $uibModalInstance.close(this.roomName);
        };

       this.cancel = function() {
            // We close the popup window using the
            //   $uibModalInstance service's `dismiss`
            //   and `close` functions
            $uibModalInstance.dismiss('cancel');
       };
    }

    angular
        .module('blocChat')
        .controller('ModalInstanceCtrl', ['$uibModalInstance', ModalInstanceCtrl]);
})();
