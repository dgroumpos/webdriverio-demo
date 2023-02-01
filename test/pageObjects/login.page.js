import BasePage from "./base.page";

class LoginPage extends BasePage {
  constructor() {
    super();
    //TESTDATA
    this.standardUserNameText = "standard_user";
    this.lockedOutUserNameText = "locked_out_user";
    this.performanceGlitchUserNameText = "performance_glitch_user";
    this.passwordText = "secret_sauce";
    this.invalidCredentialsText = "Epic sadface: Username and password do not match any user in this service";
  }
  //LOCATORS
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

  //FUNCTIONS
  async login(userName, password) {
    await this.userName.setValue(userName);
    await this.password.setValue(password);
    await this.loginBtn.click();
  }
}

export default new LoginPage();
