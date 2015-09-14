describe('StoreController', function () {
    beforeEach(module('ClothesStore'));;
    var ctrl;
    beforeEach(inject(function($controller) {
        ctrl = $controller('StoreController');
    }));
    it('should have a shopping cart', function () {
        expect(ctrl.shoppingCart).toBeDefined();
    });
});
