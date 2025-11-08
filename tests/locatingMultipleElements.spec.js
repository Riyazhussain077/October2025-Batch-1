const { test, expect } = require('@playwright/test')

test('Locating Multiple Elements', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/');


    const links = await page.$$('//a');

    // for (const link of links) {

    //     const linkText = await link.textContent();
    //     console.log(linkText);
    // }

    await page.waitForSelector('//div[@id="tbodyid"]//div//div//h4//a');
    const products = await page.$$('//div[@id="tbodyid"]//div//div//h4//a');

    for (const product of products) {

        const productName = await product.textContent();
        console.log(productName);

    }

});