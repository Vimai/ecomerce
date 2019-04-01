import angular from 'angular';
import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import User from './user/user';
import Footersite from './footersite/footersite'

let commonModule = angular.module('app.common', [
  Navbar,
  Hero,
  User,
  Footersite
])
  
.name;

export default commonModule;
