// Object Methods
const person = {
  name: "Kabileshwaran",
  greet: function() {
    return `Hello, my name is ${this.name}`;
  }
};
console.log(person.greet());

// Nested Objects
const student = {
  name: "Kabi",
  address: {
    city: "Colombo",
    postal: 12345
  }
};
console.log("City:", student.address.city);

// Object Destructuring
const { name, age = 20 } = { name: "Kabi" };
console.log("Destructured:", name, age);

const { address: { city } } = student;
console.log("Nested destructuring:", city);