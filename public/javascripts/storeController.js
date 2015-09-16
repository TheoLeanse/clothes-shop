clothesStore.controller('StoreController', function () {
    var self = this;
    self.products = store.products;
    self.basket = [];
    self.total = 0;
    self.add = function (item) {        
        self.basket.push(item);
        updateTotal(item.price);
    };
    function updateTotal (price) {
        self.total += price;
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
        } else {
            self.voucherError = 'invalid code';
        }
    };
});
