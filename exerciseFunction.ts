type Product = {
    name: string;
    price: number;
    category: string;
};

//define array of products

let products: Product[] = [
    {name: 'Laptop', price: 50000, category: 'Electronics'},
    {name: 'Shirt', price: 1200, category: 'Apparel'},
    {name: 'Coffee Maker', price: 2500, category: 'Appliances'},
]

//filter function
function prodFiltered(prod: Product[], price: number):Product[] {
    return prod.filter(p => p.price >= price);
}

//10% discount function
function prodDiscount(prod: Product[]): Product[] {
    return prod.map(p => ({...p, price: p.price * 0.90}));
}

let filtered = prodFiltered(products, 1500);
let discount = prodDiscount(filtered);

console.log("Filtered and 10% discount: ", discount);


