angular.module('ui.bootstrap.demo').controller('ModalDemoCtrl', function ($uibModal, $log, $document) {
  var $ctrl = this;
  $ctrl.items = "Hello World";


      var modalInstance = $uibModal.open({
                       templateUrl: 'view/sample.html',
                       controller: 'testController',// a controller for modal instance
                       controllerUrl: 'controller/test-controller', // can specify controller url path
                       controllerAs: 'ctrl', //  controller as syntax
                       windowClass: 'clsPopup', //  can specify the CSS class
                       keyboard: false, // ESC key close enable/disable
                       resolve: {
                           actualData: function () {
                               return self.sampleData;
                           }
                       } // data passed to the controller
                   }).result.then(function (data) {
                       //do logic
                   }, function () {
                       // action on popup dismissal.
                   });
