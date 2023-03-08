import loginPage from "../pageObjects/login.page";
import productsPage from "../pageObjects/products.page";
import testHelper from "../../utils/testHelper";

testHelper.suite(
  "Log in to the application with various types of users",
  () => {
    testHelper.tc("Log in with a valid user", async () => {
      await testHelper.step(
        "User enters their username and password",
        async function () {
          await loginPage.userName.setValue(loginPage.standardUserNameText);
          await loginPage.password.setValue(loginPage.passwordText);
        }
      );

      await testHelper.step(
        "User clicks on the login button. Products page is displayed",
        async function () {
          await loginPage.loginBtn.click();
          await expect(productsPage.pageHeader).toHaveText(
            productsPage.pageHeaderText
          );
        }
      );

      await testHelper.step(
        "User clicks on the hamburger icon and clicks on the logout link",
        async function () {
          await productsPage.hamburgerBtn.click();
          await productsPage.logoutLink.click();
          await expect(loginPage.loginBtn).toBeDisplayed();
        }
      );
    });

    testHelper.tc("Log in with invalid credentials", async () => {
      await testHelper.step(
        "User enters their username and an invalid password",
        async function () {
          await loginPage.userName.setValue(loginPage.standardUserNameText);
          await loginPage.password.setValue("wrongPassword");
        }
      );

      await testHelper.step(
        "User clicks on the login button. The error message is displayed",
        async function () {
          await loginPage.loginBtn.click();
          await expect(loginPage.errorMessage).toHaveText(
            loginPage.invalidCredentialsText
          );
        }
      );
    });

    it("Log in with a user that has performance issues", async () => {
      await testHelper.step(
        "User enters their username and password",
        async function () {
          await loginPage.userName.setValue(
            loginPage.performanceGlitchUserNameText
          );
          await loginPage.password.setValue(loginPage.passwordText);
        }
      );

      await testHelper.step(
        "User clicks on the login button. Products page is displayed after some delay",
        async function () {
          await loginPage.loginBtn.click();
          await expect(productsPage.pageHeader).toHaveText(
            productsPage.pageHeaderText
          );
        }
      );
    });
  }
);
