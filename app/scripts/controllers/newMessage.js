(function() {
  function newMessage($cookies, Message, $scope) {
    $scope.send = function () {
       Message.send({content: $scope.message,
       username: $cookies.get('blocChatCurrentUser'), roomId: Message.roomId});
};
 };
angular
.module('blocChat')
.controller('newMessage', ['$cookies', 'Message', '$scope', newMessage]);

})();
