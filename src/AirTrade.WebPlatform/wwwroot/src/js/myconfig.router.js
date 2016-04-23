'use strict';

/**
 * Config for the router
 */
angular.module('app')
    .run(
        [          '$rootScope', '$state', '$stateParams',
            function ($rootScope,   $state,   $stateParams) {
                $rootScope.$state = $state;
                $rootScope.$stateParams = $stateParams;
            }
        ]
    )
    .config(
        [          '$stateProvider', '$urlRouterProvider', 'JQ_CONFIG',
            function ($stateProvider,   $urlRouterProvider, JQ_CONFIG) {

                $urlRouterProvider
                    .otherwise('/app/dashboard');
                $stateProvider
                    .state('app', {
                        abstract: true,
                        url: '/app',
                        templateUrl: 'tpl/myapp.html'
                    })
                    .state('app.dashboard', {
                        url: '/dashboard',
                        templateUrl: 'tpl/myapp_dashboard.html'
                    })

                    // app.buy
                    .state('app.buy', {
                        url: '/buy',
                        templateUrl: 'tpl/mybuy.html',
                        controller: 'SelectCtrl',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load('ui.select').then(
                                        function() {
                                            return $ocLazyLoad.load('js/controllers/select.js');
                                        }
                                    );
                                }
                            ]
                        }
                    })
            }
        ]
    );
