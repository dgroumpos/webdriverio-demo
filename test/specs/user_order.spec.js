import loginPage from "../pageObjects/login.page";
import productsPage from "../pageObjects/products.page";

describe("Select products and place orders", () => {
  it.only("Add an item to the cart", async () => {
    await browser.step("User logs in to the application. Products page is displayed", async function () {
      await loginPage.login(loginPage.standardUserNameText, loginPage.passwordText);
      await expect(productsPage.pageHeader).toHaveText(productsPage.pageHeaderText.toUpperCase());
    });
    await browser.step(
      'User adds a "Sauce Labs Bolt T-Shirt" to their cart. Button text changes to "REMOVE". Shopping cart Quantity changes to 1',
      async function () {
        await productsPage.getAddToCartBtn(productsPage.listOfProducts.boltTShirt).click();
        await expect(productsPage.getAddToCartBtn(productsPage.listOfProducts.boltTShirt)).toHaveText("REMOVE");
        browser.pause(10000);
        await expect(productsPage.cartQuantityIcon).toHaveText("1");
      }
    );
  });
});
