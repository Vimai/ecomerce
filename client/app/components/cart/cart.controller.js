class CartController {
  constructor($stateParams, products) {
    'ngInject';

    let id = Number.parseInt($stateParams.id)-1

    this.list = products[id];
  }
}

export default CartController;
