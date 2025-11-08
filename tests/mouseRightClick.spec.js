const { test, expect } = require('@playwright/test')

test('Mouse Right Click', async ({ page }) => {

    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html');

    const btn = await page.locator('//span[text()="right click me"]');

    // Right Click Action

    await btn.click({ button: 'right' });

    await page.waitForTimeout(3000);

});