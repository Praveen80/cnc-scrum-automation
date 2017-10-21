/*
 Utility functions
*/

const commonUtilities = {
 
  /**
   * Waits for Loading Indicator to dissapear
   */
  waitForLoading: function waitForLoading(waitTime, index = 1, waitForExtraLoad = false) {
    waitTime = waitTime || browser.options.waitforTimeout;
    try {
      browser.pause(850);
      if (waitForExtraLoad) {
        browser.pause(500);
      }
      const isVisible = browser.isVisible('//div[contains(@class,"LoadingIndicator")]');
      if (isVisible && index * 500 < waitTime) {
        this.waitForLoading(waitTime, index + 1);
      } else if (isVisible && index * 500 >= waitTime) {
        throw `API keeps loading even after ${waitTime}`;
      } else if (!isVisible && !waitForExtraLoad) {
        this.waitForLoading(waitTime, index, true);
      }
    } catch (err) {
      console.log(`Wait for Loading failed with error: ${err}`);
      throw err
    }
  },
  /**
   * Custom browser command to validate that current URL contains an expected path
   * It waits up to 45 seconds for browser to load
   *
   * @param {String} expectedPath
   */

  urlValidation: function urlValidation(expectedPath) {
    let i = 0;
    while (!browser.getUrl().includes(expectedPath) && i < 60) {
      browser.pause(500);
      i++;
    }
    expect(browser.getUrl()).to.contain(expectedPath);
  },
};

/**
 * Converts the obove object to Custom Command
 */

module.exports = {
  init: function () {
      Object.keys(commonUtilities).forEach(function (key) {
        browser.addCommand(key, commonUtilities[key]);
      });
    },
};
