(function () {
    'use strict';
    angular.module('runner').config(initRouter);

    function initRouter($stateProvider, $locationProvider, $urlRouterProvider) {
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/home.html',
                controller: 'homeController',
                controllerAs: 'vm'
            })
            .state('runners', {
                url: '/runners',
                templateUrl: 'app/runners.html',
                controller: 'runnersController',
                controllerAs: 'vm'
            });
    }
})();

