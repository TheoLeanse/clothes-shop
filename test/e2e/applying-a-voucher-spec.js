var helper = require('./spec-helpers');

describe('Applying a voucher', function () {
    var totalPriceEl = element(by.binding('storeCtrl.total'));
    var discountErrorEl = element(by.binding('storeCtrl.voucherError'));

    beforeEach(function () {
        browser.get('http://localhost:8080');
    });

    it('should allow user to enter \'fiver\' discount code', function () {
        helper.addProductToCart('Court Shoes');
        helper.enterVoucher('fiver');
        expect(totalPriceEl.getText()).toEqual('Total: £94.00');
    });
    it('should show error with incorrect code', function () {
        helper.addProductToCart('Court Shoes');
        helper.enterVoucher('wrong');
        expect(discountErrorEl.getText()).toEqual('invalid code');
        expect(totalPriceEl.getText()).toEqual('Total: £99.00');
    });
    it('should allow \'tenner\' discount with total over £50', function () {
        helper.addProductToCart('Court Shoes');
        helper.enterVoucher('tenner');
        expect(totalPriceEl.getText()).toEqual('Total: £89.00');
    });
    it('should error with \'tenner\' discount on order under £50', function () {       
        helper.addProductToCart('Flip Flops, Blue')
        helper.enterVoucher('tenner');
        expect(totalPriceEl.getText()).toEqual('Total: £19.00');
        expect(discountErrorEl.getText()).toEqual('invalid code');
    });
    it('should apply \'fifteen\' voucher if valid', function () {
        helper.addProductToCart('Court Shoes');
        helper.enterVoucher('fifteen');
        expect(totalPriceEl.getText()).toEqual('Total: £84.00');
    });
});
