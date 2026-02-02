// Arrays store multiple values in a single variable.
// Index starts at 0

let numbers=[1,2,3,4,5,6,7,8,9,10,11,12];

console.log(numbers[0]); // 1

console.log(numbers.length); // length of the array.

console.log(numbers[numbers.length-1]); // last element -> 12

for(i=0;i<numbers.length;i++){
    console.log(`${numbers[i]} `);
}

// Common Array Method

let nums=[1,5,9,2,4];
nums.push(10); // add at end
// [1,5,9,2,4,10]

nums.pop(); // remove last
// [1,5,9,2,4]

nums.shift(); // remove first
// [5,9,2,4]

nums.unshift(0); // add at start
// [0,5,9,2,4]

// Looping Through Arrays
for(let i=0;i<nums.length;i++){
    console.log(nums[i]);
}


// Arrays declared with `const` are still mutable
const arr=[1,2,3];
arr.push(4);

for(i=0;i<arr.length;i++){
    console.log(arr[i]);
}

// For Each Loop
let names=["Kabilesh","Dhanush"];
for(let name of names){
    console.log(name);
}

// Arrays can store anything
let mixed =[1,true,"Hello",null];
for(let val of mixed){
    console.log(val);
}

// Arrays are reference types, not copied by value.


let a=[1,2,3];
let b=a;

b.push(4);
console.log(a);