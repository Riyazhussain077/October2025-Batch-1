const { test, expect } = require('@playwright/test')

test('Alert with Ok', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    // Enabling dialog window Handler

    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('I am an alert box!');
        await dialog.accept();
    });

    await page.click('//button[@id="alertBtn"]');
    await page.waitForTimeout(3000);
});

test('Confirm Alert', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    // Enabling dialog window Handler

    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('confirm');
        expect(dialog.message()).toContain('Press a button!');
        await dialog.accept(); // close by using OK Button..
        //await dialog.dismiss(); // close by using Cancel..
    });

    await page.click('//button[@id="confirmBtn"]');
    await expect(page.locator('//p[@id="demo"]')).toHaveText('You pressed OK!');
    await page.waitForTimeout(3000);
});


test.only('Prompt Alert', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    // Enabling dialog window Handler

    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('prompt');
        expect(dialog.message()).toContain('Please enter your name:');
        expect(dialog.defaultValue()).toContain('Harry Potter');
        await dialog.accept('Riyaz'); // close by using OK Button..
        //await dialog.dismiss(); // close by using Cancel..
    });

    await page.click('//button[@id="promptBtn"]');
    await expect(page.locator('//p[@id="demo"]')).toHaveText('Hello Riyaz! How are you today?');
    await page.waitForTimeout(3000);
});