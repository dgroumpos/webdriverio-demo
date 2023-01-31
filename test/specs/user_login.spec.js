import loginPage from "../pageObjects/login.page";
import productsPage from "../pageObjects/products.page";

describe("Log in to the application with various types of users", () => {
  it("Log in with a valid user", async () => {
    await browser.step(
      "User enters their username and password",
      async function () {
        await loginPage.userName.setValue(loginPage.standardUserNameText);
        await loginPage.password.setValue(loginPage.passwordText);
      }
    );

    await browser.step("User clicks on the login button", async function () {
      await loginPage.loginBtn.click();
      await expect(productsPage.pageHeader).toHaveText(
        productsPage.pageHeaderText.toUpperCase()
      );
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

  it("Log in with invalid credentials", async () => {
    await browser.step(
      "User enters their username and an invalid password",
      async function () {
        await loginPage.userName.setValue(loginPage.standardUserNameText);
        await loginPage.password.setValue("wrongPassword");
      }
    );

    await browser.step(
      "User clicks on the login button. The error message is displayed",
      async function () {
        await loginPage.loginBtn.click();
        await expect(loginPage.errorMessage).toHaveText(
          loginPage.invalidCredentialsText
        );
      }
    );
  });
});
