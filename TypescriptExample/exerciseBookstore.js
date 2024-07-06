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
var book = [
    { title: "The Great Gatsby", genre: "fiction", price: 320 },
    { title: "War abd Peace", genre: "fiction", price: 250 },
    { title: "Economics 101", genre: "educational", price: 480 },
    { title: "In Code Blood", genre: "non-fiction", price: 300 },
    { title: "The Catcher in the Rye", genre: "fiction", price: 400 },
];
function filterBook(book, setPrice) {
    return book.filter(function (b) { return b.price > setPrice && b.genre === "fiction"; });
}
function discountBook(book) {
    return book.map(function (b) { return (__assign(__assign({}, b), { price: b.price * 0.90 })); });
}
var filtered = filterBook(book, 300);
var discounted = discountBook(filtered);
console.log(discounted);
