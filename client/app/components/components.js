import angular from 'angular';
import About from './about/about';
import Cart from './cart/cart';
import Checkout from './checkout/checkout';
import CriptoPayment from './criptoPayment/criptoPayment';
import History from './history/history';
import Home from './home/home';
import Login from './login/login';
import Product from './product/product';
import Signup from './signup/signup';


let componentModule = angular.module('app.components', [
  About,
  Cart,
  Checkout,
  CriptoPayment,
  History,
  Home,
  Login,
  Product,
  Signup,
])

  .name;

export default componentModule;
