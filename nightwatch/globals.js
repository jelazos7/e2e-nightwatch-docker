'use strict'


module.exports = {
  before: function (done) {
    require('dotenv').config()
    done() 
  },
  beforeEach: function (browser, done) {
    browser.launch_url = process.env.LAUNCH_URL
    require('nightwatch-video-recorder').start(browser, done)
  },
  afterEach: function (browser, done) {
    require('nightwatch-video-recorder').stop(browser, done)
  }
}
