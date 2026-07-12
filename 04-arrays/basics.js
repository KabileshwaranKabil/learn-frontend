// Creating Arrays
const arr1 = [1, 2, 3];
const arr2 = new Array(5);
const arr3 = Array.of(1, 2, 3);
console.log(arr1, arr2, arr3);

// Accessing Elements
const fruits = ["apple", "banana", "cherry"];
console.log("First:", fruits[0]);
console.log("Last:", fruits[fruits.length - 1]);

// Updating Arrays
const nums = [10, 20, 30];
nums[1] = 25;
nums.push(40);
nums.unshift(5);
console.log("Updated nums:", nums);
nums.pop();
nums.shift();
console.log("After removals:", nums);

// Iteration
const colors = ["red", "green", "blue"];
for (let i = 0; i < colors.length; i++) {
  console.log("Color:", colors[i]);
}