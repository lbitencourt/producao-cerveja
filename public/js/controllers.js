(function (angular) {
    'use strict';

    function mainController() {           

     }

    function homeController(cervejaService) {
        var vm = this;

        cervejaService.get().then(function (result) {
            vm.cervejas = result.data;
        });

        vm.excluir = function(id) {
            cervejaService.delete(id).then(function(result){
            });
        };
    }

    function novaCervejaController(cervejaService) {
        var vm = this;
        vm.salvar = function() {
            cervejaService.post(vm.model).then(function(result){
                
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