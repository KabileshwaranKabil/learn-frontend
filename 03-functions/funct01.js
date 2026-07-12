
// Function Declaration
console.log(greet("Kabileshwaran")); // works before definition
function greet(name) {
  return `Hello, ${name}!`;
}

// Function Expression
const greetExpr = function(name) {
  return `Hello, ${name}!`;
};
console.log(greetExpr("Student"));

// Arrow Function
const add = (a, b) => a + b;
console.log("Arrow add:", add(5, 7));