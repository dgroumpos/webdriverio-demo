import allureReporter from "@wdio/allure-reporter";

class TestHelper {
  passed;
  suite(title, body) {
    describe(title, () => {
      beforeEach(async () => {
        this.passed = true;
      });
      afterEach(async () => {
        if (this.passed === false) {
          expect(true).toBe(false);
        }
      });
      body();
    });
  }

  async tc(title, body) {
    it(title, async () => {
      await body();
    });
  }

  async step(title, body) {
    var status = "passed";
    try {
      await body();
    } catch (error) {
      status = "failed";
      this.passed = false;
      await console.log(`STEP [${title}] FAILED WITH ERROR: ${error.message}`);
      // await allureReporter.addDescription(
      //   `STEP [${title}] FAILED WITH ERROR: ${error.message}`
      // );
    } finally {
      await allureReporter.addStep(title, {}, status);
      await allureReporter.startStep();
      await browser.takeScreenshot();
      await allureReporter.endStep(status);
    }
  }
}
export default new TestHelper();
