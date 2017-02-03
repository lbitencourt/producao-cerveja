(function (angular) {
    'use strict';

    function mainController($rootScope, resourcesFactory) {
        $rootScope.resources = resourcesFactory.resources;
    }

    function homeController(cervejaService) {
        var vm = this;

        function atualizaTabelaCerveja() {
            cervejaService.get().then(function (result) {
                vm.cervejas = result.data;
            });
        }

        atualizaTabelaCerveja();

        vm.excluir = function (id) {
            cervejaService.remove(id).then(function (result) {
                atualizaTabelaCerveja();
            });
        };
    }

    function novaCervejaController($state, cervejaService) {
        var vm = this;

        vm.salvar = function () {
            cervejaService.post(vm.model)
                .then(function (res) {
                    if (HTTP_STATUS_CREATED === res.status) {
                        $state.go('home');
                    } else {

                    }
                }).catch(function (res) {
                    if (HTTP_STATUS_CONFLICT === res.status) {

                    } else {
                        console.log(res);
                        $state.go('error500');
                    }
                });
        };
    }

    function detalheCervejaController($stateParams, cervejaService, loteService) {
        var vm = this;
        var id = $stateParams.id;

        function getByIdThen(res) {
            vm.cerveja = res.data;

            loteService.get(id).then(function(res){
                vm.lotes = res.data;
            });
        }
        cervejaService.getById(id)
            .then(getByIdThen);
    }

    mainController.$inject = ['$rootScope', 'resourcesFactory'];
    homeController.$inject = ['cervejaService'];
    novaCervejaController.$inject = ['$state', 'cervejaService'];
    detalheCervejaController.$inject = [
        '$stateParams',
        'cervejaService',
        'loteService'];

    angular.module('producaoCerveja')
        .controller('mainController', mainController)
        .controller('homeController', homeController)
        .controller('detalheCervejaController', detalheCervejaController)
        .controller('novaCervejaController', novaCervejaController);
})(angular);