describe('Removing items from shopping cart', function () {
    var cart       = element.all(by.repeater('item in storeCtrl.basket'));
    var products   = element.all(by.repeater('product in storeCtrl.products'))
    var addBtn     = products.get(0).element(by.buttonText('Add to cart'));
    var removeBtn  = cart.get(0).element(by.buttonText('Remove from cart'));

    beforeEach(function () {
        browser.get('http://localhost:8080');
    });

    it('should allow a user to remove an item', function () {
        addBtn.click();
        removeBtn.click();
        expect(cart.count()).toEqual(0);
    });
});
