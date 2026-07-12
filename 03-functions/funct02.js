// Parameters & Return Values
function multiply(a, b) {
  return a * b;
}
console.log("Multiply:", multiply(3, 4));

// Default Parameters
function greet(name = "Guest") {
  return `Hello, ${name}!`;
}
console.log(greet()); // Hello, Guest!

// Rest Parameters
function sum(...numbers) {
  return numbers.reduce((acc, n) => acc + n, 0);
}
console.log("Sum:", sum(1, 2, 3, 4));

// Spread Syntax
const arr = [10, 20, 30];
console.log("Max:", Math.max(...arr));