/* eslint-disable linebreak-style */
/* eslint-disable semi */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const { $, sleep } = require('./funcs');

module.exports = function () {
  this.Given(/^that im at the SMB webbsite$/, async function () {
    // Write code here that turns the phrase above into concrete actions
    await helpers.loadPage('http://localhost:3000/');
    await sleep(1000);
    const logo = await driver.findElement(by.css('#logo'));
    assert(logo, 'Expected the SBM logo to prove that I am on the chome page');
    await sleep(2000);
  });
}
