enum ProductStatus {
  Available = "Available",
  OutOfStock = "Out of Stock",
  Discontinued = "Discontinued",
}

let products: any[] = [
  { name: "Laptop", status: ProductStatus.Available, price: 1200 },
  { name: "Smartphone", status: ProductStatus.OutOfStock, price: 700 },
  { name: "Tablet", status: ProductStatus.Discontinued, price: 300 },
];

// for (let product of products) {
//     console.log("Product: " + product.name + 
//         ", Status: " + product.status + 
//         ", Price: " + product.price);
// }


//create function to display data using arrow function
function displayProductDetails(products:any[]) {
    products.forEach(product => {
        console.log(`Product:${product.name}, Status:${product.status} , Price:${product.price}`);
    });
}

displayProductDetails(products);
