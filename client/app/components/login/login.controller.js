class LoginController {
  constructor($state) {
    'ngInject';
    this.$state = $state;
  }

  login() {

    let name = localStorage.getItem("register");

    if (name != null) {

      let items = JSON.parse(name);

      items.forEach(element => {
        if (element.email == this.email) {
          let json = {}
          json.email = element.email;
          json.name = element.name;
          sessionStorage.setItem("login", JSON.stringify(json));

          this.$state.go('home');
          return true;
        }
      });

      this.message = "Please signup"
    } else {

      this.message = "Please signup"
    }

  }

}

export default LoginController;
