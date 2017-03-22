(function (angular) {
    'use strict';
    
    var resources = {
        APP_TITLE: 'Produção',
        APP_MENU_PRODUCOES: 'Produções',
        APP_MENU_CERVEJAS: 'Cervejas',
    
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
        CERVEJA_SALVAR: 'Salvar'
    };

    function resourcesFactory() {
        return {
            resources: resources
        };
    }

    angular.module('producaoCerveja').factory('resourcesFactory', resourcesFactory);
})(angular);