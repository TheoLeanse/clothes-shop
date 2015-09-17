describe('Applying a voucher', function () {
    var discountCodeField = element(by.model('voucher'));
    var totalPriceEl = element(by.binding('storeCtrl.total'));
    var discountErrorEl = element(by.binding('storeCtrl.voucherError'));
    var items = element.all(by.repeater('product in storeCtrl.products'));
    var blueFlipflopsElmnts = items.filter(function (elem) {
        return elem.getText().then(function(text) {
            return (text.indexOf('Flip Flops, Blue') > -1);
        });
    });
    var buyBlueFlipflopsBtn = blueFlipflopsElmnts.get(0).element(by.buttonText('Add to cart'));
    var courtShoesElmnts = items.filter(function (elem) {
        return elem.getText().then(function(text) {
            return (text.indexOf('Court Shoes') > -1);
        });
    });
    var buyCourtShoesBtn = courtShoesElmnts.get(0).element(by.buttonText('Add to cart'));
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
        expect(discountErrorEl.getText()).toEqual('invalid code');
        expect(totalPriceEl.getText()).toEqual('Total: £99.00');
    });
    it('should allow \'tenner\' discount with total over £50', function () {
        element(by.buttonText('Add to cart')).click();
        discountCodeField.sendKeys('tenner');
        discountCodeField.sendKeys(protractor.Key.ENTER);
        expect(totalPriceEl.getText()).toEqual('Total: £89.00');
    });
    it('should error with \'tenner\' discount on order under £50', function () {        
        buyBlueFlipflopsBtn.click();
        discountCodeField.sendKeys('tenner');
        discountCodeField.sendKeys(protractor.Key.ENTER);
        expect(totalPriceEl.getText()).toEqual('Total: £19.00');
        expect(discountErrorEl.getText()).toEqual('invalid code');
    });
    it('should apply \'fifteen\' voucher if valid', function () {
        buyCourtShoesBtn.click();
        discountCodeField.sendKeys('fifteen');
        discountCodeField.sendKeys(protractor.Key.ENTER);
        expect(totalPriceEl.getText()).toEqual('Total: £84.00');
    });
});
