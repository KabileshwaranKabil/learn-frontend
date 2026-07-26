# 📘 Objects: Creation & Properties

## ✅ Object Creation

### What it is
Objects are collections of **key–value pairs**. They let us model real-world entities (like a person, car, or book).

### Ways to create
```js
// Object literal (most common)
const person = { name: "Kabileshwaran", age: 25 };

// Using new Object()
const obj = new Object();
obj.key = "value";

// Using Object.create()
const proto = { greet: () => "Hello" };
const child = Object.create(proto);
```

### Internal Notes
- Keys are strings (or symbols) internally.
- Objects are stored in the heap; variables hold references.

---

## ✅ Object Properties

### Accessing
```js
const person = { name: "Kabi", age: 25 };
console.log(person.name);   // dot notation
console.log(person["age"]); // bracket notation
```

### Updating
```js
person.age = 26; // update
person.city = "Colombo"; // add
delete person.city; // remove
```

### Iterating
```js
for (const key in person) {
  console.log(key, person[key]);
}
```

---

### 📝 Practice Problems (MDN / freeCodeCamp inspired)
1. Create an object `car` with properties `make`, `model`, and `year`. Print them.  
2. Add a new property `color` to `car`, then delete it.  
3. Write a loop that prints all keys and values of an object.  
4. Given `{a:1, b:2, c:3}`, double all values.  
5. Create an object `student` and iterate using `Object.keys`.
