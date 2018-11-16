(function() {
  function newMessage($cookies, Message, $scope) {
    Message.send({content: $scope.message,
      username: $cookies.get('blocChatCurrentUser')});
};

angular
.module('blocChat')
.controller('newMessage', ['$cookies', 'Message', '$scope', newMessage]);

})();
