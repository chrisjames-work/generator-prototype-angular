/**
 * Home controller
 *
 * @class app/controllers/HomeCtrl
 * @param $scope
 */
define(function () {
  'use strict';

  var HomeCtrl = function (
    $scope,
    ResourceBundle
  ) {
    this._$scope = $scope;

    $scope.home = {
      list: ResourceBundle.homepageList
    };

    console.log('init home controller');
  };

  HomeCtrl.$inject = [
    '$scope',
    'ResourceBundle'
  ];

  return HomeCtrl;
});
