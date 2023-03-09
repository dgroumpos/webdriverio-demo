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
    let status = "passed";
    let msg = "";

    try {
      await body();
    } catch (error) {
      status = "failed";
      this.passed = false;
      msg = error.message;
      await console.log(`STEP [${title}] FAILED WITH ERROR: ${error.message}`);
    } finally {
      await allureReporter.addStep(title, {}, status);
      await allureReporter.startStep();
      await browser.takeScreenshot();
      if (status === "failed") {
        //REMOVE COLORING WITH REGEX
        msg = msg.replace(/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g, "");
        await allureReporter.addAttachment("ERROR:", `<h3>${msg}</h3>`, "text/html");
      }
      await allureReporter.endStep(status);
    }
  }
}
export default new TestHelper();
