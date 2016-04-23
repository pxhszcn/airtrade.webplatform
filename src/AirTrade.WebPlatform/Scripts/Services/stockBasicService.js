(function () {
    'use strict';

    var stockBasicsService = angular.module('stockBasicService', ['ngResource']);
    stockBasicsService.factory('StockBasic', ['$resource',
        function ($resource) {
            return $resource('/api/stockbasic', {}, {
                query: { method: 'GET', params: {}, isArray: true }
            });
        }
    ]);
})();