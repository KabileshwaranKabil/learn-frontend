// let name = `Kabilesh`;

// console.log(name);
// console.log(typeof name);


// console.log(name.concat("waran"));// this doesn't affect to original value
// console.log(name);

/*
This is a multi line comment used in javascript as well.
*/

// Data types in javascript

/*
let name = "Dhanush"; // String
let age = 21; // Number
let height = 179.65; // Number
let is_married = false; // Boolean
let city = null; // Null -> Object
let value; // undefined

console.log(typeof name);
console.log(typeof age);
console.log(typeof height);
console.log(typeof is_married);
console.log(typeof city);
console.log(typeof value);


*/


// Template Literal

/*
let username = "Janagan";
console.log(`Hello, ${username}`);
*/

// Challenge 01 
/*
let name = "Kabileshwaran";
var age = 23;
let country = "Sri Lanka";
var future_goal = "To Become a Software Engineer";

console.log(`Name: ${name}`);
console.log(`Age: ${age}`);
console.log(`Country: ${country}`);
console.log(`Future Goal: ${future_goal}`);

// Conditional 
*/
/*
let age = 10;
if(age > 17){
    console.log("You're an adult!");
}else{
    console.log("You're a child!");
}
*/

// Comparison Operator
    /*
    ==  -> Equal value 
    === -> Equal value and type 
    !=  -> Not Equal 
    !== -> Not Equal value or type
    >   -> Greater than 
    <   -> Lesser than 
    >=  -> Greater than or equal 
    <=  -> Lesser than or equal 
*/

// Logical Operator
/*
&& -> AND 
|| -> OR
!  -> NOT
*/


// Challenge 02
/*
let age = 2;
let hasId = true;
if(age>=18 && hasId){
    console.log(`Entry Allowed!`);
}else{
    console.log(`Entry Denied`);
}
*/

// Challenge 03
/*
let temperature = 0;
if(temperature > 35){
    console.log("Hot");
}else if(temperature>=25 && temperature<35){
    console.log("Warm");
}else if(temperature>=15 && temperature<=24){
    console.log("Cool");
}else{
    console.log("Cold");
}
*/

// Challenge 04
/*
let password ="mjkd1896";
let size = password.length;
if(size < 6){
    console.log("Weak");
}else if(size>= 6 && size<10){
    console.log("Medium");
}else{
    console.log("Strong");
}
*/

// count to 20
/*
for(let i = 1;i<=20;i++){
    console.log(i);
}
*/

// Even numbers
/*
for(let i=1;i<=20;i++){
    if(i%2===0){
        console.log(i);
    }
}
*/
/*
let sum = 0;
for(let i = 1;i<=100;i++){
    sum += i;
}

console.log(sum);
*/

// Star Pattern
/*
let star = "";
for(let row = 1;row<=5;row++){
    for(let col=1;col<=row;col++){
        star+="*";
    }
    console.log(star);
    star = "";
}
    */

// Count down timer
/*
for(let end = 10;end>=1;end--){
    console.log(end);
}
console.log("Blast Off!");
*/

// Functions
/*
function greet(user){
    return `Hello ${user}`;
}
console.log(greet("Kabilesh"));
*/
/*
const add = (a,b)=> a+b;
const sub = (a,b)=>{
    return a - b ;
}

console.log(add(10,23));
console.log(sub(100,21));
*/
/*
function square(number){
    return number * number;
}

console.log(square(3));
console.log(square(5));

*/
// function area(length,width){
//     return length * width;
// }

// const area = (length,width)=>{
//     return length * width;
// }
/*
const celsiusToFahrenheit = (celsius) => (celsius*9/5) + 32;
console.log(celsiusToFahrenheit(30));

*/

/*
const isEven = (number) => {
    return number % 2 == 0;
}
console.log(isEven(20));
console.log(isEven(21));
*/
/*
const add = (n1,n2) => n1 + n2;
const subtract = (n1,n2) => n1 - n2;
const multiply = (n1,n2) => n1 * n2;
const divide = (n1,n2) => n1/n2;

console.log(add(10,20));
console.log(subtract(100,99));
console.log(multiply(3,10));
console.log(divide(100,25));

*/

// Arrays

// let numbers = [10,20,30,40,50,60];
/*
console.log(numbers[0]);
console.log(numbers[3]);

let name = `Kabilesh`;
console.log(typeof name);
console.log(typeof numbers);

*/

// For loop 
/*
for(let i=0;i<numbers.length;i++){
    console.log(numbers[i]);
}
*/

// For each loop
/*
for(let num of numbers){
    console.log(num);
}
*/

/*
let numbers = [1,2,3,4,5];
console.log(numbers[0]);// first element from numbers array
console.log(numbers[numbers.length-1]); // last element from numbers array

// change two element
numbers[1] = 10;
for(let num of numbers){
    console.log(num);
}
*/
/*
let nums = [3,6,9,12,15];
for(num of nums){
    if(num>8){
        console.log(num);
    }
}
*/

// Square Each Number of nums array
/*
let nums = [1,2,3,4,5,6,7,8,9,10];

let square_nums = nums.map(n=>n*n);
for(let n of square_nums){
    console.log(n);
}
*/
// Count even numbers
/*
let even_count = 0;
let nums = [2,5,8,11,14];
for(n of nums){
    if(n%2===0){
        even_count++;
    }
}
console.log(`Total Even Numbers: ${even_count}`);
*/

/*
let prices = [100,200,50,400,150];

const highestPrice = (prices) =>{
    let maxPrice = prices[0];
    for(price of prices){
        if(price>maxPrice){
            maxPrice = price;
        }
    }
    return maxPrice;
}
const lowestPrice = (prices) =>{
    let minPrice = prices[0];
    for(i=1;i<prices.length;i++){
        if(prices[i]<minPrice){
            minPrice = prices[i];
        }
    }
    return minPrice;
}
const totalSum = (prices)=>{
    let sum = 0;
    for(price of prices){
        sum += price;
    }
    return sum;
}

const averagePrice = (prices)=>totalSum(prices)/prices.length;

console.log(highestPrice(prices));
console.log(lowestPrice(prices));
console.log(totalSum(prices));
console.log(averagePrice(prices));
*/