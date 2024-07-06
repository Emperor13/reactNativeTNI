var ProductStatus;
(function (ProductStatus) {
    ProductStatus["Available"] = "Available";
    ProductStatus["OutOfStock"] = "Out of Stock";
    ProductStatus["Discontinued"] = "Discontinued";
})(ProductStatus || (ProductStatus = {}));
var products = [
    { name: "Laptop", status: ProductStatus.Available, price: 1200 },
    { name: "Smartphone", status: ProductStatus.OutOfStock, price: 700 },
    { name: "Tablet", status: ProductStatus.Discontinued, price: 300 },
];
// for (let product of products) {
//     console.log("Product: " + product.name + 
//         ", Status: " + product.status + 
//         ", Price: " + product.price);
// }
//create function to display data
function displayProductDetails(products) {
    products.forEach(function (product) {
        console.log("Product:".concat(product.name, ", Status:").concat(product.status, " , Price:").concat(product.price));
    });
}
displayProductDetails(products);
