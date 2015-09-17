describe('Adding a product to the shopping cart', function () {
    var items  = element.all(by.repeater('product in storeCtrl.products'));
    var courtShoesElmnts = items.filter(function (elem) {
        return elem.getText().then(function(text) {
            return (text.indexOf('Court Shoes') > -1);
        });
    });
    var buyCourtShoesBtn = courtShoesElmnts.get(0).element(by.buttonText('Add to cart'));
    var cartItemName  = element(by.binding('item.name'));
    beforeEach(function () {
        browser.get('http://localhost:8080');
    });
    it('should display product name(s)', function () {
        expect(courtShoesElmnts.get(0).element(by.binding('product.name')).getText()).toEqual('Almond Toe Court Shoes, Patent Black');
    });
    it('should allow a user to add a product to their cart', function () {
        buyCourtShoesBtn.click();

        expect(cartItemName.getText()).toEqual('Almond Toe Court Shoes, Patent Black');
    });
});
