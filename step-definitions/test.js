let {$, sleep} = require('./funcs');

var urlConfig = "http://localhost:3000/";

module.exports = function() {


  this.Given(/^that I am on the new site$/, async function () {
    await helpers.loadPage(urlConfig);
    await sleep(1000)
    menubar = await $('body > header > div.site-header.barrier > div.navigation-toggler')
    assert.instanceOf(menubar, menubar.constructor, "Expected to find the menubar")
  });

  this.When(/^I go to incurenses$/,async function () {
    await helpers.loadPage(urlConfig + 'forsakringar');
    await sleep(300)
  });

  this.When(/^make sure there are at least three incurenses$/,async function () {
    firstIncurense = await $('#body > main > div > div > div:nth-child(1) > a > div.product-teaser__img')
    assert.equal(firstIncurense,firstIncurense, "Expected to find the first one");

    secondIncurense = await $('#body > main > div > div > div:nth-child(2) > a > div.product-teaser__img')
    assert.equal(secondIncurense,secondIncurense, "Expected to find the second one")

    thirdIncurense = await $('#body > main > div > div > div:nth-child(3) > a > div.product-teaser__img')
    assert.equal(thirdIncurense,thirdIncurense, "Expected to find the third one")
  });

  this.When(/^go to the carhelp incurense$/,async function () {
    await secondIncurense.click()
    await sleep(50)
  });

  this.Then(/^I can go to order now$/,async function () {
    await helpers.loadPage(urlConfig + 'checkout/44771');
    await sleep(300)
  });


}

