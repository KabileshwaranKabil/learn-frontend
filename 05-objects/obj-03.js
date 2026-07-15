// Object.keys()
const person = {
  name: "Kabilesh", 
  age: 25, 
  city: "Colombo" 
};
console.log("Keys:", Object.keys(person));

const student = {
  name: "Kabileshwaran",
  age: 23,
  city: "Nuwara Eliya",
  country: "Sri Lanka" 
};
console.log("Keys: ",Object.keys(student))


console.log("values: ",Object.values(student))
// Object.values()
console.log("Values:", Object.values(person));

// Object.entries()
console.log("Entries:", Object.entries(person));
for (const [key, value] of Object.entries(person)) {
  console.log("Loop:", key, value);
}

// this keyword in methods
const user = {
  name: "Kabileshwaran",
  greet() {
    return `Hello, I am ${this.name}`;
  }
};
console.log(user.greet());

// Arrow function and this
const user2 = {
  name: "Kabi",
  greet: () => `Hello, I am ${this.name}`
};
console.log(user2.greet()); // undefined