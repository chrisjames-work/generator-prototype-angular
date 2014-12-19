/**
 * coreApp is the core module.
 * It serves as bootstrap for the app.
 *
 * @mixin coreApp
 *
 */
define([
  'config/routes',

  // controller
  'controllers/core',
  'controllers/home',

  // directives
  'directives/window',
  'directives/prevent-default',
  'directives/header',

  // services
  'services/window',
  'services/utils',
  'services/pubsub',

  // filters
  'filters/encode-uri',

  // constants
  'constants/resource-bundle',

  'angular',
  'angular-route',
  'angular-local-storage'
], function (
  RouteConfig,

  // controllers
  CoreCtrl,
  HomeCtrl,

  // directives
  WindowDirective,
  PreventDefaultDirective,
  HeaderDirective,

  // services
  windowService,
  utilsService,
  pubSubService,

  // filters
  EncodeUriFilter,

  // constants
  ResourceBundle,

  angular
) {
  'use strict';

  angular.module('coreApp', [
    'ngRoute',
    'LocalStorageModule'
  ])

    // Set up routing
    .config(RouteConfig)

    /**
     * Injects {@link controllers/CoreCtrl} as 'CoreCtrl'
     * @method coreApp~controller
     */
    .controller('CoreCtrl', CoreCtrl)

    /**
     * Injects {@link controllers/HomeCtrl} as 'HomeCtrl'
     * @method coreApp~controller
     */
    .controller('HomeCtrl', HomeCtrl)

    /**
     * Injects {@link directives/WindowDirective} as 'appWindow'
     * @method coreApp~directive
     */
    .directive('appWindow', WindowDirective)

    /**
     * Injects {@link directives/PreventDefaultDirective} as 'appPreventDefault'
     * @method coreApp~directive
     */
    .directive('appPreventDefault', PreventDefaultDirective)

    /**
     * Injects {@link directives/HeaderDirective} as 'appHeader'
     * @method coreApp~directive
     */
    .directive('appHeader', HeaderDirective)

    /**
     * Inject {@link services/windowService} as 'windowService'
     * @method coreApp~service
     */
    .service('windowService', windowService)

    /**
     * Inject {@link services/utilsService} as 'utilsService'
     * @method coreApp~service
     */
    .service('utilsService', utilsService)

    /**
     * Inject {@link services/pubSubService} as 'pubSubService'
     * @method coreApp~factory
     */
    .factory('pubSubService', pubSubService)

    /**
     * Inject {@link lorax/services/encodeUriFilter} as 'encodeUri'
     * @method coreApp~filter
     */
    .filter('encodeUri', EncodeUriFilter)

    // For this simple implementation we can
    // consider the resource bundle as a constant.
    .constant('ResourceBundle', ResourceBundle);

  /**
   * Bootstrap the application
   */
  return angular.bootstrap(document, ['coreApp']);
});
