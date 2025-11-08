const { test, expect } = require('@playwright/test')
// Test Data..
const loginData = [
    { username: 'pavanol', password: 'test@123' },
    { username: 'wronguser', password: 'wrongpass' }  // Negative test example
];

for (const data of loginData) {
    test(`Login test with username : ${data.username}`, async ({ page }) => {

        await page.goto('https://demoblaze.com/');
        await page.click('#login2');
        await page.fill('#loginusername', data.username);
        await page.fill('#loginpassword', data.password);

        await page.click('[onclick="logIn()"]');

        if (data.username === 'pavanol' && data.password === 'test@123') {
            const logoutLink = await page.locator('#logout2');
            await expect(logoutLink).toBeVisible({ timeout: 3000 });
        } else {
            page.on('dialog', async (diaolog) => {
                console.log(`Dialog message: ${diaolog.message()}`);
                await diaolog.accept();
            });
        }
        await page.waitForTimeout(3000);
    });
}

