(function (angular) {
    'use strict';

    function cervejaService($http) {
        return {
            get: function () {
                return $http.get('/api/cervejas');
            },
            
            delete: function(id) {
                return $http.delete('/api/cervejas/' + id);
            },

            post: function(payload) {
                return $http.post('/api/cervejas', payload);
            }
        };
    }
    cervejaService.$inject = ['$http'];
    angular.module('producaoCerveja').service('cervejaService', cervejaService);
})(angular);