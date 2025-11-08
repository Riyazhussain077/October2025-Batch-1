const { test, expect } = require('@playwright/test')

test('KeyBoard Actions', async ({ page }) => {

    await page.goto('https://gotranscript.com/text-compare');

    await page.locator('[name="text1"]').fill('Good Morning!!');

    // Ctrl + A     -> Select the text
    await page.waitForTimeout(2000);
    await page.keyboard.press('Control+A');

    // Ctrl + C     -> Copy the text
    await page.waitForTimeout(2000);
    await page.keyboard.press('Control+C');

    // Tab         

    await page.keyboard.down('Tab');
    await page.keyboard.up('Tab');
    await page.waitForTimeout(2000);
    // Ctrl + V       -> Paste the text

    await page.keyboard.press('Control+V');

    await page.waitForTimeout(2000);

});