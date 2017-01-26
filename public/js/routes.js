(function (angular) {
    'use strict';

    var homeState = {
        url: '/',
        templateUrl: 'views/home-view.html',
        controller: 'homeController',
        controllerAs: 'vm'
    };

    var novaCervejaState = {
        url: '/nova-cerveja',
        templateUrl: 'views/nova-cerveja-view.html',
        controller: 'novaCervejaController',
        controllerAs: 'vm'
    };

    var error403State = {
        url: '/errors/403',
        templateUrl: 'views/commons/403-view.html'
    };

    var error500State = {
        url: '/errors/500',
        templateUrl: 'views/commons/500-view.html'
    };

    angular.module('producaoCerveja').config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('error403', error403State)
            .state('error500', error500State)
            .state('home', homeState)
            .state('novaCerveja', novaCervejaState);
    }]);
})(angular);