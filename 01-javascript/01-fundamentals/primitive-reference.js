// Primitive vs Reference Types

console.log("=== Primitive vs Reference Demo ===");

// Example 1: Primitive copy
let a = 10;
let b = a; // copy value
b = 20;
console.log("a:", a); // 10
console.log("b:", b); // 20

// Example 2: Reference copy
let obj1 = { name: "Kabileshwaran" };
let obj2 = obj1; // copy reference
obj2.name = "Kabi";
console.log("obj1.name:", obj1.name); // "Kabi"
console.log("obj2.name:", obj2.name); // "Kabi"

// Example 3: Arrays are reference types
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);
console.log("arr1:", arr1); // [1,2,3,4]
console.log("arr2:", arr2); // [1,2,3,4]

// Fix: Copy arrays safely
let arr3 = [1, 2, 3];
let arr4 = [...arr3]; // spread operator
arr4.push(4);
console.log("arr3:", arr3); // [1,2,3]
console.log("arr4:", arr4); // [1,2,3,4]

// Fix: Copy objects safely
const user = { name: "Kabileshwaran", age: 25 };
const copyUser = { ...user };
copyUser.age = 26;
console.log("Original user:", user);
console.log("Copied user:", copyUser);

// Practice Task 1: Primitive independence
let x = "Hello";
let y = x;
y = "World";
console.log("x:", x); // Hello
console.log("y:", y); // World

// Practice Task 2: Reference sharing
const book1 = { title: "JS Basics" };
const book2 = book1;
book2.title = "Advanced JS";
console.log("book1:", book1); // Advanced JS
console.log("book2:", book2); // Advanced JS

// Practice Task 3: Safe array copy
const nums = [10, 20, 30];
const numsCopy = [...nums];
numsCopy[0] = 99;
console.log("nums:", nums); // [10,20,30]
console.log("numsCopy:", numsCopy); // [99,20,30]
