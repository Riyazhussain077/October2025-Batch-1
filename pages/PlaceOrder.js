exports.PlaceOrder = class PlaceOrder {
    constructor(page) {
        this.page = page;
        this.placeOrderBtn = '//button[text()="Place Order"]';
        this.nameField = '#name';
        this.countryField = '#country';
        this.cityField = '#city';
        this.cardField = '#card';
        this.monthField = '#month';
        this.yearField = '#year';
        this.purchaseBtn = '[onclick="purchaseOrder()"]';
        this.okBtn = '//button[text()="OK"]';
        this.confirmationMsg = '.sweet-alert h2';
    }
    async placeOrder(name, country, city, card, month, year) {
        await this.page.locator(this.placeOrderBtn).click();
        await this.page.locator(this.nameField).fill(name);
        await this.page.locator(this.countryField).fill(country);
        await this.page.locator(this.cityField).fill(city);
        await this.page.locator(this.cardField).fill(card);
        await this.page.locator(this.monthField).fill(month);
        await this.page.locator(this.yearField).fill(year);
        await this.page.locator(this.purchaseBtn).click();
    }
    async verifyOrderPlaced() {
        const confirmationText = await this.page.locator(this.confirmationMsg).textContent();
        console.log('Order Confirmation : ' , confirmationText);
        await this.page.locator(this.okBtn).click();
        return confirmationText.includes('Thank you for your purchase!');
    }
}