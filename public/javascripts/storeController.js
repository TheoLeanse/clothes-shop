clothesStore.controller('StoreController', function () {
    var self = this;
    self.products = store.products;
    self.shoppingCart = [];
    self.addToCart = function (item) {        
        self.shoppingCart.push(item);
    }
});
