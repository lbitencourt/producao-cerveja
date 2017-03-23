(function (angular) {
    'use strict';

    var resources = {
        APP_TITLE: 'Produção',
        APP_MENU_PRODUCAO: 'Suas produções?',
        APP_MENU_REGISTRO_PRODUCAO: 'Oba! Produziu?',
        APP_MENU_CERVEJA: 'Suas crias (Cervejas)?',
        APP_MENU_NOVA_CERVEJA: 'Estilo novo, isso?',
        APP_MENU_FERMENTACAO: 'O que está em produção?',

        CERVEJA_NOME_LABEL: 'Nome',
        CERVEJA_NOME_PLACEHOLDER: 'Qual o nome da sua cerveja?',
        CERVEJA_ESTILO_LABEL: 'Estilo',
        CERVEJA_ESTILO_PLACEHOLDER: 'Qual o estilo?',
        CERVEJA_OG_LABEL: 'OG',
        CERVEJA_OG_PLACEHOLDER: 'Ex. 1050',
        CERVEJA_FG_LABEL: 'FG',
        CERVEJA_FG_PLACEHOLDER: 'Ex. 1010',
        CERVEJA_ABV_LABEL: 'ABV',
        CERVEJA_ABV_PLACEHOLDER: 'Ex. 5.2',
        CERVEJA_IBU_LABEL: 'IBU',
        CERVEJA_IBU_PLACEHOLDER: 'Ex. 45',
        CERVEJA_SALVAR: 'Salvar', 
        CERVEJA_EXCLUIR: 'Excluir?',
        CERVEJA_PRODUCOES: 'Produções',
        CERVEJA_LISTA_TITULO : 'Suas cervejas',
        CERVEJA_NOVA_TITULO: 'Informe os dados da sua cerveja',

        CERVEJA_ALTERA_TITULO: 'Mudou alguma coisa?',

        PRODUCAO_REGISTRO_TITULO: 'Qual a sua cria de hoje?'
    };

    function resourcesFactory() {
        return {
            resources: resources
        };
    }

    angular.module('producaoCerveja').factory('resourcesFactory', resourcesFactory);
})(angular);