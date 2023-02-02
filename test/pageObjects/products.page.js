import BasePage from "./base.page";

class ProductsPage extends BasePage {
  constructor() {
    super();
    //TESTDATA
    this.pageHeaderText = "Products";
    this.listOfProducts = {
      backPack: "Sauce Labs Backpack",
      bikeLight: "Sauce Labs Bike Light",
      boltTShirt: "Sauce Labs Bolt T-Shirt",
      fleece: "Sauce Labs Fleece Jacket",
      onesie: "Sauce Labs Onesie",
      redTShirt: "Test.allTheThings() T-Shirt (Red)",
    };
  }

  //LOCATORS
  get pageHeader() {
    return $('.header_secondary_container span[class="title"]');
  }

  get hamburgerBtn() {
    return $("#react-burger-menu-btn");
  }

  get logoutLink() {
    return $("#logout_sidebar_link");
  }

  get cartQuantityIcon() {
    return $(".shopping_cart_badge");
  }

  get cartIcon() {
    return $(".shopping_cart_link");
  }

  //FUNCTIONS
  getAddToCartBtn(productName) {
    return $(`//div[@class="inventory_item_description" and contains(.//div, '${productName}')]//button`);
  }
}

export default new ProductsPage();
