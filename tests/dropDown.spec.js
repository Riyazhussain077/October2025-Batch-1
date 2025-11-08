const { test, expect } = require('@playwright/test')

test('Handle Dropdown', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    // Multiples way to select the options from the dropdown

    await page.locator('#country').selectOption({ label: 'Canada' });  // label in visible text
    await page.locator('#country').selectOption('France'); // visible text
    await page.locator('#country').selectOption({ value: 'uk' }); // by using value
    await page.locator('#country').selectOption({ index: 7 }); // by using index
    await page.selectOption('#country', 'Brazil'); // by text..


    // Assertions

    // 1) Check number of options in dropdown    - method 1

    // const options = await page.locator('#country option');
    // await expect(options).toHaveCount(10);

    // 2) Check number of options in dropdown    - method 2

    //const options = await page.$$('#country option');
    console.log("Numbers of options: ", options.length);
    await expect(options.length).toBe(10);

    // 3) Check presenece of options in the dropdown   - method 1

    const content = await page.locator('#country').textContent();
    await expect(content.includes('Japan')).toBeTruthy();

    // 4) Check presence of value in the dropdown   - method 2  (using loop)

    const options = await page.$$('#country option');
    for (const option of options) {
        // console.log(await option.textContent());
        let value = await option.textContent();
        if (value.includes('India')) {
            break;
        }

    }
    await page.waitForTimeout(3000);

});