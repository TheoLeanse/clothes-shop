describe("Products", function () {
    it('should be a list of one or more products', function () {
        expect(store.products[0]).toBeDefined();
    });
    describe('a product', function () {
        it('should have a product name', function () {
            expect(store.products[0].productName).toEqual('Almond Toe Court Shoes, Patent Black');            
        });
        it('should have a price', function () {
            expect(store.products[0].price).toEqual(99);
        });
    });
});
