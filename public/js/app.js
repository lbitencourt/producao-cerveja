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
            HOME_CERVEJA_APAGAR: 'Apagar?',
            HOME_CERVEJA_REGISTRAR_LOTE: 'Novo lote?',
            HOME_CERVEJA_LOTES: 'Lotes',
            NOVA_CERVEJA_INCLUIR: 'Salvar',
            HOME_TABELA_CERVEJA_TITULO: 'Minhas cervejas',
        
            NOVA_CERVEJA_NOME_LABEL: 'Nome',
            NOVA_CERVEJA_NOME_PLACEHOLDER : 'Qual o nome da sua cerveja?',
            NOVA_CERVEJA_ESTILO_LABEL: 'Estilo',
            NOVA_CERVEJA_ESTILO_PLACEHOLDER: 'Qual o estilo?',
            NOVA_CERVEJA_SALVAR: 'Salvar'
        };
    }]);
})(angular);