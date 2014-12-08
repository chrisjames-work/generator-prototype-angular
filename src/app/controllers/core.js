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

        console.log('go');
    };

    CoreCtrl.$inject = [
        '$scope'
    ];

    return CoreCtrl;
});
