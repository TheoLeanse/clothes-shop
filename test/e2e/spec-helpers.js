module.exports = {
    products: element.all(by.repeater('product in storeCtrl.products')),
    elementsByProductName: function (item) {
        return this.products.filter(function (elem) {
            return elem.getText().then(function(text) {
                return (text.indexOf(item) > -1);
            });
        });
    },
    addProductToCart: function (item) {
        var el = this.elementsByProductName(item).get(0);
        el.element(by.buttonText('Add to cart')).click();
    },
    basketItems: element.all(by.repeater('item in storeCtrl.basket')),
    enterVoucher: function (code) {
        element(by.model('voucher')).sendKeys(code).sendKeys(protractor.Key.ENTER);
    }
};
