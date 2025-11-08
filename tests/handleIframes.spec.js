const { test, expect } = require('@playwright/test')

test('handle IFrames', async ({ page }) => {

    await page.goto('https://ui.vision/demo/webtest/frames/');

    const frame3 = await page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_3.html' });
    await frame3.fill('[name="mytext3"]', 'Take Care');

    // Nested (or) Inner (or) Child Frame

    const nestedFrames = await frame3.childFrames();
    await nestedFrames[0].locator('//div[@id="i9"]/div/div').check();

    await page.waitForTimeout(3000);
    
});