//1) expect(page).toHaveURL()                  page has url
//2) expect(page).toHaveTitle()                page has title
//3) expect(locator).toBeVisible               element is visible
//4) expect(locator).toBeEnabled               control is enabled
//5) expect(locator).toBeChecked               Radio/checkbox is checked
//7) expect(locator).toHaveText()              element has text
//8) expect(locator).toContainText()           element contain text
//9) expect(locator).toHaveValue(value)        input has a value..
//10)expect(locator).toHaveCount()            list of elements has given length

const { test, expect } = require('@playwright/test')

test('Assertions', async ({ page }) => {

    await page.goto('https://demo.nopcommerce.com/register');

    //1) expect(page).toHaveURL()                  page has url

    await expect(page).toHaveURL('https://demo.nopcommerce.com/register');

    //2) expect(page).toHaveTitle()                page has title

    await expect(page).toHaveTitle('nopCommerce demo store. Register');

    //3) expect(locator).toBeVisible               element is visible

    const logo = await page.locator('[alt="nopCommerce demo store"]');
    await expect(logo).toBeVisible();

    //4) expect(locator).toBeEnabled               control is enabled

    const inputBox = await page.locator('input#small-searchterms');
    await expect(inputBox).toBeEnabled();

    //5) expect(locator).toBeChecked               Radio/checkbox is checked

    // Radio Button
    await page.waitForTimeout(2000);
    const radioButton = await page.locator('#gender-female');
    await radioButton.check();
    await expect(radioButton).toBeChecked();
    await page.waitForTimeout(2000);

    // Check Box
    const checkBox = await page.locator('[id="Newsletter"]');
    await expect(checkBox).toBeChecked();

    //7) expect(locator).toHaveText()              element has text

    await expect(await page.locator('.wishlist-label')).toHaveText('Wishlist'); // Full Text

    //8) expect(locator).toContainText()           element contain text

    await expect(await page.locator('.wishlist-label')).toContainText('Wishl');  // partial Text

    //9) expect(locator).toHaveValue(value)        input has a value..
    await page.waitForTimeout(2000);
    const email = await page.locator('#Email');
    await email.fill('DemoTest@123.com');
    await expect(email).toHaveValue('DemoTest@123.com');
    await page.waitForTimeout(2000);

    //10)expect(locator).toHaveCount()            list of elements has given length

    const options = await page.locator('#customerCurrency option');
    await expect(options).toHaveCount(2);


    await page.waitForTimeout(3000);

});