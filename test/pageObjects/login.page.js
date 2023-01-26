import BasePage from "./base.page";

class LoginPage extends BasePage {
  get userName() {
    return $('#user-name');
  }

  get password() {
    return $('#password');
  }

  get loginBtn() {
    return $('#login-button');
  }
}

export default new LoginPage();
