(function() {
    function newMessage($uibModalInstance, Message) {
      this.send = function() {

           $uibModalInstance.close(this.message);

     this.setUserName = currentUser;
   }
}

    angular
        .module('blocChat')
        .controller('newMessage', ['$uibModalInstance', newMessage])
        
})();
