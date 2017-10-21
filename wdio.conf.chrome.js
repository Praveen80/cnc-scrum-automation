/**
 *
 * wdio.conf.iOSSim.js
 * Test configuration file used for iOS test environment
 * It uses Chrome with Google Nexus 5 mobileEmulation
 *
 */
let merge = require('deepmerge');
let wdioConfBase = require('./wdio.conf.js');

exports.config = merge(wdioConfBase.config, {

  //
  // ============
  // Capabilities
  // ============
  // Define your capabilities here. WebdriverIO can run multiple capabilities at the same
  // time. Depending on the number of capabilities, WebdriverIO launches several test
  // sessions. Within your capabilities you can overwrite the spec and exclude options in
  // order to group specific specs to a specific capability.
  //
  capabilities: [{
    browserName:   'chrome',
    chromeOptions: {
      args:            ['--reduce-security-for-testing','--auto-open-devtools-for-tabs'],
      mobileEmulation: {
        deviceName: 'iPhone 6'
      }
    }
  }],
  // Gets executed before test execution begins. At this point you can access all global
  // variables, such as `browser`. It is the perfect place to define custom commands.
  before: function (capabilities, specs) {
    /**
     * Setup the Chai assertion framework
     */
    let chai = require('chai');
    global.expect = chai.expect;

    console.log('Starting Test Case: -', specs[0].replace(/^.*[\\\/]/, ''));

    let utils = require('./utilities/utils');
    utils.init();

    let size = {
      width: 412,
      height: 900,
    };
    browser.setViewportSize(size);
    browser.timeouts('page load', 60000);
    browser.params = this.params = [];
  },

});
