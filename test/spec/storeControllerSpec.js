describe('StoreController', function () {
    var ctrl;
    beforeEach(module('ClothesStore'));;
    beforeEach(inject(function($controller) {
        ctrl = $controller('StoreController');
    }));
    it('should have a list of products', function () {
        expect(ctrl.products).toEqual(store.products);
    });
    it('should have a shopping cart', function () {
        expect(ctrl.basket).toBeDefined();
    });
    it('shopping cart is created empty', function () {
        expect(ctrl.basket).toEqual([]);
    });
    it('should allow a user to add a product to their shopping cart', function () {
        ctrl.add(store.products[0])
        expect(ctrl.basket[0].name).toEqual('Almond Toe Court Shoes, Patent Black');
    });
    it('should allow a user to remove a product from their cart', function () {
        ctrl.add(store.products[0]);
        ctrl.remove(store.products[0]);
        expect(ctrl.basket).toEqual([]);
    });
    it('should calculate the cart total', function () {
        ctrl.add(store.products[0]);
        expect(ctrl.total).toEqual(99);
    });
    it('should apply a $5 discount with code \'fiver\'', function () {
        ctrl.add(store.products[0]);
        ctrl.redeem('fiver');
        expect(ctrl.total).toEqual(94);
    });
    it('should apply a £10 discount with code \'tenner\' and total over £50', function () {
        ctrl.add(store.products[0]);
        ctrl.redeem('tenner');
        expect(ctrl.total).toEqual(89);
    });
    it('should error on incorrect discount code', function () {
        ctrl.add(store.products[0]);
        ctrl.redeem('wrong');
        expect(ctrl.voucherError).toEqual('invalid code');
    });
});
