describe('Applying a voucher', function () {
    var discountCodeField = element(by.model('code'));
    var totalPriceEl = element(by.binding('storeCtrl.cartTotal()'));
    var discountErrorEl = element(by.binding('storeCtrl.discountMessage'));
    var items = element.all(by.repeater('product in storeCtrl.products'));
    var blueFlipflopsElmnts = items.filter(function (elem) {
        return elem.getText().then(function(text) {
            return (text.indexOf('Flip Flops, Blue') > -1);
        });
    });
    var buyBlueFlipflopsBtn = blueFlipflopsElmnts.get(0).element(by.buttonText('Add to cart'));
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
        discountCodeField.sendKeys('wrong');
        discountCodeField.sendKeys(protractor.Key.ENTER);
        expect(discountErrorEl.getText()).toEqual('incorrect code');
        expect(totalPriceEl.getText()).toEqual('Total: £99.00');
    });
    it('should allow \'tenner\' discount with total over £50', function () {
        element(by.buttonText('Add to cart')).click();
        discountCodeField.sendKeys('tenner');
        discountCodeField.sendKeys(protractor.Key.ENTER);
        expect(totalPriceEl.getText()).toEqual('Total: £89.00');
    });
    it('should error with \'tenner\' discount on order under £50', function () {        
        buyBlueFlipFlopsBtn.click();
        discountCodeField.sendKeys('tenner');
        discountCodeField.sendKeys(protractor.Key.ENTER);
        expect(totalPriceEl.getText()).toEqual('Total: £19.00');
        expect(discountErrorEl.getText()).toEqual('invalid code');
    });
});
