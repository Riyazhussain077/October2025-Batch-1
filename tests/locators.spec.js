const { test, expect } = require('@playwright/test')

test('Locators', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/');

    // Click on Login Button               -> CSS

    //await page.locator('#login2').click();
    await page.click('#login2');

    // Provide Username                    -> CSS

    //await page.locator('[id="loginusername"]').fill('pavanol');
    await page.fill('[id="loginusername"]', 'pavanol');

    // Provide Password                    -> Xpath

    //await page.locator('//input[@id="loginpassword"]').fill('test@123');
    await page.fill("//input[@id='loginpassword']", 'test@123');

    // Click on login Button                -> Xpath

    //await page.locator('//button[text()="Log in"]').click();
    await page.click('//button[text()="Log in"]');

    // Verify the name presence

    const name = await page.locator('//a[contains(@id,"nameofu")]');
    await expect(name).toBeVisible();

    await page.waitForTimeout(3000);

});