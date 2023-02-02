import loginPage from "../pageObjects/login.page";
import productsPage from "../pageObjects/products.page";
import cartPage from "../pageObjects/cart.page";

describe("Select products and place orders", () => {
  it.only("Add an item to the cart and open the cart to verify it has been added", async () => {
    await browser.step("User logs in to the application. Products page is displayed", async function () {
      await loginPage.login(loginPage.standardUserNameText, loginPage.passwordText);
      await expect(productsPage.pageHeader).toHaveText(productsPage.pageHeaderText.toUpperCase());
    });

    await browser.step(
      'User adds a "Sauce Labs Bolt T-Shirt" to their cart. Button text changes to "REMOVE". Shopping cart Quantity changes to 1',
      async function () {
        await productsPage.getAddToCartBtn(productsPage.listOfProducts.boltTShirt).click();
        await expect(productsPage.getAddToCartBtn(productsPage.listOfProducts.boltTShirt)).toHaveText("REMOVE");
        await expect(productsPage.cartQuantityIcon).toHaveText("1");
      }
    );

    await browser.step("User navigates to the cart and verifies item has been added", async function () {
      await productsPage.cartIcon.click();
      await expect(cartPage.pageHeader).toHaveText(cartPage.headerText);
      await expect(cartPage.getCartItem(cartPage.listOfProducts.boltTShirt)).toBeDisplayed();
    });

    await browser.step('User removes the item from the cart and verifies it is no longer displayed', async function () {
      await cartPage.removeItemFromCart(cartPage.listOfProducts.boltTShirt);
      await expect(cartPage.getCartItem(cartPage.listOfProducts.boltTShirt)).not.toBeDisplayed();
      await expect(productsPage.cartQuantityIcon).not.toBeDisplayed();
    });
  });
});
