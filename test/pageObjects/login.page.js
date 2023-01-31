import BasePage from "./base.page";

class LoginPage extends BasePage {
  constructor() {
    super();
    this.standardUserNameText = "standard_user";
    this.lockedOutUserNameText = "locked_out_user";
    this.performanceGlitchUserNameText = "standard_user";
    this.passwordText = "secret_sauce";
    this.invalidCredentialsText =
      "Epic sadface: Username and password do not match any user in this service";
  }
  get userName() {
    return $("#user-name");
  }

  get password() {
    return $("#password");
  }

  get loginBtn() {
    return $("#login-button");
  }

  get errorMessage() {
    return $('h3[data-test="error"]');
  }
}

export default new LoginPage();
