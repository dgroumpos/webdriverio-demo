describe("Log in to the application with various types of users", () => {
  it("Log in with a valid user", async () => {
    await browser.step(
      "User enters their username and password",
      async function () {
        const username = await $("#user-name");
        const password = await $("#password");
        await username.setValue("standard_user");
        await password.setValue("secret_sauce");
      }
    );

    await browser.step("User clicks on the login button", async function () {
      const loginBtn = await $("#login-button");
      await loginBtn.click();
      const productsHeader = await $(
        '.header_secondary_container span[class="title"]'
      );
      await expect(productsHeader).toHaveText("Products".toUpperCase());
    });
  });
});
