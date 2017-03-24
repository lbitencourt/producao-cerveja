(function (angular) {
    'use strict';

    var resources = {
        APP_TITLE: 'Produção',
        APP_MENU_PRODUCAO: 'Minhas produções',
        APP_MENU_CERVEJA: 'Minhas crias',
        APP_MENU_NOVA_CERVEJA: 'Um novo estilo?',
        APP_MENU_FERMENTACAO: 'O que está em produção?',

        CERVEJA_NOME_LABEL: 'Nome',
        CERVEJA_NOME_PLACEHOLDER: 'Qual cerveja?',
        CERVEJA_ESTILO_LABEL: 'Estilo',
        CERVEJA_ESTILO_PLACEHOLDER: 'Qual o estilo?',
        CERVEJA_OG_LABEL: 'OG',
        CERVEJA_OG_PLACEHOLDER: 'Ex. 1.050',
        CERVEJA_SG_LABEL: 'SG',
        CERVEJA_SG_PLACEHOLDER: 'Ex. 1.046',
        CERVEJA_FG_LABEL: 'FG',
        CERVEJA_FG_PLACEHOLDER: 'Ex. 1.010',
        CERVEJA_ABV_LABEL: 'ABV',
        CERVEJA_ABV_PLACEHOLDER: 'Ex. 5.2',
        CERVEJA_IBU_LABEL: 'IBU',
        CERVEJA_IBU_PLACEHOLDER: 'Ex. 45',
        CERVEJA_SALVAR: 'Salvar',
        CERVEJA_EXCLUIR: 'Excluir?',
        CERVEJA_LISTA_TITULO: 'Suas cervejas',
        CERVEJA_NOVA_TITULO: 'Informe os dados da sua cerveja',

        CERVEJA_ALTERA_TITULO: 'Mudou algum parâmetro?',

        PRODUCAO_REGISTRO_TITULO: 'Brassou uma {{nome}}?',
        PRODUCAO_REGISTRO: 'Brassou?'
    };

    function resourcesFactory() {
        return {
            resources: resources
        };
    }

    angular.module('producaoCerveja').factory('resourcesFactory', resourcesFactory);
})(angular);