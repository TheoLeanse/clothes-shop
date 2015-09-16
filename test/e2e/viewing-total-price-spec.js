describe('Viewing an order\'s total price', function () {
    var storeEl = element(by.repeater('product in storeCtrl.products'));
    var storePriceTagEl = storeEl.element(by.binding('product.price'));
    var cartEl = element(by.repeater('cartItem in storeCtrl.shoppingCart'));
    var cartPriceTagEl = cartEl.element(by.binding('cartItem.price'));
//    var addItemBtn = element(by.buttonText('Add to cart'));
    beforeEach(function () {
        browser.get('http://localhost:8080');
    });
    it('should have a price per item in the store section', function () {
        expect(storePriceTagEl.getText()).toEqual('£99.00');
    });
    it('should show item prices in the cart', function () {
        element(by.buttonText('Add to cart')).click();
        expect(cartPriceTagEl.getText()).toEqual('£99.00');
    });
});
