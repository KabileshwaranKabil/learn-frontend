/*
1. Create an array `fruits` with 3 values.
2. Print the last element of the array.
3. Use a loop to print all elements.
*/

// Create an array `fruits` with 3 values.
let fruits=["Apples","Orange","Mango","PineApple","Watermelon"];
console.log(fruits);

// Print the last element of the array
console.log(`Last Element of fruits: ${fruits[fruits.length-1]}`);

// Use a loop to print all elements
for(let fruit of fruits){
    console.log(fruit);
}

