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
    }

    function novaCervejaController($state, cervejaService) {
        var vm = this;

        vm.salvar = function () {
            cervejaService.post(vm.model)
                .then(function (res) {
                    if (HTTP_STATUS_CREATED === res.status) {
                        $state.go('home');
                    }
                }).catch(function (res) {
                    if (HTTP_STATUS_CONFLICT === res.status) {
                        console.log('Leandro Bitencourt');
                    } else {
                        console.log(res);
                        $state.go('error500');
                    }
                });
        };
    }

    mainController.$inject = ['$rootScope', 'resourcesFactory'];
    homeController.$inject = ['cervejaService'];
    novaCervejaController.$inject = ['$state', 'cervejaService'];

    angular.module('producaoCerveja')
        .controller('mainController', mainController)
        .controller('homeController', homeController)
        .controller('novaCervejaController', novaCervejaController);
})(angular);