/*

Objects
    Objects store key–value pairs.

*/

// creating an object

let user = {
    name: "Kabilesh",
    age: 23,
    isStudent: true
};

// Accessing Properties

// Dot Notation
console.log(user.name);

// Bracket notation
console.log(user['age']);


// Modifying Objects

user.city="Nuwara Eliya";
console.log(user);

// Delete a property
delete user.isStudent;

console.log(user);

// Objects with methods

let person={
    name:"Dhanush",
    greet: function(){
        console.log(`Hello , I'm ${this.name}`);
    }
};

person.greet();

// Looping Through Objects

for( let key in user){
    console.log(key,user[key]);
}
