var helper = require('./spec-helpers');

describe('Adding a product to the shopping cart', function () {
    beforeEach(function () {
        browser.get('http://localhost:8080');
    });

    it('should display product name(s)', function () {
        var toolong = helper.elementsByProductName('Court Shoes').get(0).getText();
        expect(toolong).toContain('Almond Toe Court Shoes, Patent Black');
    });
    it('should allow a user to add a product to their cart', function () {
        helper.addProductToCart('Court Shoes');
        expect(helper.basketItems.get(0).getText()).toContain('Court Shoes');
    });
});
