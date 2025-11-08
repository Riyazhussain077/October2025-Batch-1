const { test, expect } = require('@playwright/test')

let page;

test.beforeEach(async ({ browser }) => {

    page = await browser.newPage();
    await page.goto('https://demoblaze.com/');
    await page.locator('#login2').click();
    await page.fill('#loginusername', 'pavanol');
    await page.fill('#loginpassword', 'test@123');
    await page.click('[onclick="logIn()"]');
});

test.afterEach(async () => {

    await page.click('//a[text()="Log out"]');
})

test('Home Page Test', async () => {

    const products = await page.locator('.card-title a');
    await expect(products).toHaveCount(9);

});

test('Add product to Cart', async () => {

    await page.locator('//a[text()="Iphone 6 32gb"]').click();
    await page.locator('//a[contains(@onclick,"addToCart(5)")]').click();

    page.on('dialog', async dialog => {
        expect(dialog.message()).toContain('Product added.');
        await dialog.accept();
    });

});