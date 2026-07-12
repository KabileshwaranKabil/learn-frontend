// Object Creation
const person = { name: "Kabileshwaran", age: 25 };
console.log(person);

// Properties
console.log("Dot:", person.name);
console.log("Bracket:", person["age"]);

// Updating
person.age = 26;
person.city = "Colombo";
console.log("Updated:", person);
delete person.city;
console.log("After delete:", person);

// Iterating
for (const key in person) {
  console.log(key, person[key]);
}