const { test, expect } = require('@playwright/test')

test('Home Page Test', async ({ page }) => {

    await page.goto('https://demoblaze.com/');

    // Login Page

    await page.locator('#login2').click();
    await page.fill('#loginusername', 'pavanol');
    await page.fill('#loginpassword', 'test@123');
    await page.click('[onclick="logIn()"]');

    // Home Page Test

    const products = await page.locator('.card-title a');
    await expect(products).toHaveCount(9);

    // Logout Page

    await page.click('//a[text()="Log out"]');
});

test('Add product to Cart', async ({ page }) => {

    await page.goto('https://demoblaze.com/');

    // Login Page

    await page.locator('#login2').click();
    await page.fill('#loginusername', 'pavanol');
    await page.fill('#loginpassword', 'test@123');
    await page.click('[onclick="logIn()"]');

    // Add Product to cart

    await page.locator('//a[text()="Iphone 6 32gb"]').click();
    await page.locator('//a[contains(@onclick,"addToCart(5)")]').click();

    page.on('dialog', async dialog => {
        expect(dialog.message()).toContain('Product added.');
        await dialog.accept();
    });

    // Logout Page

    await page.click('//a[text()="Log out"]');
});