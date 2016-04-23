(function () {
    'use strict';

    angular
        .module('airtradeWebPlatform')
        .controller('stockBasicController', stockBasicController);

    stockBasicController.$inject = ['$scope', 'StockBasic'];

    function stockBasicController($scope, StockBasic) {
        $scope.StockBasic = StockBasic.query();
    }
})();
