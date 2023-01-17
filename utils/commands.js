import allureReporter, { addStep } from "@wdio/allure-reporter";

module.exports = {
  step: async function (title, body) {
    await console.log("EXECUTING FUNCTION!!!");
    await body();
    await allureReporter.addStep(title);
    await browser.takeScreenshot();
  },
};
