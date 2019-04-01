class SignupController {
  constructor($state) {
    'ngInject';
    this.$state = $state;
  }

  saveUser() {

    let elements = {};

    elements.name = this.name;
    elements.email = this.email;
    elements.pass = this.password;

    let usuarios = localStorage.getItem("register");

    if (usuarios == null) {
      let items = [];
      items.push(elements);
      localStorage.setItem("register", JSON.stringify(items));
    } else {
      let items = JSON.parse(usuarios);
      items.push(elements);
      localStorage.setItem("register", JSON.stringify(items));
    }

    this.$state.go('login');
  }


}

export default SignupController;
