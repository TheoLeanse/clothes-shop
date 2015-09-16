describe('Viewing an order\'s total price', function () {
    var priceTagEl = element(by.binding('product.price'));
    it('should have a price per item', function () {
        expect(priceTagEl.getText()).toEqual('£99.00');
    });
});
