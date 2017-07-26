'use strict'

module.exports = {
  'searches google': function (browser) {
    browser
      .url(browser.launch_url)
      .waitForElementVisible('body', 5000)
      .setValue('#your-name','John')
      .click('button')
      .expect.element('#hello-world').text.to.equal('Hello, John').before(500)
    browser
      .pause(1000)
      .end()
  }
}
