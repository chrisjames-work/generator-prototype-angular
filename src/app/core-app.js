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

  // directives
  'directives/window',
  'directives/prevent-default',

  // services
  'services/window',
  'services/utils',
  'services/pubsub',

  // filters
  'filters/encode-uri',

  'angular',
  'angular-route'
], function (
  RouteConfig,

  // controllers
  CoreCtrl,

  // directives
  WindowDirective,
  PreventDefaultDirective,

  // services
  windowService,
  utilsService,
  pubSubService,

  // filters
  EncodeUriFilter,

  angular
) {
  'use strict';

  angular.module('coreApp', [
    'ngRoute'
  ])

    // Set up routing
    .config(RouteConfig)

    /**
     * Injects {@link lorax/controllers/CoreCtrl} as 'CoreCtrl'
     * @method lorax/loraxApp~controller
     */
    .controller('CoreCtrl', CoreCtrl)

    /**
     * Injects {@link lorax/directives/WindowDirective} as 'WindowDirective'
     * @method lorax/loraxApp~directive
     */
    .directive('appWindow', WindowDirective)

    /**
     * Injects {@link lorax/directives/WindowDirective} as 'WindowDirective'
     * @method lorax/loraxApp~directive
     */
    .directive('appPreventDefault', PreventDefaultDirective)

    /**
     * Inject {@link lorax/services/windowService} as 'windowService'
     * @method lorax/loraxApp~service
     */
    .service('windowService', windowService)

    /**
     * Inject {@link lorax/services/utilsService} as 'utilsService'
     * @method lorax/loraxApp~service
     */
    .service('utilsService', utilsService)

    /**
     * Inject {@link lorax/services/pubSubService} as 'pubSubService'
     * @method lorax/loraxApp~factory
     */
    .factory('pubSubService', pubSubService)

    /**
     * Inject {@link lorax/services/encodeUriFilter} as 'encodeUri'
     * @method lorax/loraxApp~filter
     */
    .filter('encodeUri', EncodeUriFilter);

  /**
   * Bootstrap the application
   */
  return angular.bootstrap(document, ['coreApp']);
});
