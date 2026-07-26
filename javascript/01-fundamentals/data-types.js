// Data Types in JavaScript

console.log("=== Data Types Demo ===");

// Primitive Types
let name = "Kabileshwaran"; // string
let age = 25;               // number
let isStudent = true;       // boolean
let nothing = null;         // null
let notDefined;             // undefined
let uniqueId = Symbol("id"); // symbol

console.log("Name:", name);
console.log("Age:", age);
console.log("Is Student:", isStudent);
console.log("Nothing:", nothing);
console.log("Not Defined:", notDefined);
console.log("Unique ID:", uniqueId);

// Reference Types
let person = { name: "Kabileshwaran", age: 25 };
let numbers = [1, 2, 3];

console.log("Person object:", person);
console.log("Numbers array:", numbers);

// typeof checks
console.log("typeof name:", typeof name); // string
console.log("typeof age:", typeof age);   // number
console.log("typeof nothing:", typeof nothing); // object (quirk!)
console.log("typeof notDefined:", typeof notDefined); // undefined
console.log("Array check:", Array.isArray(numbers)); // true

// Common Mistake: typeof null
console.log("typeof null:", typeof null); // "object"

// Practice Task 1: Declare one variable of each primitive type
let str = "Hello";
let num = 42;
let bool = false;
let undef;
let nul = null;
let sym = Symbol("practice");

console.log(str, num, bool, undef, nul, sym);

// Practice Task 2: Book object
const book = {
  title: "JavaScript Basics",
  author: "Kabileshwaran",
  year: 2026
};
console.log("Book object:", book);

// Practice Task 3: Array of numbers
const arr = [10, 20, 30, 40, 50];
console.log("Third element:", arr[2]);