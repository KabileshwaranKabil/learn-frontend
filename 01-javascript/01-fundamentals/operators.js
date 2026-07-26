// Operators in JavaScript

console.log("=== Operators Demo ===");

// Arithmetic
let x = 10;
let y = 3;
console.log("x + y =", x + y);
console.log("x - y =", x - y);
console.log("x * y =", x * y);
console.log("x / y =", x / y);
console.log("x % y =", x % y);
console.log("x ** y =", x ** y);

// Comparison
console.log("5 > 3:", 5 > 3);
console.log("5 < 3:", 5 < 3);
console.log("5 == '5':", 5 == "5");   // true (loose)
console.log("5 === '5':", 5 === "5"); // false (strict)

// Logical
let a = true;
let b = false;
console.log("a && b:", a && b);
console.log("a || b:", a || b);
console.log("!a:", !a);

// Assignment
let num = 10;
num += 5;
console.log("num after += 5:", num);

// Edge Case: Operator precedence
console.log("2 + 3 * 4 =", 2 + 3 * 4); // 14
console.log("(2 + 3) * 4 =", (2 + 3) * 4); // 20

// Common Mistake: == vs ===
console.log("0 == false:", 0 == false);   // true
console.log("0 === false:", 0 === false); // false

// Practice Task 1: Area of rectangle
let length = 5;
let width = 10;
let area = length * width;
console.log("Area of rectangle:", area);

// Practice Task 2: Compare numbers
let n1 = 15;
let n2 = 20;
if (n1 > n2) {
  console.log("n1 is larger");
} else if (n2 > n1) {
  console.log("n2 is larger");
} else {
  console.log("Both are equal");
}

// Practice Task 3: Check if number between 10 and 20
let checkNum = 15;
if (checkNum >= 10 && checkNum <= 20) {
  console.log(checkNum, "is between 10 and 20");
} else {
  console.log(checkNum, "is outside the range");
}