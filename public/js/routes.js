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
        controller : 'novaCervejaController',
        controllerAs: 'vm'
    };

    angular.module('producaoCerveja').config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('home', homeState)
            .state('novaCerveja', novaCervejaState);
    }]);
})(angular);