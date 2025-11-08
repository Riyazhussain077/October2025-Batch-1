const { test, expect } = require('@playwright/test')

test('Radio Button', async ({ page }) => {

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

    // Radio Button

    //await page.locator('//input[@value="radio2"]').check();
    await page.check('//input[@value="radio2"]');

    await expect(await page.locator('//input[@value="radio2"]')).toBeChecked();
    await expect(await page.locator('//input[@value="radio2"]').isChecked()).toBeTruthy();

    await expect(await page.locator('//input[@value="radio3"]').isChecked()).toBeFalsy();


    await page.waitForTimeout(3000);

});