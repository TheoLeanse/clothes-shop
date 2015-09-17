var helper = require('./spec-helpers');

describe('Removing items from shopping cart', function () {
    var removeBtn  = helper.basketItems.get(0).element(by.buttonText('Remove from cart'));

    beforeEach(function () {
        browser.get('http://localhost:8080');
    });

    it('should allow a user to remove an item', function () {
        helper.addProductToCart('Court Shoes');
        removeBtn.click();
        expect(helper.basketItems.count()).toEqual(0);
    });
});
