describe('Adding a product to the shopping cart', function () {
    var productList  = element.all(by.repeater('product in storeCtrl.products'));
    var productName   = element(by.binding('product.name'));
    var addProductBtn = element(by.buttonText('Add to cart'));
    var cartItemName  = element(by.binding('item.name'));
    beforeEach(function () {
        browser.get('http://localhost:8080');
    });
    it('should display product name(s)', function () {
        expect(productName.getText()).toEqual('Almond Toe Court Shoes, Patent Black');
    });
    it('should allow a user to add a product to their cart', function () {
        addProductBtn.click();

        expect(cartItemName.getText()).toEqual('Almond Toe Court Shoes, Patent Black');
    });
});
