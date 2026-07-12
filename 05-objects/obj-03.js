// Object.keys()
const person = { name: "Kabi", age: 25, city: "Colombo" };
console.log("Keys:", Object.keys(person));

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