import allureReporter, { addStep } from "@wdio/allure-reporter";

module.exports = {
  step: async function (title, body) {
    await allureReporter.addStep(title);
    await allureReporter.startStep();
    await body();
    await browser.takeScreenshot();
    await allureReporter.endStep();
  },
};
