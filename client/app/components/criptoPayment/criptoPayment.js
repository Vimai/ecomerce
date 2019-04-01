import angular from 'angular';
import uiRouter from 'angular-ui-router';
import criptoPaymentComponent from './criptoPayment.component';

let criptoPaymentModule = angular.module('criptoPayment', [
  uiRouter
])

  .config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('criptoPayment', {
      url: '/criptoPayment',
      component: 'criptoPayment'
    });
})

.component('criptoPayment', criptoPaymentComponent)

.name;

export default criptoPaymentModule;
