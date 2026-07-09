#  Data Types

## What it is
Data types define the **kind of values** that can be stored and manipulated in JavaScript.  
They tell the engine how to treat the value in memory and what operations are valid.

## Why it is important
- Prevents errors by knowing what kind of data you’re working with.  
- Helps in debugging and writing clean code.  
- Forms the foundation for understanding **operators, conversions, and functions**.

## How it works internally
- JavaScript is **dynamically typed** → you don’t declare types explicitly.  
- The engine assigns a type at runtime based on the value.  
- Two broad categories:
  - **Primitive types**: stored directly in memory (immutable).
  - **Reference types**: stored in heap, variables hold references (mutable).

## Syntax and Examples
```js
// Primitive types
let name = "Kabileshwaran"; // string
let age = 25;               // number
let isStudent = true;       // boolean
let nothing = null;         // null
let notDefined;             // undefined
let uniqueId = Symbol("id"); // symbol

// Reference type
let person = { name: "Kabileshwaran", age: 25 }; // object
let numbers = [1, 2, 3]; // array (special kind of object)
```

## Common Mistakes
- Confusing `null` and `undefined`.  
- Thinking arrays are a separate type (they are objects).  
- Forgetting that `typeof null` returns `"object"` (quirk of JS).  

## Best Practices
- Use `typeof` to check primitive types.  
- Use `Array.isArray()` to check arrays.  
- Use `===` for comparisons to avoid type coercion surprises.  

## Real-world Usage
- Strings for text (usernames, messages).  
- Numbers for calculations (prices, scores).  
- Booleans for conditions (isLoggedIn).  
- Objects for structured data (user profiles).  
- Arrays for lists (shopping cart items).  

## Interview Questions
- What are the primitive data types in JavaScript?  
- Difference between `null` and `undefined`.  
- Why does `typeof null` return `"object"`?  

## Practice Exercises
1. Declare one variable of each primitive type.  
2. Create an object representing a book (title, author, year).  
3. Create an array of 5 numbers and print the third one.  

---