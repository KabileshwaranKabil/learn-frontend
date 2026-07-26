// Template Literals
const message = `Hello, ${name}!
Welcome to ES6.`;
console.log(message);

// Destructuring
const person = { name: "Kabil", age: 23 };
const { name: personName, age: personAge } = person;
console.log(personName, personAge);

const nums = [10, 20, 30];
const [first, second] = nums;
console.log(first, second);

// Spread Operator
const arr = [1,2,3];
const arr2 = [...arr, 4,5];
console.log(arr2);

const obj = { a:1, b:2 };
const obj2 = { ...obj, c:3 };
console.log(obj2);

// Rest Operator
function sum(...numbers) {
  return numbers.reduce((acc,n) => acc+n,0);
}
console.log(sum(1,2,3,4));


// Optional Chaining
const user = { profile: { name: "Kabi" } };
console.log(user?.profile?.name);
console.log(user?.address?.city);

// Nullish Coalescing
const input = null;
const value = input ?? "Default";
console.log(value);

const zero = 0;
console.log(zero || 42); // 42
console.log(zero ?? 42); // 0