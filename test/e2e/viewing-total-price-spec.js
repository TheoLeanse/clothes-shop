describe('Viewing an order\'s total price', function () {
    var products = element.all(by.repeater('product in storeCtrl.products'));
    var storePriceTagEl = products.get(0).element(by.binding('product.price'));
    var courtShoesElmnts = products.filter(function(element) {
        return element.getText().then(function(text) {
            return (text.indexOf('Court Shoes') > -1);
        });
    });
    var courtShoesPrice = courtShoesElmnts.get(0).element(by.binding('product.price'));
    var cartEl = element(by.repeater('item in storeCtrl.basket'));
    var cartPriceTagEl = cartEl.element(by.binding('item.price'));
    var addItemBtn = element(by.buttonText('Add to cart'));
    var totalPriceEl = element(by.binding('storeCtrl.total'));
    
    beforeEach(function () {
        browser.get('http://localhost:8080');
    });

    it('should have a price per item in the store section', function () {
        expect(courtShoesPrice.getText()).toEqual('£99.00');
    });
    it('should show item prices in the cart', function () {
        element(by.buttonText('Add to cart')).click();
        expect(cartPriceTagEl.getText()).toEqual('£99.00');
    });
    it('should show the total price of cart items with one item', function () {
        element(by.buttonText('Add to cart')).click();
        expect(totalPriceEl.getText()).toEqual('Total: £99.00');
    });
});
