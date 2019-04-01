class CriptoPaymentController {
  constructor($state, $http, $scope) {
    'ngInject';
    this.$state = $state;
    this.$scope = $scope;
    this.name = 'criptoPayment';
    this.wallet_qrcode_url = 'CG9DEyfZgwq2aFZpYhzYW8AEN6FxtHi6wt';

    let login = sessionStorage.getItem("login");
    login = JSON.parse(login);


    let tx = localStorage.getItem(login.email);
    tx = JSON.parse(tx);

    let lastOrder = tx[tx.length - 1];

    this.address = lastOrder.address;
    this.price = lastOrder.priceCripto;

    let date = new Date(lastOrder.date);

    date.setHours(date.getHours() + 1);

    let x = setInterval(() => {

        let now = new Date().getTime();

        let distance = date - now;

        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        this.timeLeft = minutes + "m " + seconds + "s";

        if (distance < 0) {
          this.timeLeft = 'EXPIRED';
          this.address = '';

          clearInterval(x);
          let main = document.getElementById("main");

          let page_container = document.getElementById("page_container");

          let tittle = document.createElement("h1");
          tittle.classList.add("display-4")

          let text = document.createTextNode("O tempo programado expirou");
          tittle.appendChild(text);

          let element = document.createElement("div");
          element.classList.add("container");
          element.classList.add("h-100");
          element.classList.add("align-field");

          let row = document.createElement("div");
          row.classList.add("row");
          row.classList.add("h-100");
          row.classList.add("justify-content-center");

          let col = document.createElement("div");
          col.classList.add("col-10");

          col.appendChild(tittle);

          let content = document.createElement("h6");
          text = document.createTextNode("Este pagamento expirou devido à falta de confirmação antes do limite de" +
            " tempo ou devido a não enviar fundos suficientes. Se você enviou algum dinheiro, você receberá" +
            " um e mail para reclamá-lo dentro de 8 horas após a confirmação.");

          let div_content = document.createElement("div");
          div_content.classList.add("container");

          content.appendChild(text);
          div_content.appendChild(content)
          col.appendChild(div_content);
          row.appendChild(col);
          element.appendChild(row);

          page_container.replaceChild(element, main);
        }
        this.$scope.$apply();
      }
      , 1000);

  }

  copyAddress() {
    let copyText = document.getElementById("wallet_qrcode");
    copyText.select();
    document.execCommand("copy");
  }


}

export default CriptoPaymentController;
