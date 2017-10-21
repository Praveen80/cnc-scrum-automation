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
  username: { get: function () { return browser.element('//input[@name="email"]'); } },
  password: { get: function () { return browser.element('//input[@name="password"]'); } },
  loginButton: { get: function () { return browser.element('//button[contains(@class,"primary")]'); } },

  /* Overridden open function.
   * Opens / application page
   */
  open: {
    value: function () {
      browser.url('localhost:8080/login');
    }
  },

   /**
   * Goes to Login page
   */
  login: {
    value: function (user) {
      this.email.waitForEnabled();
      this.email.setValue(user.email);
      browser.pause(1000);
      this.password.setValue(user.password);
      browser.pause(1000);
      this.login.Button.waitForEnabled();
      this.loginButton.click();
      browser.pause(1000);
    }
  },

  /**
   * User is redirected to home page
   */
  validateHomePageUrl: {
    value: function() {
      browser.urlValidation('/scrum') ;
      }
  }
};

module.exports = Object.create(Page, LoginPage);