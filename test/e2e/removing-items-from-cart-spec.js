describe('Removing items from shopping cart', function () {
    var cart = element.all(by.repeater('cartItem in storeCtrl.shoppingCart'));
    beforeEach(function () {
        browser.get('http://localhost:8080');
    });
    it('should allow a user to remove an item', function () {
        element(by.buttonText('Add to cart')).click();
        element(by.buttonText('Remove from cart')).click();
        expect(cart.count()).toEqual(0);
    });
});
