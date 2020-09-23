let { $, sleep } = require('./funcs');

module.exports = function () {
    this.Given(/^that i am on the SBM home page$/, async function () {
        await helpers.loadPage("http://localhost:3000");
        sbmLogo = await driver.findElement(By.id("logo")).getAttribute("rel");
        assert.equal(sbmLogo, "home", "expect id attribute to have the name home inside it");
      });

      this.Given(/^i go to vagassistansforsakringar$/, async function () {
        await helpers.loadPage("http://localhost:3000/vagassistansforsakring");
        //no click event added, need to enter new url
        await sleep(1000);
        pictureClick = await ("div.node-puff:nth-child(1) > a:nth-child(1) > div:nth-child(1)");
        assert.equal(pictureClick, pictureClick, "expect to have the clickable image for the insurance");
      });

      this.When(/^i click väghjälp bil insurance$/, async function () {
        await helpers.loadPage("http://localhost:3000/forsakringar/vagassistans/vaghjalp-bil");
        await sleep(1000);
        pictureClick = await ("div.node-puff:nth-child(1) > a:nth-child(1) > div:nth-child(1)");
        assert.equal(pictureClick, pictureClick, "expect to have the clickable image for the insurance");
      });

      this.When(/^i click the order button BESTÄLL NU$/, async function () {
        await helpers.loadPage("http://localhost:3000/checkout/44771")
        await sleep(1000)
      });
       
      this.When(/^i fill regnr$/, async function () {

        //await driver.findElement(By.id("#edit-regnr")).sendKeys("JOA112")
        //regnr = await driver.findElement(By.id("#edit-regnr")).value()
        //assert.equal(regnr, "JOA112", "expect put regnmr to qeual");
      });

      this.When(/^i fill ssn$/, function () {
        
        //await driver.findElement(By.id("#edit-ssn-field")).sendKeys("195808175250")
        //ssn = await driver.findElement(By.id("#edit-ssn-field")).value()
        //assert.equal(ssn, "195808175250", "expect put regnmr to qeual");

        //elementen vill inte ladda in i selenium
      });

      this.When(/^i click hämta uppgifter$/, async function () {
        //await driver.findElement(By.id("#edit-ssn-button")).click();
        //await sleep(1000)
      });

      this.When(/^the page should show personal information$/, async function () {
        //await driver.findElement(by.id("#edit-account-login-mail")).click()
        //await sleep(1000)
        });

      this.When(/^i fill the email field$/, async function () {
        //await driver.findElement(by.id("#edit-commerce-user-profile-pane-field-user-phone-und-0-value")).sendkeys("Testmail@hotmail.com")
        //checkEmail = await driver.findElement(By.id("#edit-commerce-user-profile-pane-field-user-phone-und-0-value")).value()
        //assert.equal(checkEmail, "Testmail@hotmail.com", "expect sent emails should be sent to the input");
      });

      this.When(/^i fill the mobil field$/, async function () {
        //await driver.findElement(by.id("#bankid-login-button")).sendkeys("Testmail@hotmail.com")
        //checkPhonenmr = await driver.findElement(By.id("#bankid-login-button")).value()
        //assert.equal(checkPhonenmr, "Testmail@hotmail.com", "expect sent emails should be sent to the input");
        
      });

      this.When(/^i click BankID$/, function () {
        //await driver.findElement(by.id("#bankid-ssn")).click();
        //await sleep(1000)

      });

      this.Then(/^i should get a popup$/, function () {
       // await driver.findElement(by.id("#bankid-ssn"));
      });

      this.Then(/^i click fortsatt$/, function () {
        //await driver.findElement(by.id("#bankid-ssn")).sendkeys("195808175250")
        //correctSSN = await driver.findElement(By.id("#bankid-ssn")).value()
        //assert.equal(correctSSN, "195808175250", "ssn should be sent to the input");

        //await driver.findElement("#bankid-send").click();
        
      });

      this.Then(/^i should get confirmation on my order$/, function () {
        //await driver.findElement(by.id("checkout-completion-message"))
        //await driver.findElement("#bankid-send").click();
      });
}