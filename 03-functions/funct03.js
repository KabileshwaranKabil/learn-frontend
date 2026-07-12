// Callback Function
function processUserInput(callback) {
  const name = "Kabileshwaran";
  callback(name);
}
processUserInput((n) => console.log("Hello,", n));

// Higher Order Function
function makeMultiplier(factor) {
  return function(x) {
    return x * factor;
  };
}
const triple = makeMultiplier(3);
console.log("Triple:", triple(4));

// Recursion
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
console.log("Factorial 5:", factorial(5));