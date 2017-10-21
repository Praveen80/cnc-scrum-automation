let Page = require('./page');

/**
 * Login Page Object
 *
 * @class functions/Login
 * @type {Page}
 */

let LoginPage = {

  /**
   * Define Elements
   **/
  email: { get: function () { return browser.element('//input[@name="email"]'); } },
  password: { get: function () { return browser.element('//input[@name="password"]'); } },
  loginButton: { get: function () { return browser.element('//button[contains(@class,"primary")]'); } },

  /* Overridden open function.
   * Opens / application page
   */
  open: {
    value: function () {
      browser.url('http://localhost:8080');
    },
  },

   /**
   * Goes to Login page
   */
  login: {
    value: function (user) {
      browser.waitForLoading();
      this.email.waitForEnabled();
      this.email.setValue(user.email);
      this.password.setValue(user.password);
      this.loginButton.waitForEnabled();
      this.loginButton.click();
      browser.pause(2000);
    }
  },

  /**
   * User is redirected to home page
   */
  validateHomePageUrl: {
    value: function() {
      expect(browser.getUrl()).to.include('/scrum');
      }
  }
};

module.exports = Object.create(Page, LoginPage);