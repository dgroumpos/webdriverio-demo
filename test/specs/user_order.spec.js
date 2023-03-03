import loginPage from "../pageObjects/login.page";
import productsPage from "../pageObjects/products.page";
import cartPage from "../pageObjects/cart.page";

describe("Select products and place orders", () => {
  it("Add an item to the cart and open the cart to verify it has been added", async () => {
    await browser.step(
      "User logs in to the application. Products page is displayed",
      async function () {
        await loginPage.login(
          loginPage.standardUserNameText,
          loginPage.passwordText
        );
        await expect(productsPage.pageHeader).toHaveText(
          productsPage.pageHeaderText
        );
      }
    );

    await browser.step(
      'User adds a "Sauce Labs Bolt T-Shirt" to their cart. Button text changes to "REMOVE". Shopping cart Quantity changes to 1',
      async function () {
        await productsPage
          .getAddToCartBtn(productsPage.listOfProducts.boltTShirt)
          .click();
        await expect(
          productsPage.getAddToCartBtn(productsPage.listOfProducts.boltTShirt)
        ).toHaveText("Remove");
        await expect(productsPage.cartQuantityIcon).toHaveText("1");
      }
    );

    await browser.step(
      "User navigates to the cart and verifies item has been added",
      async function () {
        await productsPage.cartIcon.click();
        await expect(cartPage.pageHeader).toHaveText(cartPage.headerText);
        await expect(
          cartPage.getCartItem(cartPage.listOfProducts.boltTShirt)
        ).toBeDisplayed();
      }
    );

    await browser.step(
      "User removes the item from the cart and verifies it is no longer displayed",
      async function () {
        await cartPage.removeItemFromCart(cartPage.listOfProducts.boltTShirt);
        await expect(
          cartPage.getCartItem(cartPage.listOfProducts.boltTShirt)
        ).not.toBeDisplayed();
        await expect(productsPage.cartQuantityIcon).not.toBeDisplayed();
      }
    );
  });

  it("Complete an order", async () => {
    await browser.step(
      "User logs in to the application. Products page is displayed",
      async function () {
        await loginPage.login(
          loginPage.standardUserNameText,
          loginPage.passwordText
        );
        await expect(productsPage.pageHeader).toHaveText(
          productsPage.pageHeaderText
        );
      }
    );

    await browser.step(
      'User adds a "Sauce Labs Onesie", a "Sauce Labs Fleece Jacket" and a "Sauce Labs Backpack" to their cart. Shopping cart Quantity changes to 3',
      async function () {
        await productsPage
          .getAddToCartBtn(productsPage.listOfProducts.onesie)
          .click();
        await productsPage
          .getAddToCartBtn(productsPage.listOfProducts.fleece)
          .click();
        await productsPage
          .getAddToCartBtn(productsPage.listOfProducts.backPack)
          .click();
        await expect(productsPage.cartQuantityIcon).toHaveText("3");
      }
    );

    await browser.step(
      "User navigates to the cart and verifies item has been added",
      async function () {
        await productsPage.cartIcon.click();
        await expect(cartPage.pageHeader).toHaveText(cartPage.headerText);
        await expect(
          cartPage.getCartItem(cartPage.listOfProducts.onesie)
        ).toBeDisplayed();
        await expect(
          cartPage.getCartItem(cartPage.listOfProducts.fleece)
        ).toBeDisplayed();
        await expect(
          cartPage.getCartItem(cartPage.listOfProducts.backPack)
        ).toBeDisplayed();
      }
    );

    await browser.step(
      "User clicks on the checkout button. Chekout information page is displayed",
      async function () {
        await cartPage.checkoutBtn.click();
        await expect(cartPage.pageHeader).toHaveText(
          cartPage.infoPageHeaderText
        );
      }
    );

    await browser.step(
      'User clicks on the "Continue" button without filling the form. A validation error is displayed',
      async function () {
        await cartPage.continueBtn.click();
        await expect(cartPage.validationError).toHaveText(cartPage.errorText);
      }
    );

    await browser.step(
      'User fills in their information and clicks on the "Continue" button. "Checkout Overview" page is displayed',
      async function () {
        await cartPage.completeInfoForm(
          cartPage.firstName,
          cartPage.lastName,
          cartPage.zip
        );
        await cartPage.continueBtn.click();
        await expect(cartPage.pageHeader).toHaveText(
          cartPage.overviewPageHeaderText
        );
      }
    );

    await browser.step(
      'User clicks on the "Finish"button. Order completion page is displayed',
      async function () {
        await cartPage.finishBtn.click();
        await expect(cartPage.completeHeaderTitle).toHaveText(
          cartPage.completeHeaderText
        );
      }
    );
  });
});
