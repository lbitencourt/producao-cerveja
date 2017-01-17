(function (angular) {
    'use strict';
    var app = angular.module('producaoCerveja', ['ui.router']);

    app.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
    });

    app.run(['$rootScope', function ($rootScope) {
        $rootScope.resources = {
            APP_TITLE: 'Produção',
            APP_MENU_CERVEJA: 'Minhas cervejas',
            APP_MENU_NOVA_CERVEJA: 'Nova cerveja',
            APP_MENU_LOTE: 'Meus lotes',

            HOME_CERVEJA_NOME : 'Nome',
            HOME_CERVEJA_ESTILO : 'Estilo',
            HOME_CERVEJA_OG: 'OG',
            HOME_CERVEJA_FG: 'FG',
            HOME_CERVEJA_ABV: 'ABV',
            HOME_CERVEJA_IBU: 'IBU',
        
            NOVA_CERVEJA_NOME_LABEL: 'Nome',
            NOVA_CERVEJA_NOME_PLACEHOLDER : 'Qual o nome da sua cerveja?',
            NOVA_CERVEJA_ESTILO_LABEL: 'Estilo',
            NOVA_CERVEJA_ESTILO_PLACEHOLDER: 'Qual o estilo?',
            NOVA_CERVEJA_SALVAR: 'Salvar'
        };
    }]);
})(angular);