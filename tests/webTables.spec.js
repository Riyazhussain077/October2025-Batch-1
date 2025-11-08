const { test, expect } = require('@playwright/test')

test('Handle Web Tables', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    const table = await page.locator('#productTable');

    // 1) Total Number of rows and columns..

    const columns = await table.locator('thead tr th');
    console.log("Number of columns : ", await columns.count());
    expect(await columns.count()).toBe(4);

    const rows = await table.locator('tbody tr');
    console.log("Number of Rows : ", await rows.count());
    expect(await rows.count()).toBe(5);

    // 2)  Select Check Box for any product

    const selectedRows = rows.filter({
        has: page.locator('td'),
        hasText: "Smartwatch"
    })
    const checkBox = selectedRows.locator('input').first();
    await checkBox.check();

    // 3) Select multiple checkBox using re-usable function

    await selectCheckBox(rows, page, 'Smartphone');
    await selectCheckBox(rows, page, 'Laptop');
    await selectCheckBox(rows, page, 'Tablet');
    await selectCheckBox(rows, page, 'Wireless Earbuds');

    // 4) Print all the product details from using loop

    for(let i = 0; i < await rows.count(); i++) {
        const row = rows.nth(i);
        const tds = row.locator('td');

        for(let j = 0; j < await tds.count() -1; j++) {
            console.log(await tds.nth(j).textContent());
        };
    };

    // 5) Print all the data's from the table..

    const pages = await page.locator('.pagination li a');
    console.log("Number of Pages : ", await pages.count());

    for (let p = 0; p < await pages.count(); p++) {
        if (p > 0) {
            await pages.nth(p).click();
        }
        for (let i = 0; i < await rows.count(); i++) {
            const row = rows.nth(i);
            const tds = row.locator('td');

            for (let j = 0; j < await tds.count() - 1; j++) {
                console.log(await tds.nth(j).textContent());
            };
        };
    };

     await page.waitForTimeout(3000);
});

async function selectCheckBox(rows, page, name) {
    const selectedRows = rows.filter({
        has: page.locator('td'),
        hasText: name
    })
    await selectedRows.locator('input').check();

};