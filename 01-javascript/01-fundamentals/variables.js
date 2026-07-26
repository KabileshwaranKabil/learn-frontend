// Variables: let and const

console.log("=== Variables Demo ===");

// Example 1: let
let counter = 0;
counter++;
console.log("Counter:", counter); // 1

// Example 2: const
const PI = 3.14159;
console.log("PI:", PI);
// PI = 3.14; // ❌ Error: Assignment to constant variable

// Example 3: const with objects
const user = { name: "Kabileshwaran", age: 25 };
user.age = 26; // ✅ allowed
console.log("User after mutation:", user);

// Edge Case: Temporal Dead Zone
try {
  console.log(valueBeforeDeclaration); // ❌ ReferenceError
  let valueBeforeDeclaration = 10;
} catch (err) {
  console.error("TDZ Error:", err.message);
}

// Edge Case: const without initialization
// const x; // ❌ SyntaxError: Missing initializer

// Common Mistake: Using var
var oldVar = "I am function-scoped";
console.log(oldVar);

// Best Practice: Use const by default
const API_URL = "https://api.example.com";
let retries = 0;
while (retries < 3) {
  console.log(`Attempt ${retries + 1} to call API`);
  retries++;
}

// Practice Task 1: Mutate const object
const car = { brand: "Toyota", year: 2020 };
car.year = 2021;
console.log("Car after mutation:", car);

// Practice Task 2: Loop with let
for (let i = 1; i <= 5; i++) {
  console.log("Loop iteration:", i);
}

// Practice Task 3: TDZ demonstration
try {
  console.log(myVar); // ❌ ReferenceError
  let myVar = "Declared later";
} catch (err) {
  console.error("TDZ Demo Error:", err.message);
}
