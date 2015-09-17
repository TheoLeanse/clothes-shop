var helper = require('./spec-helpers');

describe('Viewing an order\'s total price', function () {
    var courtShoesElmnts = helper.elementsByProductName('Court Shoes');
    var courtShoesPrice = courtShoesElmnts.get(0).element(by.binding('product.price'));
    var cartPriceTagEl = helper.basketItems.get(0).element(by.binding('item.price'));
    var totalPriceEl = element(by.binding('storeCtrl.total'));
    
    beforeEach(function () {
        browser.get('http://localhost:8080');
    });

    it('should have a price per item in the store section', function () {
        expect(courtShoesPrice.getText()).toEqual('£99.00');
    });
    it('should show item prices in the cart', function () {
        helper.addProductToCart('Court Shoes');
        expect(cartPriceTagEl.getText()).toEqual('£99.00');
    });
    it('should show the total price of cart items with one item', function () {
        helper.addProductToCart('Court Shoes');
        expect(totalPriceEl.getText()).toEqual('Total: £99.00');
    });
});
