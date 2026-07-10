# JavaScript Introduction

## What it is
JavaScript is a **high-level, interpreted programming language** primarily used for web development. It runs in the browser and enables interactive, dynamic behavior on web pages.

## Why it is important
- Powers **95%+ of websites**.
- Essential for **frontend development** (with HTML & CSS).
- Used in **backend development** (Node.js).
- Foundation for modern frameworks like React, Angular, Vue.

## How it works internally
- JavaScript code is executed by a **JavaScript engine** (e.g., V8 in Chrome, SpiderMonkey in Firefox).
- Engines parse code → create an **Abstract Syntax Tree (AST)** → compile to **bytecode/machine code** → execute.
- It is **single-threaded** but uses an **event loop** for concurrency.

## Syntax and Examples
```js
// Hello World in JavaScript
console.log("Hello, World!");

// Variables
let name = "Kabileshwaran";
const age = 23;

// Function
function greet(user) {
  return `Hello, ${user}!`;
}
console.log(greet(name));
```

## Best Practices
- Always use `const` unless reassignment is needed.
- Prefer `===` for strict equality.
- Write modular, reusable functions.

## Practice Exercises
1. Write a program that prints your name and age.
2. Create a function that adds two numbers.
3. Write a script that logs "JavaScript is awesome!" 5 times.
