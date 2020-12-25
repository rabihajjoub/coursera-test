(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://mysterious-eyrie-18795.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
