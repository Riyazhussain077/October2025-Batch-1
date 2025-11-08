const { test, expect } = require('@playwright/test')

test('Frames', async ({ page }) => {

    await page.goto('https://ui.vision/demo/webtest/frames/');

    // Total Frames

    const allFrames = await page.frames();
    console.log("Number of Frames: ", allFrames.length);

    // Approach 1 : Using Name or URL

    // const frameName = await page.frame('name'); // if name is present , we can use this..

    const frame1 = await page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_1.html' });
    await frame1.locator('[name="mytext1"]').fill('Good Morning');
    await page.waitForTimeout(3000);

    // Approach 2 : Using Frame Locator

    const frame2 = await page.frameLocator('[src="frame_2.html"]').locator('[name="mytext2"]');
    await frame2.fill('Hi All!!');

    await page.waitForTimeout(3000);

});