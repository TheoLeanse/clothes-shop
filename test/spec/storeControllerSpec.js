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
        expect(ctrl.shoppingCart).toEqual([{ name: 'Almond Toe Court Shoes, Patent Black', price: 99 }]);
    });
    it('should allow a user to remove a product from their cart', function () {
        ctrl.addToCart(store.products[0]);
        ctrl.remove(store.products[0]);
        expect(ctrl.shoppingCart).toEqual([]);
    });
    it('should calculate the cart total', function () {
        ctrl.addToCart(store.products[0]);
        expect(ctrl.cartTotal()).toEqual('£99.00');
    });
    it('should apply a $5 discount with code \'fiver\'', function () {
        ctrl.addToCart(store.products[0]);
        ctrl.discountCode = 'fiver';
        ctrl.applyDiscount();
        expect(ctrl.cartTotal()).toEqual('£94.00');
    });
    it('should error on incorrect discount code', function () {
        ctrl.addToCart(store.products[0]);
        ctrl.discountCode = 'tenner';
        ctrl.applyDiscount();
        expect(ctrl.discountMessage).toEqual('incorrect code');
    });
});
