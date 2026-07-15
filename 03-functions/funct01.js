
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


const multiply = (a,b) => a * b;
console.log(multiply(10,4));

const operation = (a,b,c,d) => ((a*b)/c-(d))
console.log(typeof(operation(12,32,4,5)))
console.log(operation(12,32,4,5))