// Use template literals to build a multi-line string that includes variables for name and age

let name = "Kabileshwaran";
let age = 23;

let intro = `My name is ${name} and I'm ${age} years old`

// console.log(intro);



// Given an object {x: 10, y:20}, use destructuring to extract values and print them

const obj = {
	x:10,
	y:20
}
const {x,y}= obj;
console.log(x,y)


// Merge two arrays [1,2] and [3,4] using the spread operator.

const arr = [1,2];
const arr2 = [...arr,3,4];

console.log(arr2);

// Write a function that accepts any number of arguments and returns their product using the rest operator.

function product(...numbers){
	return numbers.reduce((acc,n) => acc*n,1);
}
console.log(product(1,2,3,4,5,6,7,8));


// use optional chaining to safely access user.profile.email when profile may not exists

const user ={
	name:"Kabileshwaran",
	age:23
}
console.log(user?.profile?.email);


// Demonstrate nullish coalescing by providing a default username when the input is null or undefined

let username = null;

username = username ?? "Default User";
console.log(username)
