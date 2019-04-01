import angular from 'angular';
import uiRouter from 'angular-ui-router';
import productComponent from './product.component';

let productModule = angular.module('product', [
  uiRouter
])

  .config(($stateProvider, $urlRouterProvider) => {
    "ngInject";

    $stateProvider
      .state('product', {
        url: '/product/:id',
        component: 'product'
      });
  })

  .component('product', productComponent)
  .constant('products', [{"id": 1, "name": "Revista", "value": "2.55", "description": "Revista"},
    {"id": 2, "name": "Revista 2", "value": "4.99", "description": "Revista 2"},
    {"id": 3, "name": "Revista 3", "value": "29.90", "description": "Revista 3"},
    {"id": 4, "name": "Revista 4", "value": "20.00", "description": "Revista 4"},
    {"id": 5, "name": "Revista 5", "value": "8.88", "description": "Revista 5"},
    {"id": 6, "name": "Revista 6", "value": "15.00", "description": "Revista 6"},
    {"id": 7, "name": "Revista 7", "value": "100.00", "description": "Revista 7"},
    {"id": 8, "name": "Revista 8", "value": "200.00", "description": "Revista 8"},
    {"id": 9, "name": "Revista 9", "value": "500.00", "description": "Revista 9"},])

  .name;

export default productModule;
