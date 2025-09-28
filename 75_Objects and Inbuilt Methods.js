const books = {
  b001: { title: 'To Kill a Mockingbird', price: 18.99, isAvailable: true },
  b002: { title: '1984', price: 15.99, isAvailable: false },
  b003: { title: 'The Great Gatsby', price: 12.49, isAvailable: true },
  b004: { title: 'Moby Dick', price: 22.5, isAvailable: false },
};

// We don't create objects as shown below:
const product = new Object();
product.name = 'Coffee Machine';
console.log(product);

// Using Object.keys
console.log(Object.keys(books)); // ['b001', 'b002', 'b003', 'b004']
