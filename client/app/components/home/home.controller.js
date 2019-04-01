class HomeController {
  constructor(products) {
    'ngInject';
    let list = products;


    this.name = 'home';

    this.produtos = list;
  }
}

export default HomeController;
