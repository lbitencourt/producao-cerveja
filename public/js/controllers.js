(function (angular) {
    'use strict';

    function mainController($rootScope, resourcesFactory) {
        $rootScope.resources = resourcesFactory.resources;
    }

    function homeController(cervejaService) {
        var vm = this;
    }

    function cervejasController($state, cervejaService) {
        var vm = this;

        function atualizaTabela() {
            cervejaService.get().then(function (res) {
                vm.cervejas = res.data;
            });
        }

        atualizaTabela();

        vm.salvar = function () {
            cervejaService.post(vm.model)
                .then(function (res) {
                    if (HTTP_STATUS_CREATED === res.status) {
                        vm.model = {};
                        atualizaTabela();
                    }
                }).catch(function (res) {
                    if (HTTP_STATUS_CONFLICT === res.status) {
                    } else {
                        $state.go('error500');
                    }
                });
        };

        vm.excluir = function (id) {
            cervejaService.remove(id).then(function (res) {
                atualizaTabela();
            });
        };
    }

    function detalheCervejaController($stateParams, cervejaService, loteService) {
        var vm = this;
        var id = $stateParams.id;

        function getByIdThen(res) {
            vm.cerveja = res.data;

            loteService.get(id).then(function (res) {
                vm.lotes = res.data;
            });
        }

        cervejaService.getById(id).then(getByIdThen);
    }

    mainController.$inject = ['$rootScope', 'resourcesFactory'];
    homeController.$inject = ['cervejaService'];
    cervejasController.$inject = ['$state', 'cervejaService'];

    detalheCervejaController.$inject = [
        '$stateParams',
        'cervejaService',
        'loteService'];

    angular.module('producaoCerveja')
        .controller('mainController', mainController)
        .controller('homeController', homeController)
        .controller('detalheCervejaController', detalheCervejaController)
        .controller('cervejasController', cervejasController);

})(angular);