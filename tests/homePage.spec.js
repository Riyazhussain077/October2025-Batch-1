const { test, expect } = require('@playwright/test')

//import {test,expect} from '@playwright/test'

test("HomePage", async ({ page }) => {

    await page.goto('https://www.amazon.in/');

    await expect(page).toHaveURL('https://www.amazon.in/');

    await expect(page).toHaveTitle('Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in');

    await page.waitForTimeout(3000);

    await page.close();

});

