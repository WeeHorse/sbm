let { $, sleep } = require('./funcs');

let sleepTime = 1000;

module.exports = function () {

    this.Given(/^that i am on the SBM home page$/, async function () {
        await helpers.loadPage('http://0.0.0.0:3000/');
        await sleep(sleepTime * 2);
        let logo = await $('#logo');
        assert(logo, "Expected the SBM försäkring logo");
    });

    this.When(/^i click the väghjälp bil picture$/, async function () {
        // Write code here that turns the phrase above into concrete actions
        let vaghjalpbilPic = await $('div.node-puff:nth-child(1)');
        await vaghjalpbilPic.click();
        await sleep(sleepTime);
    });

    this.When(/^i’m on the vägassistansförsäkringar page$/, async function () {
        let vagassistansPage = await $('.page__title');
        let text = await vagassistansPage.getText();
        assert.include(text, "VÄGASSISTANSFÖRSÄKRINGAR", 'You are on the correct page as expected');
        await sleep(sleepTime);
    });

}