const books = {
  b001: { title: 'To Kill a Mockingbird', price: 18.99, isAvailable: true },
  b002: { title: '1984', price: 15.99, isAvailable: false },
  b003: { title: 'The Great Gatsby', price: 12.49, isAvailable: true },
  b004: { title: 'Moby Dick', price: 22.5, isAvailable: false },
};

/*
Challenge #1:
  1. Use Object.keys to get an array of keys. 
     You can store it in a const 'bookKeys'. 
  2. Iterate over bookKeys twice.
     A) First log each individual key in the array.
     B) Then log only the book titles.
*/

/*
Expected Output 2A: b001
                    b002
                    b003
                    b004
Expected Output 2B: To Kill a Mockingbird
                    1984
                    The Great Gatsby
                    Moby Dick
*/

//////////////////////
// SEE ANSWER BELOW //
//////////////////////

const bookKeys = Object.keys(books);
console.log(bookKeys); // ['b001', 'b002', 'b003', 'b004']
bookKeys.forEach((key) => console.log(key)); // Answer for 2A
bookKeys.forEach((key) => console.log(books[key].title)); // Answer for 2B

/*
Challenge #2:
  1. Create an array of values using Object.values
  2. Iterate over it and log out each book price.
*/

//////////////////////
// SEE ANSWER BELOW //
//////////////////////

const bookValues = Object.values(books);
console.log(bookValues); // Answer for 1
// [{title: 'To Kill a Mockingbird', price: 18.99, isAvailable: true}, {title: '1984', price: 15.99, isAvailable: false}, {title: 'The Great Gatsby', price: 12.49, isAvailable: true}, {title: 'Moby Dick', price: 22.5, isAvailable: false}]

bookValues.forEach((val) => console.log(val.price)); // Answer for 2
