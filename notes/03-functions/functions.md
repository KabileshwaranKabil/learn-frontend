## ✅ Function Declaration

### What it is
A **function declaration** defines a named function that can be called later. It is hoisted, meaning you can call it before its definition in code.

### Syntax
```js
function greet(name) {
  return `Hello, ${name}!`;
}
```

### How it works internally
- The JavaScript engine hoists function declarations to the top of their scope.
- They are stored in memory before code execution begins.
- This means you can call them earlier in the file.

### Example
```js
console.log(greet("Kabileshwaran")); // works even before definition

function greet(name) {
  return `Hello, ${name}!`;
}
```

---

## ✅ Function Expression

### What it is
A **function expression** assigns a function to a variable. It is not hoisted — you can only call it after the definition.

### Syntax
```js
const greet = function(name) {
  return `Hello, ${name}!`;
};
```

### Example
```js
// console.log(greet("Kabileshwaran")); ❌ Error: greet is not defined yet
const greet = function(name) {
  return `Hello, ${name}!`;
};
console.log(greet("Kabileshwaran")); // ✅ works
```

---

## ✅ Arrow Functions

### What it is
Introduced in ES6, arrow functions are a shorter syntax for function expressions. They also handle `this` differently (lexical binding).

### Syntax
```js
const greet = (name) => `Hello, ${name}!`;
```

### Example
```js
const add = (a, b) => a + b;
console.log(add(2, 3)); // 5
```

---

## ✅ Parameters

Functions can accept inputs called **parameters**. These are variables local to the function.

```js
function multiply(a, b) {
  return a * b;
}
console.log(multiply(3, 4)); // 12
```

---

## ✅ Return Values

Functions can return values using `return`. If no `return` is given, the function returns `undefined`.

```js
function square(x) {
  return x * x;
}
console.log(square(5)); // 25
```

---

## ✅ Default Parameters

You can assign default values to parameters.

```js
function greet(name = "Guest") {
  return `Hello, ${name}!`;
}
console.log(greet()); // Hello, Guest!
```

---

## ✅ Rest Parameters

Rest parameters collect multiple arguments into an array.

```js
function sum(...numbers) {
  return numbers.reduce((acc, n) => acc + n, 0);
}
console.log(sum(1, 2, 3, 4)); // 10
```

---

## ✅ Spread Syntax

Spread expands arrays/objects into individual elements.

```js
const nums = [1, 2, 3];
console.log(Math.max(...nums)); // 3
```


---

## ✅ Callback Functions

A callback is a function passed as an argument to another function.

```js
function processUserInput(callback) {
  const name = "Kabileshwaran";
  callback(name);
}
processUserInput((n) => console.log("Hello,", n));
```

---

## ✅ Higher Order Functions

Functions that take other functions as arguments or return them.

```js
function makeMultiplier(factor) {
  return function(x) {
    return x * factor;
  };
}
const double = makeMultiplier(2);
console.log(double(5)); // 10
```

---

## ✅ Recursion

A function that calls itself until a base condition is met.

```js
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5)); // 120
```

---

### 🔑 Key Takeaways
- **Declarations** are hoisted, **expressions** are not.  
- **Arrow functions** are concise and bind `this` lexically.  
- Parameters can be defaulted, collected (`rest`), or expanded (`spread`).  
- Functions are **first-class citizens**: they can be passed around, returned, and composed.  
- **Recursion** is powerful but must have a base case to avoid infinite loops.  

---
