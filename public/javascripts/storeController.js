clothesStore.controller('StoreController', function () {
    var self = this;
    self.products = store.products;
    self.basket = [];
    self.total = 0;
    self.add = function (item) {        
        self.basket.push(item);
        self.total += item.price;
    };
    self.remove = function (item) {
        var index = self.basket.indexOf(item);
        if (index > -1) {
            self.basket.splice(index, 1);
        }
    };
    self.redeem = function (voucher) {
        if (voucher == 'fiver') {
            self.total -= 5;
        } else if (voucher == 'tenner' && self.total > 50) {
            self.total -= 10;
        } else if (voucher == 'fifteen' && self.total > 75 && basketIncludes('Footwear')) {
            self.total -= 15;
        } else {
            self.voucherError = 'invalid code';
        }
    };
    function basketIncludes (category) {
        return self.basket.some(elem => elem.category.indexOf(category) > -1);
    };
});
