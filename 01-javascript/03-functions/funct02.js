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
    // The three dots (...) mean "collect all arguments into an array".
    return numbers.reduce((acc, n) => acc + n, 0);
    // for sum(1,2,3,4) :-> numbers = [1,2,3,4]
    // reduce is an array method that processes each element
    // combines them into single value.

    // it takes a callback function and an initial value
    // acc -> accumulator (stores the running total)
    // n = current number in the array.
    // 0 at the end is the initial value of the accumulator.
}
console.log("Sum:", sum(1, 2, 3, 4));



function total(...numbers){
  let total = 0
  for(let number of numbers){
    total += number
  }
  return total
}
console.log(`SUM : ${total(1,2,3,4,5,6,7,8,9,10)}`)


// Spread Syntax
const arr = [10, 20, 30];
console.log("Max:", Math.max(...arr));