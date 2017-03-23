(function (angular) {
    'use strict';

    var homeState = {
        url: '/',
        templateUrl: 'views/home-view.html'
    };

    var cervejasState = {
        name: 'cervejas',
        url: '/cervejas',
        controller: 'cervejasController',
        controllerAs: 'vm',
        templateUrl: 'views/cervejas-view.html'
    };

    var novaCerveja = {
        name: 'novaCerveja',
        url: '/nova-cerveja',
        controller: 'novaCervejaController',
        controllerAs: 'vm',
        templateUrl: 'views/nova-cerveja-view.html'
    };

    var alteraCerveja = {
        name: 'alteraCerveja',
        url: '/altera-cerveja',
        controller: 'alteraCervejaController',
        controllerAs: 'vm',
        templateUrl: 'views/altera-cerveja-view.html'
    };

    var producoesState = {
        name: 'producoes',
        url: '/producoes',
        templateUrl: 'views/producoes-view.html'
    };

    var registroProducaoState = {
        name: 'registroProducao',
        url: '/registro-de-producao',
        templateUrl: 'views/registro-producao-view.html'
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
            .state(cervejasState)
            .state(novaCerveja)
            .state(alteraCerveja)
            .state(producoesState)
            .state(registroProducaoState);
    }]);
})(angular);
