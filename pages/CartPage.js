exports.CartPage = class CartPage {

    constructor(page) {
        this.page = page;
        this.productCount = '//tbody[@id="tbodyid"]/tr/td[2]';
    }

    async checkProduct(productName) {
        const productInCart = await this.page.$$(this.productCount);
        for(const product of productInCart) {
            console.log(await product.textContent())
            if(productName === await product.textContent()) {
                break;
            }
        }
        return true;
    };
};