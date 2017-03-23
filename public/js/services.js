(function (angular) {
    'use strict';

    function cervejaService($http) {
        return {
            get: function () {
                return $http.get('/api/cervejas');
            },

            remove: function (id) {
                return $http.delete('/api/cervejas/' + id);
            },

            post: function (payload) {
                return $http.post('/api/cervejas', payload);
            },

            update: function (id, payload) {
                return $http.put('/api/cervejas/' + id, payload);
            },
            
            getById: function (id) {
                return $http.get('/api/cervejas/' + id);
            }
        };
    }

    function loteService($http) {
        return {
            get: function (id) {
                return $http.get('/api/cervejas/' + id + '/lotes');
            }
        };
    }

    cervejaService.$inject = ['$http'];
    loteService.$inject = ['$http'];

    angular.module('producaoCerveja')
        .service('loteService', loteService)
        .service('cervejaService', cervejaService);
})(angular);