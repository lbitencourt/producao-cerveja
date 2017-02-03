(function (angular) {
    'use strict';

    var homeState = {
        url: '/cervejas',
        templateUrl: 'views/home-view.html',
        controller: 'homeController',
        controllerAs: 'vm'
    };

    var novaCervejaState = {
        url: '/cervejas/nova',
        templateUrl: 'views/nova-cerveja-view.html',
        controller: 'novaCervejaController',
        controllerAs: 'vm'
    };

    var detalheCervejaState = {
        url: '/cerveja/{id}',
        templateUrl: 'views/detalhe-cerveja-view.html',
        controller: 'detalheCervejaController',
        controllerAs: 'vm'
    };

    var error403State = {
        url: '/errors/403',
        templateUrl: 'views/commons/403-view.html'
    };

    var error404State = {
        url: '/errors/404',
        templateUrl: 'views/commons/404-view.html'
    };

    var error500State = {
        url: '/errors/500',
        templateUrl: 'views/commons/500-view.html'
    };

    angular.module('producaoCerveja').config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('error403', error403State)
            .state('error404', error404State)
            .state('error500', error500State)
            .state('home', homeState)
            .state('detalheCerveja', detalheCervejaState)
            .state('novaCerveja', novaCervejaState);
    }]);
})(angular);