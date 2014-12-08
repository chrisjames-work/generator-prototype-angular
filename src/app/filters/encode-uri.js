/**
 * Filter for encoding uri string
 *
 * @class app/filters/EncodeUriFilter
 */
define(function () {
    'use strict';

    var EncodeUriFilter = function ($window) {
        return $window.encodeURIComponent;
    };

    EncodeUriFilter.$inject = ['$window'];

    return EncodeUriFilter;
});
