// Object.keys()
const person = {
  name: "Kabilesh", 
  age: 25, 
  city: "Colombo" 
};
console.log("Keys:", Object.keys(person));

const std = {
  name: "Kabileshwaran",
  age: 23,
  city: "Nuwara Eliya",
  country: "Sri Lanka" 
};
console.log("Keys: ",Object.keys(std))


console.log("values: ",Object.values(std))
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



const student = {
    name: "Kabileshwaran",
    age: 23,
    gender: 'M',
    isChecked: true
}
console.log(`Student: ${Object.keys(student)}`)
console.log(`Student: ${Object.values(student)}`)
console.log(`Student: ${Object.entries(student)}`)


for(const [key,value] of Object.entries(student) ){
    console.log(`${key} => ${value}.`)
}


const lecturer = {
      name: "John Durairaj",
      age: 56,
      gender: 'M',
      height: 170.32,
      status: "single",
      yearsOfExperience: 10,
      introduction: function(){
          return `Hi, I'm ${this.name} and I work here for ${this.yearsOfExperience} years.`
      }
}

console.log(lecturer.introduction())
