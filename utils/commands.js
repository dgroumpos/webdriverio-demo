import allureReporter, { addStep } from "@wdio/allure-reporter";

module.exports = {
  step: async function (title, body) {
    await allureReporter.startStep(title);
    await body();
    let screenshot = await browser.takeScreenshot();
    await allureReporter.addStep("", {
      content: await allureReporter.addAttachment("", screenshot),
    });
    await allureReporter.endStep();
  },
};
