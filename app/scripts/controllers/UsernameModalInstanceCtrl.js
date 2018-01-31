(function() {

    function UsernameModalInstanceCtrl($uibModalInstance) {
       this.setUserName = function() {

            $uibModalInstance.close(this.username);
        };

    }

    angular
        .module('blocChat')
        .controller('UsernameModalInstanceCtrl', ['$uibModalInstance', UsernameModalInstanceCtrl]);
})();
