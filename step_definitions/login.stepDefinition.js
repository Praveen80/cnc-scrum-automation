let loginPage = require('../functions/login.js');

module.exports = function () {

  this.Given(/^User goes to Login Page$/, () => {
    loginPage.open();
  });

  this.Then(/^User is redirected to the home page$/, () => {
    loginPage.validateHomePageUrl();
  });

  this.Then(/^User enters the login credentials and logs in$/, (table) => {
    let user = table.rowsHash();
    loginPage.login(user);
  });

};
