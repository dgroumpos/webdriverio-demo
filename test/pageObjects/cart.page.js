import BasePage from "./base.page";

class CartPage extends BasePage {
  constructor() {
    super();
    //TESTDATA
    this.headerText = "YOUR CART";
  }

  //LOCATORS
  get pageHeader() {
    return $(".title");
  }

  //FUNCTIONS
  getCartItem(itemName) {
    return $(`//a/div[contains(text(), '${itemName}')]//ancestor::div[@class='cart_item']`);
  }

  removeItemFromCart(itemName) {
    return this.getCartItem(itemName).$("button").click();
  }
}

export default new CartPage();
