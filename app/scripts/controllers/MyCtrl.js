(function() {
    function MyCtrl($scope, Room) {
        // controller logic
    }

    angular
        .module('blocChat')
        .controller('MyCtrl', [$scope, Room, MyCtrl]);
})();
