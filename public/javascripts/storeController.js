clothesStore.controller('StoreController', function () {
    var self = this;
    self.products = store.products;
    self.shoppingCart = [];
    self.addToCart = function (item) {        
        self.shoppingCart.push(item);
    };
    self.remove = function (item) {
        var index = self.shoppingCart.indexOf(item);
        if (index > -1) {
            self.shoppingCart.splice(index, 1);
        }
    };
    self.cartTotal = function () {
        var total = 0;
        self.shoppingCart.forEach(function (element) {
            total += element.price;
        });
        if (self.hasFiverDiscount) {
            total -= 5;
        } else if (self.hasTennerDiscount && total > 50) {
            total -= 10;
        }
        return '£' + total.toFixed(2);
    };
    self.applyDiscount = function () {
        if (self.discountCode == 'fiver') {
            self.hasFiverDiscount = true;
        } else if (self.discountCode == 'tenner') {
            self.hasTennerDiscount = true;
        }
        else {
            self.discountMessage = 'incorrect code';
        }
    };
});
