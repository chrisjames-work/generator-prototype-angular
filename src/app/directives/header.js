/**
 * @fileOverview Header directive
 * @author <a href="mailto:chris@work.co">Chris James</a>
 */
define(function () {
  'use strict';

  /**
   * Header directive
   */
  var HeaderDirective = function () {
    return {
      restrict: 'A',
      replace: true,
      scope: true,
      controller: HeaderController,
      templateUrl: '/app/directives/header.tpl.html'
    };
  };

  /**
   * Controller for detail directive
   * @constructor
   */
  var HeaderController = function (
    $scope,
    localStorageService
    )
  {
    this._$scope = $scope;
    this._localStorageService = localStorageService;

    this._$scope.header = {
      isLoggedIn: (localStorageService.get('isLoggedIn')) ?
        localStorageService.get('isLoggedIn') : false,
      login: this.login.bind(this),
      logout: this.logout.bind(this)
    };
  };

  /**
   * Array of dependencies to be injected into controller
   * @type {Array}
   */
  HeaderController.$inject = [
    '$scope',
    'localStorageService'
  ];

  HeaderController.prototype.login = function () {
    this._$scope.header.isLoggedIn = true;
    this._localStorageService.set('isLoggedIn', true);
  };

  HeaderController.prototype.logout = function () {
    this._localStorageService.clearAll();

    window.location.href = '/';
  };

  return HeaderDirective;
});
