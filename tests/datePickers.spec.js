const { test, expect } = require('@playwright/test')

test('Date Pickers', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    // await page.fill('input#datepicker' , '10/31/2025');

    // Date Pickers

    const year = '1990';
    const month = 'July';
    const date = '21';

    await page.click('input#datepicker'); // opens calender

    while(true) {

        const currentYear = await page.locator('.ui-datepicker-year').textContent();
        const currentMonth = await page.locator('.ui-datepicker-month').textContent();

        if(currentYear == year && currentMonth == month) {
            break;
        };

        //await page.locator('[title="Next"]').click();   // Next
        await page.locator('[title="Prev"]').click(); // Past
    }

    const dates = await page.$$('//a[contains(@class,"ui-state-default")]');

    // Date Selection using loop

    for(const dt of dates) {

        if(await dt.textContent() == date) {
            await dt.click();
            break;
        }
    }

    // Date Selection - without loop

    //await page.click('//a[contains(@class,"ui-state-default")][text()="17"]');

    await page.click(`//a[contains(@class,"ui-state-default")][text()='${date}']`);

    await page.waitForTimeout(3000);
});