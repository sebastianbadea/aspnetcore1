(function () {
    'use strict';
    var app = angular.module('runner');

    function runnersController($http) {
        var vm = this;
        vm.runners = [];

        function activate() {
            $http.get('/api/runner')
            .then(function (response) {
                vm.runners = response.data;
            })
            .catch(function (err) {
                console.log(err);
            });
        }
    }

    app.controller('runnersController', ['$http', runnersController]);
})();