// some()
const nums = [1, 2, 3];
console.log("some >2:", nums.some(n => n > 2)); // true
console.log("some >5:", nums.some(n => n > 5)); // false

// every()
console.log("every >0:", nums.every(n => n > 0)); // true
console.log("every <3:", nums.every(n => n < 3)); // false

// sort()
const arr = [3, 1, 20];
console.log("Default sort:", arr.sort()); // ["1","20","3"]
console.log("Numeric sort:", arr.sort((a, b) => a - b)); // [1,3,20]

// slice()
const arr2 = [1, 2, 3, 4];
console.log("slice(1,3):", arr2.slice(1, 3)); // [2,3]
console.log("Original after slice:", arr2);   // unchanged

// splice()
const arr3 = [1, 2, 3, 4];
arr3.splice(1, 2, "X", "Y");
console.log("splice result:", arr3); // [1,"X","Y",4]