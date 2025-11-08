const { test, expect } = require('@playwright/test')

test('Page screenShot', async ({ page }) => {

    await page.goto('https://www.amazon.in/');
    await page.screenshot({ path: 'tests/screenshots/' + Date.now() + 'HomePage.png' });
});

test('FullPage screenShot', async ({ page }) => {

    await page.goto('https://www.amazon.in/');
    await page.screenshot({ path: 'tests/screenshots/' + Date.now() + 'FullPage.png', fullPage: true });
});

test.only('Element screenShot', async ({ page }) => {

    await page.goto('https://www.amazon.in/');
    await page.locator('//img[@alt="Figurines, vases & more"]')
        .screenshot({ path: 'tests/screenshots/' + Date.now() + 'SelectedImage.png' });
});

