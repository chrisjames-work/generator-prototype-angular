/**
 * Core controller
 *
 * @class app/controllers/CoreCtrl
 * @param $scope
 */
define(function () {
  'use strict';

  /*jshint unused: false */
  var CoreCtrl = function (
      $scope
  ) {
    this._$scope = $scope;

    $scope.core = {
      test: true
    };

    console.log('init core controller');
  };

  CoreCtrl.$inject = [
    '$scope'
  ];

  return CoreCtrl;
});
