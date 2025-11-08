const {test,expect} = require ('@playwright/test')

test('Test 1' , async ({page}) => {

    await page.goto('https://www.amazon.in/');
    await expect(page).toHaveURL('https://www.amazon.in/');
});

test('Test 2' , async ({page}) => {

    await page.goto("https://demoblaze.com/");
    await expect(page).toHaveTitle('STORE');
});

test('Test 3' , async ({page}) => {

    await page.goto('https://www.flipkart.com/');
    await expect(page).toHaveURL('https://www.flipkart.com/');
});