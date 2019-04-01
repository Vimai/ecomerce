import angular from 'angular';
import uiRouter from 'angular-ui-router';
import footersiteComponent from './footersite.component';

let footersiteModule = angular.module('footersite', [
  uiRouter
])

.component('footersite', footersiteComponent)
  
.name;

export default footersiteModule;
