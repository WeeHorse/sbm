/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */
/* eslint-disable eol-last */

/* eslint-disable indent */

/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
let { $, sleep } = require('./funcs');
const { driver } = require('selenium-webdriver/chrome');
module.exports = function () {
	this.Given(/^that I am on the homepage$/, async function () {
		await helpers.loadPage('http://localhost:3000/');
		await sleep(1000);
		const logo = await $('#logo');
		assert(logo, 'Expected the SBM logo to exist');
		await sleep(1000);
	});

	this.When(/^i choose and click on kontakta oss button from the kundservic list$/, async function () {
		const kundService = await $('li.expanded:nth-child(2)');
		assert(kundService, 'Expected the kundservice button to be there');
		await kundService.click();
		await sleep(1000);
		const kontaktLista = await $('li.expanded:nth-child(2) > ul:nth-child(2)');
		assert(kontaktLista, 'Expected a list with diffirent contact forms will show upp');
		await sleep(1000);
		const kontaktaOss = await $('li.expanded:nth-child(2) > ul:nth-child(2) > li:nth-child(1)');
		assert(kontaktaOss, 'Expected the kontakta oss button to be there');
		await sleep(1000);
	});

	this.Then(/^i'll be redirected to kontakta oss site$/, async function () {
		await helpers.loadPage('https://www.sbmforsakring.se/kundservice/kontakta-oss');
		await sleep(1000);
		const kontaktaOssSidan = await $('.page__title > h1:nth-child(1)');
        let text = await kontaktaOssSidan.getText();
        assert.include(text, "KONTAKTA OSS", 'Expected that you are on the correct page');
        await sleep(1000);
       });
};

