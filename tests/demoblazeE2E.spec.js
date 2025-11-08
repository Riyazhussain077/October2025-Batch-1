const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { HomePage } = require('../pages/HomePage');
const { CartPage } = require('../pages/CartPage');
const { PlaceOrder } = require('../pages/PlaceOrder');
test('POM', async ({ page }) => {
    // Login Page
    const login = new LoginPage(page);
    await login.gotoUrl();
    await login.login('pavanol', 'test@123');
    await page.waitForTimeout(3000);
    // Home Page
    const home = new HomePage(page);
    await home.addProducts('Sony vaio i5');
    await page.waitForTimeout(2000);
    await home.goToCart();
    // Cart Page
    const cart = new CartPage(page);
    await page.waitForTimeout(2000);
    const status = await cart.checkProduct('Sony vaio i5');
    await expect(status).toBe(true);
    // Place Order Page
    const placeOrder = new PlaceOrder(page);
    await page.waitForTimeout(2000);
    await placeOrder.placeOrder('Vishnu', 'India', 'Chennai', '272527452874', '11', '2027');
    const orderStatus = await placeOrder.verifyOrderPlaced();
    await expect(orderStatus).toBe(true);
});