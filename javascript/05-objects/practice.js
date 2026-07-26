/*
1. Create an object `book` with:

   * `title`
   * `author`
   * `price`

2. Print the `title` using dot notation.

3. Add a method `discount()` that prints:

   ```
   Discount applied
   ```
*/

// 1.

// const book = {
//     title : "DSA using java",
//     author: "Johnson ML",
//     price : 234.43
// }

// console.log(book.title)

// book.discount = function(){
//     console.log(`Discount applied`)
// }

// book.discount()



// Create a simple object : Make an object car with properties brand,
// model, and year

const car = {
    brand : "Tesla",
    model : "Model 3",
    year : 2023
}
console.log(`${car.brand} | ${car.model} | ${car.year}`)

const person = {
    name: "Ganeshan",
    age: 30,
    city : "Chennai"
}
console.log(person)

// Loop through object

for(const prop in person){
    console.log(`${prop} :-> ${person[prop]}`)
}

// Nested Objects
const library = {
        book: {
            title : "DSA Using Java",
            author: "Steve"
        }
}
console.log(library.book.title)



const obj1 = {
    name : "Human",
    age: 89,
    gender: 'M'
}
const {name,age,gender} = obj1
console.log(name)
console.log(age)
console.log(gender)



// 4. Given `{a:1, b:2, c:3}`, double all values.  
