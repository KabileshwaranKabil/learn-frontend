// JavaScript Introduction Examples

// Beginner: Hello World
console.log("Hello, World!");

// Variables
let name = "Kabileshwaran";
const age = 25;
console.log(`Name: ${name}, Age: ${age}`);

// Function Example
function greet(user) {
  return `Hello, ${user}!`;
}
console.log(greet(name));

// Edge Case: Implicit Global (BAD PRACTICE)
function badPractice() {
  message = "This is global!";
}
badPractice();
console.log(message); // Works, but dangerous

// Fix: Always declare variables
function goodPractice() {
  let message = "Scoped properly!";
  console.log(message);
}
goodPractice();

// Practice Task 1: Print your name and age
function printInfo(name, age) {
  console.log(`Name: ${name}, Age: ${age}`);
}
printInfo("Kabileshwaran", 25);

// Practice Task 2: Add two numbers
function add(a, b) {
  return a + b;
}
console.log(add(5, 7));

// Practice Task 3: Log message 5 times
for (let i = 1; i <= 5; i++) {
  console.log("JavaScript is awesome!");
}
