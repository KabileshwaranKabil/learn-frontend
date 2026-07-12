# 📘 Objects : Methods, Nested Structures & Destructuring


## ✅ Object Methods

### What it is
A **method** is simply a function stored as a property of an object. Methods let objects perform actions.

### Syntax
```js
const person = {
  name: "Kabileshwaran",
  greet: function() {
    return `Hello, my name is ${this.name}`;
  }
};
console.log(person.greet()); // Hello, my name is Kabileshwaran
```

### Internal Notes
- Methods are functions bound to an object.
- Inside a method, `this` refers to the object itself (unless arrow functions are used — more on that later).
- Methods make objects **behavioral models**, not just data containers.

---

## ✅ Nested Objects

### What it is
Objects can contain other objects as values. This models complex data structures.

### Example
```js
const student = {
  name: "Kabi",
  address: {
    city: "Colombo",
    postal: 12345
  }
};
console.log(student.address.city); // Colombo
```

### Internal Notes
- Nested objects are references inside references.
- Accessing deeply nested properties requires chaining with dot/bracket notation.
- Missing nested properties return `undefined`.

---

## ✅ Object Destructuring

### What it is
A concise way to extract properties into variables.

### Syntax
```js
const person = { name: "Kabi", age: 25 };
const { name, age } = person;
console.log(name, age); // Kabi 25
```

### Advanced Example
```js
const student = { name: "Kabi", address: { city: "Colombo" } };
const { address: { city } } = student;
console.log(city); // Colombo
```

### Internal Notes
- Destructuring is syntactic sugar; internally, it’s property access.
- You can assign default values:  
  ```js
  const { nickname = "Guest" } = person;
  ```

---

## 📝 Practice Problems (from MDN & freeCodeCamp)

1. Create an object `calculator` with methods `add`, `subtract`, `multiply`, and `divide`. Call each method with sample inputs.  
2. Build a `library` object with nested `books` array. Access the title of the first book.  
3. Given an object `{x:10, y:20}`, use destructuring to extract `x` and `y`.  
4. Write a function that accepts a `user` object and destructures `name` and `email` from it.  
5. Create a nested object `company` with `employees` array. Use destructuring to extract the first employee’s `role`.

---

🔑 **Key Takeaway**: Methods give objects behavior, nested objects model complexity, and destructuring makes property access elegant and concise.
