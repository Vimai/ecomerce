class HistoryController {
  constructor() {

    let login = sessionStorage.getItem("login");
    login = JSON.parse(login);

    let tx = localStorage.getItem(login.email);
    tx = JSON.parse(tx);

    if (tx != null) {

      tx.forEach(element => {

        let orderDate = element.date;

        orderDate = new Date(orderDate);

        orderDate.setHours(orderDate.getHours() + 1);

        let now = new Date();

        if (orderDate < now) {
          element.status = "Expired";
        } else {
          element.status = "Pending"
        }

      });

      this.orders = tx;
    }
  }
}

export default HistoryController;
