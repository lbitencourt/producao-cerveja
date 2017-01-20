(function (angular) {
    'use strict';

    function mainController() {

    }

    function homeController(cervejaService) {
        var vm = this;

        function atualizaTabelaCerveja() {
            cervejaService.get().then(function (result) {
                vm.cervejas = result.data;
            });
        }

        function removeCervejaTabela(id) {
            vm.cervejas = vm.cervejas.filter(function (cerveja) {
                return id !== cerveja._id;
            });
        }

        atualizaTabelaCerveja();

        vm.excluir = function (id) {
            cervejaService.delete(id).then(function (result) {
                if (204 === result.status) {
                    removeCervejaTabela(id);
                } else {

                }
            });
        };

        vm.salvar = function (cerveja) {
            cervejaService.post(cerveja).then(function (result) {
                if (201 === result.status) {
                    vm.cervejas.push(result.data);
                    delete vm.cerveja;
                }
            });
        }
    }

    function novaCervejaController(cervejaService) {
        var vm = this;
        vm.salvar = function () {
            cervejaService.post(vm.model).then(function (result) {

            });
        };
    }

    homeController.$inject = ['cervejaService'];
    novaCervejaController.$inject = ['cervejaService'];

    angular.module('producaoCerveja')
        .controller('mainController', mainController)
        .controller('homeController', homeController)
        .controller('novaCervejaController', novaCervejaController);
})(angular);