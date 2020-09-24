let { $, sleep } = require('./funcs');

module.exports = function () {

    this.Given(/^that I am on the SBM homepage$/, async function () {
        await helpers.loadPage('http://localhost:3000');
        await sleep(2000)
        let allInsurance = await $('.hero__links > a:nth-child(1)');
        assert(allInsurance, "Expected the webpage to load with 'Se alla våra försäkringar' ");
    });

    this.When(/^I click on the väghjälp picture$/, async function () {
        let väghjälpButton = await $('#body > main > div.node.node-front-page.front-one-header.view-mode-full.contextual-links-region > div.highlights-wrapper.grid-barrier > div > div.node.node-puff.view-mode-full.image-puff.bg-red.contextual-links-region > a > div.title > h3');
        await väghjälpButton.click();
        assert(väghjälpButton, "expected to press Väghjälp button");
        await sleep (500);
    });

    this.Then(/^I should be directed to the vägassitansförsäkring page$/, async function () {
        await sleep(2000)
        let allVägassistansFörsäkringar = await $('#body > div > div > div.hero__wrapper.hero__wrapper-page > div > div.page__title > h1');
        assert(allVägassistansFörsäkringar, "Expected to be null");
        await sleep (500);
    });

    this.When(/^I click on väghjälp bil picture$/, async function () {
        let väghjälpBil = await $('#body > main > div > article > div > div > div.section.content__vertical-margin > div > div > div.node.node-puff.view-mode-full.image-puff.bg-red.contextual-links-region > a > div.title > h3');
        await väghjälpBil.click();
        assert(väghjälpBil, "expected to press Väghjälp picture");
        await sleep (500);
    });


    this.Then(/^I should be directed to the ordering page$/, async function () {
        await sleep(2000)
        let väghjälpBil1 = await $('#body > div > div > div.hero__wrapper.hero__wrapper-page > div > div.hero__flair > div');
        assert(väghjälpBil1, "Expected to be null");
        await sleep (500);
    });


    this.When(/^I click on the Beställ nu button$/, async function () {

    });


    this.Then(/^I should be directed to the checkout page$/, function (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    });
    
}