import loginPage from "../pageObjects/login.page";
import productsPage from "../pageObjects/products.page";

describe("Log in to the application with various types of users", () => {
  it("Log in with a valid user", async () => {
    await browser.step(
      "User enters their username and password",
      async function () {
        await loginPage.userName.setValue("standard_user");
        await loginPage.password.setValue("secret_sauce");
      }
    );

    await browser.step("User clicks on the login button", async function () {
      await loginPage.loginBtn.click();
      await expect(productsPage.pageHeader).toHaveText("Products".toUpperCase());
    });

    await browser.step(
      "User clicks on the hamburger icon and clicks on the logout link",
      async function () {
        await productsPage.hamburgerBtn.click();
        await productsPage.logoutLink.click();
        await expect(loginPage.loginBtn).toBeDisplayed();
      }
    );
  });
});
