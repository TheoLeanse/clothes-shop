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
        expect(ctrl.shoppingCart).toBeDefined();
    });
    it('shopping cart is created empty', function () {
        expect(ctrl.shoppingCart).toEqual([]);
    });
    it('should allow a user to add a product to their shopping cart', function () {
        ctrl.addToCart(store.products[0])
        expect(ctrl.shoppingCart).toEqual([]);
    });
});
