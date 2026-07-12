// map()
const nums = [1, 2, 3];
const doubled = nums.map(n => n * 2);
console.log("map:", doubled);

// filter()
const evens = nums.filter(n => n % 2 === 0);
console.log("filter:", evens);

// reduce()
const sum = nums.reduce((acc, n) => acc + n, 0);
console.log("reduce sum:", sum);

// find()
const users = [{id:1}, {id:2}, {id:3}];
const user = users.find(u => u.id === 2);
console.log("find:", user);