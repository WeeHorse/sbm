/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
module.exports = {
	async $ (selector) {
		const elements = await driver.findElements(by.css(selector));
		if (elements.length === 0) {
			return null;
		}
		if (elements.length === 1) {
			return elements[0];
		}
		return elements;
	},
	sleep (ms) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	},
};
