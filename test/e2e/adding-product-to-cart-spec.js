describe('Adding a product to the shopping cart', function () {
    var productList = element.all(by.repeater('product in storeCtrl.products'));
    beforeEach(function () {
        browser.get('http://localhost:8080');
    });
    it('should display product name(s)', function() {
        expect(productList.get(0).getText()).toEqual('Almond Toe Court Shoes, Patent Black');
    });
});
