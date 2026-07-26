// // Object Creation
// const person = { name: "Kabileshwaran", age: 25 };
// console.log(person);

// // Properties
// console.log("Dot:", person.name);
// console.log("Bracket:", person["age"]);

// // Updating
// person.age = 26;
// person.city = "Colombo";
// console.log("Updated:", person);
// delete person.city;
// console.log("After delete:", person);

// // Iterating
// for (const key in person) {
//   console.log(key, person[key]);
// }



const person = {
    name:"kabileshwaran",
    age:23,
    height:159.43
}
console.log(person)

console.log(person.name)
console.log(person["height"])

delete person.age

console.log(person)

person.name = "dhanush"
person["height"] = 160.34

for(const k in person){
  console.log(k,person[k])
}