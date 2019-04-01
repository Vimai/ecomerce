import angular from 'angular';
import uiRouter from 'angular-ui-router';
import historyComponent from './history.component';

let historyModule = angular.module('history', [
  uiRouter
])

  .config(($stateProvider, $urlRouterProvider) => {
    "ngInject";

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('history', {
        url: '/history',
        component: 'history'
      });
  })

  .component('history', historyComponent)

  .name;

export default historyModule;
