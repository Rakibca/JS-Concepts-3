const books = {
  b001: { title: 'To Kill a Mockingbird', price: 18.99, isAvailable: true },
  b002: { title: '1984', price: 15.99, isAvailable: false },
  b003: { title: 'The Great Gatsby', price: 12.49, isAvailable: true },
  b004: { title: 'Moby Dick', price: 22.5, isAvailable: false },
};

/*
Challenge:
  1. Use Object.entries to create an array from 'books'.
  2. Use an array method to filter out the books 
     which cost less than 16.
  3. Iterate over the remaining books and log a string 
     for each book in this format:
     ID: b001 Book: To Kill a Mockingbird £18.99
Bonus:
  4. Make your code DRYer by destructuring the array 
     where it is passed into a method.
  5. Chain the array methods together.
*/

/*
    Expected Output:
    ID: b001 Book: To Kill a Mockingbird £18.99
    ID: b004 Book: Moby Dick £22.5
*/

// SEE NOTES BELOW:
// Object.entries returns an array of arrays, where each inner
// array contains two elements: the key and the value of each
// property in the object.

//////////////////////
// SEE ANSWER BELOW //
//////////////////////

// Answer for 1
const bookEntries = Object.entries(books);
console.log(bookEntries); // [["b001", {title: "To Kill a Mockingbird", price: 18.99, isAvailable: true}], ["b002", {title: "1984", price: 15.99, isAvailable: false}], ["b003", {title: "The Great Gatsby", price: 12.49, isAvailable: true}], ["b004", {title: "Moby Dick", price: 22.5, isAvailable: false}]]

// Answer for 2
bookEntries.filter(([id, book]) => book.price > 16);

// Answer for 3, 4, 5
bookEntries
  .filter(([id, book]) => book.price > 16)
  .forEach(([id, book]) =>
    console.log(`ID: ${id} Book: ${book.title} £${book.price}`)
  );
// ID: b001 Book: To Kill a Mockingbird £18.99
// ID: b004 Book: Moby Dick £22.5
