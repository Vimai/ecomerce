class CheckoutController {
  constructor($state, $stateParams, products, $http) {
    'ngInject';
    this.$state = $state;
    this.paymentCoinCollapse = true;

    this.payOption = 'xpay';


    let id = Number.parseInt($stateParams.id) - 1

    this.list = products[id];

    let login = sessionStorage.getItem("login");
    this.$http = $http;

    if (login != null) {
      login = JSON.parse(login);
      this.email = login.email;
      this.name = login.name;
    }
    this.$http.get('https://api.exchange.3xbit.com.br/ticker/BRL/').then((response) => {
      let value = this.list.value;
      let btc_price = response.data.CREDIT_BTC.last;
      let aux = value / btc_price;

      aux = aux + 0.000000005;
      aux = aux.toFixed(8);
      this.aux = aux;
    });
  }

  createOrder() {
    let login = sessionStorage.getItem("login");
    login = JSON.parse(login);

    if (login != null) {

      let usuario = localStorage.getItem(login.email);

      let json = {};
      json.address = 'CG9DEyfZgwq2aFZpYhzYW8AEN6FxtHi6wt';
      json.price = this.list.value;
      json.date = new Date();

      json.priceCripto = this.aux;

      if (usuario == null) {
        json.order = 1;
        let items = [];
        items.push(json);
        localStorage.setItem(login.email, JSON.stringify(items));
      } else {
        let tx = localStorage.getItem(login.email);
        tx = JSON.parse(tx);
        json.order = tx.length + 1;
        tx.push(json);
        localStorage.setItem(login.email, JSON.stringify(tx));
      }

      this.$state.go('criptoPayment');
    } else {
      this.$state.go('login');
    }

  }
}

export default CheckoutController;
