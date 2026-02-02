/*
1. Create an object `book` with:

   * `title`
   * `author`
   * `price`

2. Print the `title` using dot notation.

3. Add a method `discount()` that prints:

   ```
   Discount applied
   ```
*/

// 1.

let book = {
    title: "Data Structures and Algorithms Using Java",
    author: "Johnson M.L",
    price: 234.12
};

console.log(book.title);
book.discount= function(){
    console.log("Discount Applied!");
}

book.discount();
