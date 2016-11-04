(function () {
    'use strict';
    var app = angular.module('runner');

    function runnersController($http) {
        //the directives in html must use the 'vm' prefix
        //the alternative would be to use the '$scope' service; in this case, there is no need for 'vm' prefix
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

        activate();
    }

    app.controller('runnersController', ['$http', runnersController]);
})();