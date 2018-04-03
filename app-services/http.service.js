(function () {
    'use strict';

    angular
        .module('app')
        .factory('jwtInjector', [function() {
            return {
              request: function(config) {
                // config.url = httpService.baseUrl + config.url;
                // if (!UserService.getUserToken()) {
                //   config.headers['Authorization'] = UserService.getUserToken();
                // }
                 config.headers['Authorization'] = localStorage.getItem("token");
                return config;
              }
            };
        }])
        .factory('HttpService', HttpService);

    HttpService.$inject = ['$http'];
    function HttpService($http) {
      var service = {};

      service.baseUrl = "http://192.168.0.136:8080/ToDo/";

      return service;
    }
  })();
