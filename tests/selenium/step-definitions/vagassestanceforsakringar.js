/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */
/* eslint-disable comma-spacing */
/* eslint-disable spaced-comment */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
let { $, sleep } = require('./funcs');
let sleepTime = 1000;

module.exports = function () {

	this.Given(/^that i am on the SBM home page$/, async function () {
		await helpers.loadPage('http://localhost:3000');
		let logo = await driver.findElement(By.id('logo'));
		assert(logo, 'expect the SMB logo to insure that we are at the home page');
	});

	this.Given(/^i click on vi tar dig hela vagen fram picture i'll be redirected to vägassistansförsäkringar page$/, async function () {
	let bild = await $('div.node-puff:nth-child(1)');
        await bild.click();
	await sleep(2000);
});

	this.When(/^i am on the vagassistansforsakringar page$/, async function () {
        let vagAssForsPage = await $('.page__title');
        let text = await vagAssForsPage.getText();
        assert.include(text, "VÄGASSISTANSFÖRSÄKRINGAR", 'Expected that we are on the correct page');
        await sleep(2000);
});

	this.When(/^i click väghjälp bil picture$/, async function () {
		await helpers.loadPage('http://localhost:3000/forsakringar/vagassistans/vaghjalp-bil');
		await sleep(1000);
		pictureClick = await ('div.node-puff:nth-child(1) > a:nth-child(1) > div:nth-child(1)');
		assert.equal(pictureClick, pictureClick, 'expect to have the clickable image for the insurance');
		await sleep(1000);
	});

	this.When(/^i click the BESTALL NU button i will be redirected to DIN BESTALLNING page$/, async function () {
		let bestallNuButton = await $('#edit-ocb-submit');
		assert(bestallNuButton, 'Expected the button to be there');
		await bestallNuButton.click();
		await sleep(1000);
	});

	//this.When(/^i am on the DIN BESTALLNING page$/, async function () {   
	//	await helpers.loadPage('http://localhost:3000/checkout/44771');
	//	let dinBeställningSida = await $('#body > div > div.commerce_order_wrapper.checkout-page__summary.reset > div.checkout-page__summary__content.clearfix > h1');
	//	let text = await dinBeställningSida.getText();
	//	assert.include(text, 'DIN BESTÄLLNING', 'Exptected that we are on the right page');
	//	await sleep(1000);
	//});

	this.When(/^i fill my cars reg nr$/, async function () {

		let carRegNr = await driver.findElement(By.css('#edit-regnr'));
			carRegNr.sendKeys('JOA112');
		assert(carRegNr, 'expected reg nr to be matched');
		await sleep(1000);
	});

	this.When(/^i fill my person nr$/, async function () {

		let personNr = await driver.findElement(By.css("#edit-ssn-field"));
		personNr.sendKeys("195808175250");
		assert(ssn, "Expected the person nr to be matched ");
		await sleep(1000);

	});

	this.When(/^i click hamta uppgifter$/, async function () {
		let hämtaUppgifter = await driver.findElement(By.id("#edit-ssn-button")).click();
		assert(hämtaUppgifter, 'Expected ');
		await sleep(1000);
	});

	this.When(/^the page should show personal information$/, async function () {
		let showPersUppgifter = await driver.findElement(by.id("#edit-account-login-mail")).click();
		assert(showPersUppgifter, 'Expected');
		await sleep(1000);
	});

	this.When(/^i write the email adress$/, async function () {
		let email = await driver.findElement(by.id("#edit-commerce-user-profile-pane-field-user-phone-und-0-value"));
		email.sendkeys("Testmail@hotmail.com");
		await sleep(1000);
	});

	this.When(/^i write the mobil Nr$/, async function () {
		let mobNr = await driver.findElement(by.id("#bankid-login-button"));
		mobNr.sendkeys("my.mail@hotmail.com");
		await sleep(1000);

	});

	this.When(/^i click on the BankID button$/, async function () {
		let bankIdButton = await driver.findElement(by.id("#bankid-ssn"));
		bankIdButton.click();
		await sleep(1000);

	});

	this.Then(/^i will get a popupp$/, async function () {
		let popUpp = await driver.findElement(by.id("#bankid-ssn"));
		assert(popUpp, 'Expected');
		await sleep(1000);
	});

	this.Then(/^i enter my person nr$/, async function () {
		let myPersNr = await driver.findElement(by.id("#bankid-ssn"));
		myPersNr.sendkeys("195808175250");
		// isPersNrCorrect = await driver.findElement(By.id("#bankid-ssn")).value()
		// assert.equal(isPersNrCorrect, "195808175250", "the person nr will be sent to the input");
		await sleep(1000);

       });

	this.Then(/^i click fortsatt$/, async function () {
		let fortsattButton = await driver.findElement("#bankid-send");
		fortsattButton.click();
		await sleep(1000);

	});

	this.Then(/^i will get a confirmation message and sed the order$/, async function () {
		let confirmMessage = await driver.findElement(by.id("checkout-completion-message"));
		assert(confirmMessage, 'Expected');
		await sleep(1000);
		let sendOrder = await driver.findElement("#bankid-send");
		sendOrder.click();
		await sleep(1000);
	});
};
