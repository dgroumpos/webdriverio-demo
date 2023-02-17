import allureReporter, { addStep } from "@wdio/allure-reporter";

module.exports = {
  step: async function (title, body) {
    var status = "passed";
    try {
      await body();
    } catch (error) {
      status = "failed";
    }
    await allureReporter.addStep(title, {}, status);
    await allureReporter.startStep();
    await browser.takeScreenshot();
    await allureReporter.endStep(status);
    //Temporary solution to fail the test
    if (status === "failed") {
      expect(true).toBe(false);
    }
  },
};
