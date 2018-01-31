(function() {

    function UsernameModalInstanceCtrl($uibModalInstanc) {
       this.setUserName = function() {

            $uibModalInstanc.close(this.username);
        };

    }

    angular
        .module('blocChat')
        .controller('UsernameModalInstanceCtrl', ['$uibModalInstance', UsernameModalInstanceCtrl]);
})();
