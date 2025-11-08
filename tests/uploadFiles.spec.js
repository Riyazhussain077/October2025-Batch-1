const { test, expect } = require('@playwright/test')

test('Single File', async ({ page }) => {

    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');

    await page.locator('#filesToUpload').click();

    await page.locator('#filesToUpload').setInputFiles("tests/uploadFile/Test3.pdf");

    await page.waitForTimeout(3000);

});

test.only('Muliple Files', async ({ page }) => {

    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');

    await page.locator('#filesToUpload').setInputFiles(["tests/uploadFile/Test3.pdf", "tests/uploadFile/Test4.pdf", "tests/uploadFile/Test5.pdf"]);

    await page.waitForTimeout(3000);

    expect(await page.locator('#fileList li:nth-child(1)')).toHaveText('Test3.pdf');
    expect(await page.locator('#fileList li:nth-child(2)')).toHaveText('Test4.pdf');

    await page.waitForTimeout(3000);

    await page.locator('#filesToUpload').setInputFiles([]); // To Remove the Uploaded Files..

    expect(await page.locator('#fileList li:nth-child(1)')).toHaveText('No Files Selected');

    await page.waitForTimeout(3000);


});