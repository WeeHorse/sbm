let {$, sleep} = require('./funcs');
const { driver } = require('selenium-webdriver/chrome');

module.exports = function() {
this.Given(/^that I am on the homepage$/, async function () {
    await helpers.loadPage("http://localhost:3000/")
    await sleep(1000);
    const logo = await $('#logo')
    assert(logo, 'Expected the SBM logo to exist');
    await sleep(1000);
  });
}