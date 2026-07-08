/*
Write a function isEven that:
Takes a number
Returns true if even, else false
*/

function isEven(number){
    return number%2==0;
}

console.log(isEven(10));
console.log(isEven(13));


// Convert this function into an arrow function:

const isEvenNumber = (number) =>{
    return number %2==0;
}

const isENumber= number => number%2==0;
console.log(isENumber(29));