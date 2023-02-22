import allureReporter, { addStep } from "@wdio/allure-reporter";

module.exports = {
  step: async function (title, body) {
    var status = "passed";
    try {
      await body();
    } catch (error) {
      status = "failed";
    } finally {
      await allureReporter.addStep(title, {}, status);
      await allureReporter.startStep();
      await browser.takeScreenshot();
      await allureReporter.endStep(status);
      //Throws an error so as to fail the test
      if (status === "failed") {
        throw new Error(`STEP : ${title} has failed`);
      }
    }
  },
};
