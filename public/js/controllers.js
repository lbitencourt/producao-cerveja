(function (angular) {
    'use strict';

    function mainController($rootScope, resourcesFactory) {
        $rootScope.resources = resourcesFactory.resources;
    }

    function homeController() {
    }

    function registroProducaoController($rootScope, $interpolate, $state, $stateParams) {
        var vm = this;
        var resources = $rootScope.resources;

        vm.cerveja = $stateParams.cerveja;

        if (!vm.cerveja) {
            return $state.go('404');
        }
    }

    function novaCervejaController($state, cervejaService) {
        var vm = this;

        vm.salvar = function () {
            cervejaService.post(vm.model).then(function (res) {
                $state.go('cervejas');
            });
        };
    }

    function alteraCervejaController($state, $stateParams, cervejaService) {
        var vm = this;

        vm.model = $stateParams.cerveja;

        if (!vm.model) {
            return $state.go('404');
        }

        vm.salvar = function () {
            cervejaService.update(vm.model._id, vm.model).then(function (res) {
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

    angular.module('producaoCerveja')
        .controller('mainController', mainController)
        .controller('homeController', homeController)
        .controller('registroProducaoController', registroProducaoController)
        .controller('novaCervejaController', novaCervejaController)
        .controller('alteraCervejaController', alteraCervejaController)
        .controller('cervejasController', cervejasController);
})(angular);