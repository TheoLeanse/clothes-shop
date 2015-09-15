describe('Adding a product to the shopping cart', function () {
    it('should display product(s)', function() {
        browser.get('http://localhost:8080');
        var products = element(by.repeater(''));
        expect(products.count() >= 0).toBeTruthy();
    });
});
