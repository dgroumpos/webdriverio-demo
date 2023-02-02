import BasePage from "./base.page";

class CartPage extends BasePage {
  constructor() {
    super();
    //TESTDATA
    this.headerText = "YOUR CART";
    this.infoPageHeaderText = "CHECKOUT: YOUR INFORMATION";
    this.errorText = "Error: First Name is required";
    this.firstName = "John";
    this.lastName = "Doe";
    this.zip = "12345";
    this.overviewPageHeaderText = "CHECKOUT: OVERVIEW";
    this.completeHeaderText = "THANK YOU FOR YOUR ORDER";
  }

  //LOCATORS
  get pageHeader() {
    return $(".title");
  }

  get checkoutBtn() {
    return $("#checkout");
  }

  get continueBtn() {
    return $("#continue");
  }

  get validationError() {
    return $('h3[data-test="error"]');
  }

  get firstNameField() {
    return $("#first-name");
  }

  get lastNameField() {
    return $("#last-name");
  }

  get psCodeField() {
    return $("#postal-code");
  }

  get finishBtn() {
    return $("#finish");
  }

  get completeHeaderTitle() {
    return $(".complete-header");
  }

  //FUNCTIONS
  getCartItem(itemName) {
    return $(`//a/div[contains(text(), '${itemName}')]//ancestor::div[@class='cart_item']`);
  }

  removeItemFromCart(itemName) {
    return this.getCartItem(itemName).$("button").click();
  }

  async completeInfoForm(firstName, lastName, zip) {
    await this.firstNameField.setValue(firstName);
    await this.lastNameField.setValue(lastName);
    await this.psCodeField.setValue(zip);
  }
}

export default new CartPage();
