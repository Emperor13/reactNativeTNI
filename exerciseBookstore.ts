interface Book {
    title: string;
    genre: 'fiction' | 'non-fiction' | 'educational';
    price: number;
}

const book: Book[] = [
    {title: "The Great Gatsby", genre: "fiction", price: 320},
    {title: "War abd Peace", genre: "fiction", price: 250},
    {title: "Economics 101", genre: "educational", price: 480},
    {title: "In Code Blood", genre: "non-fiction", price: 300},
    {title: "The Catcher in the Rye", genre: "fiction", price: 400},
];

function filterBook(book: Book[], setPrice: number):Book[] {
    return book.filter(b => b.price > setPrice && b.genre === "fiction");
}

function discountBook(book: Book[]):Book[] {
    return book.map(b => ({...b, price: b.price * 0.90}));
}

let filtered = filterBook(book, 300);
let discounted = discountBook(filtered);

console.log(discounted);