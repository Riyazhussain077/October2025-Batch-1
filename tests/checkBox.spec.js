const { test, expect } = require('@playwright/test')

test('Handle checkBox', async ({ page }) => {

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

    // single CheckBox

    await page.locator('//input[@id="checkBoxOption3"]').check();
    //await page.check('//input[@id="checkBoxOption3"]');

    await expect(await page.locator('//input[@id="checkBoxOption3"]')).toBeChecked();
    await expect(await page.locator('//input[@id="checkBoxOption3"]').isChecked()).toBeTruthy();
    await page.waitForTimeout(2000);
    await page.uncheck('//input[@id="checkBoxOption3"]');
    await expect(await page.locator('//input[@id="checkBoxOption3"]')).not.toBeChecked();
    await expect(await page.locator('//input[@id="checkBoxOption3"]').isChecked()).toBeFalsy();

    // Multiple checkBox

    const checkBoxLoc = [
        '//input[@id="checkBoxOption1"]',
        '//input[@id="checkBoxOption2"]',
        '//input[@id="checkBoxOption3"]'
    ];

    for (const locator of checkBoxLoc) {

        await page.locator(locator).check();
    };

    await page.waitForTimeout(2000);

    for (const locator of checkBoxLoc) {

        if (await page.locator(locator).isChecked()) {
            await page.locator(locator).uncheck();
        }
    }


    await page.waitForTimeout(2000);
});