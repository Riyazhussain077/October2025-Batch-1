const { test, expect } = require('@playwright/test')

test('Handle Input Box', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    // InputBox

    await expect(await page.locator('//input[@placeholder="Enter Name"]')).toBeVisible();
    await expect(await page.locator('//input[@placeholder="Enter Name"]')).toBeEnabled();
    await expect(await page.locator('//input[@placeholder="Enter Name"]')).toBeEmpty();
    await expect(await page.locator('//input[@placeholder="Enter Name"]')).toBeEditable();


    //await page.locator('//input[@placeholder="Enter Name"]').fill("Good Morning..");
    await page.fill('//input[@placeholder="Enter Name"]', "Good Evening..");


    await page.waitForTimeout(3000);



});