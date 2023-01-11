import allureReporter from "@wdio/allure-reporter";

describe("Log in to the application with various types of users", () => {
  it("Log in with a valid user", async () => {
    allureReporter.addStep(
      "User enters their credentials  and click on the submit button. Products page is displayed"
    );
    const username = await $("#user-name");
    const password = await $("#password");

    await username.setValue("standard_user");
    await password.setValue("secret_sauce");

    const loginBtn = await $("#login-button");

    await loginBtn.click();

    const productsHeader = await $(
      '.header_secondary_container span[class="title"]'
    );

    await expect(productsHeader).toHaveText("Products".toUpperCase());
  });
});
