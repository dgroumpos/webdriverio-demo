import BasePage from "./base.page";

class ProductsPage extends BasePage {
  get pageHeader() {
    return $('.header_secondary_container span[class="title"]');
  }

  get hamburgerBtn() {
    return $("#react-burger-menu-btn");
  }

  get logoutLink() {
    return $("#logout_sidebar_link");
  }
}

export default new ProductsPage();
