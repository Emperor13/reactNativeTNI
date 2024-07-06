var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
//define array of products
var products = [
    { name: 'Laptop', price: 50000, category: 'Electronics' },
    { name: 'Shirt', price: 1200, category: 'Apparel' },
    { name: 'Coffee Maker', price: 2500, category: 'Appliances' },
];
//filter function
function prodFiltered(prod, price) {
    return prod.filter(function (p) { return p.price >= price; });
}
//10% discount function
function prodDiscount(prod) {
    return prod.map(function (p) { return (__assign(__assign({}, p), { price: p.price * 0.90 })); });
}
var filtered = prodFiltered(products, 1000);
var discount = prodDiscount(filtered);
console.log("Filtered and 10% discount: ", discount);
