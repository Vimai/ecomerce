class NavbarController {
  constructor($state) {
    'ngInject';
    this.$state = $state;

    this.loginName = 'Login';
    this.url = 'login()';

    let user = sessionStorage.getItem("login");
    this.islog = false;

    if (user != null) {

      user = JSON.parse(user);
      this.loginName = user.name;
      this.islog = true;
    }
  }

  logoff(){
    sessionStorage.removeItem("login");
    this.islog = false;
    this.$state.go('home');
  }


}

export default NavbarController;
