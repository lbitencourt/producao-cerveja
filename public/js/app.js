var HTTP_STATUS_OK = 200;
var HTTP_STATUS_CREATED = 201;
var HTTP_STATUS_CONFLICT = 409;

(function (angular) {
    'use strict';
    var app = angular.module('producaoCerveja', ['ui.router']);

    app.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/cervejas');
    });

    app.run(['$rootScope', function ($rootScope) {}]);
})(angular);