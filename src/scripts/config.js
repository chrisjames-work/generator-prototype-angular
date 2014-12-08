/* global require:true */
(function (require) {
    'use strict';

    require.config({
        baseUrl: '/app/',

        name: '../scripts/components/almond/almond',

        paths: {
            'angular': '../scripts/components/angular/angular',
            'angular-route': '../scripts/components/angular-route/angular-route',
            'jquery': '../scripts/components/jquery/jquery',
            'modernizr': '../scripts/modernizr',
            'pubsub': '../scripts/components/jquery-tiny-pubsub/tiny-pubsub',
            'utils': '../scripts/utils'
        },

        include: ['core-app'],

        insertRequire: ['core-app'],

        shim: {
            'angular': {
                exports: 'angular',
                deps: ['jquery']
            },
            'angular-route': {
                deps: ['angular']
            },
            'pubsub': {
                deps: ['jquery']
            },
            'modernizr': {
                exports: ['Modernizr']
            }
        },

        deps: ['core-app'],

        wrap: true

    });

}(require));
