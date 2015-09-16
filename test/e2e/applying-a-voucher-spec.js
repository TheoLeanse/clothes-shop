describe('Applying a voucher', function () {
    var discountCodeField = element(by.model('storeCtrl.discountCode'));
    var totalPriceEl = element(by.binding('storeCtrl.cartTotal()'));
    var discountErrorEl = element(by.binding('storeCtrl.discountMessage'));
    beforeEach(function () {
        browser.get('http://localhost:8080');
    });
    it('should allow user to enter \'fiver\' discount code', function () {
        element(by.buttonText('Add to cart')).click();
        discountCodeField.sendKeys('fiver');
        discountCodeField.sendKeys(protractor.Key.ENTER);
        expect(totalPriceEl.getText()).toEqual('Total: £94.00');
    });
    it('should show error with incorrect code', function () {
        element(by.buttonText('Add to cart')).click();
        discountCodeField.sendKeys('tenner');
        discountCodeField.sendKeys(protractor.Key.ENTER);
        expect(discountErrorEl.getText()).toEqual('incorrect code');
        expect(totalPriceEl.getText()).toEqual('Total: £99.00');
    });
});
