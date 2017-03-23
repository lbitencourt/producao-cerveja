(function (angular) {
    'use strict';

    function mainController($rootScope, resourcesFactory) {
        $rootScope.resources = resourcesFactory.resources;
    }

    function homeController() {
    }

    function novaCervejaController($state, cervejaService) {
        var vm = this;

        vm.salvar = function () {
            cervejaService.post(vm.model).then(function (res) {
                $state.go('cervejas');
            });
        };
    }

    function cervejasController($state, cervejaService) {
        var vm = this;

        function atualizaTabela() {
            cervejaService.get().then(function (res) {
                vm.cervejas = res.data;
            });
        }

        atualizaTabela();

        vm.excluir = function (id) {
            cervejaService.remove(id).then(function (res) {
                atualizaTabela();
            });
        };
    }

    mainController.$inject = ['$rootScope', 'resourcesFactory'];
    homeController.$inject = [];
    cervejasController.$inject = ['$state', 'cervejaService'];

    angular.module('producaoCerveja')
        .controller('mainController', mainController)
        .controller('homeController', homeController)
        .controller('novaCervejaController', novaCervejaController)
        .controller('cervejasController', cervejasController);
})(angular);