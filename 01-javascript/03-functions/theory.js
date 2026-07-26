// Functions 
/*
Functions allow you to group code, reuse logic, and organize programs.
*/

// Function Declaration

function greet(name){
    console.log("Hello " + name);
}

greet('Kabileshwaran'); // Hello Kabileshwaran


// Returning Values

function sum(a,b){
    return a + b;
}

let num1 = 10;
let num2 = 20;
console.log(`Sum of ${num1} and ${num2}: ${sum(num1,num2)}`);


// Function Expression
// Functions can be stored in variables.

/*
    Difference:
*   Declaration → hoisted
*   Expression → not hoisted
*/

let a = 4;
let b = 2;
const multiply = function(a,b){
    return a * b;
}
console.log(`Multiplication : ${multiply(a,b)}`);

// Arrow Functions 

const divide = (a,b) => {
    return a / b;
}

console.log(`Division : `)


const square = x => x * x; // single parameter, implicit return

console.log(`Square of 5 : ${square(5)}`);

