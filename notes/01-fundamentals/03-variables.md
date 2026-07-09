# Variables (`let`, `const`)

## What it is
Variables are **named storage locations** for data in JavaScript.  
- `let`: Declares block-scoped variables that can be reassigned.  
- `const`: Declares block-scoped variables that cannot be reassigned (but objects/arrays can still be mutated).  

## Why it is important
- Prevents accidental global variables.  
- Controls mutability and scope.  
- Forms the foundation for clean, predictable code.  

## How it works internally
- **Hoisting**: Both `let` and `const` are hoisted but remain in the **Temporal Dead Zone (TDZ)** until initialized.  
- **Scope**: They are **block-scoped** (limited to `{}` blocks).  
- **Memory**: Stored in the **stack** for primitives, references point to the **heap**.  

## Syntax and Examples
```js
// let example
let count = 1;
count = 2; // ✅ allowed

// const example
const PI = 3.14159;
// PI = 3.14; ❌ Error: Assignment to constant variable

// const with objects
const user = { name: "Kabileshwaran" };
user.name = "Kabi"; // ✅ allowed (mutation)
```

## Common Mistakes
- Thinking `const` makes objects immutable (it doesn’t).  
- Forgetting TDZ: accessing `let`/`const` before declaration throws `ReferenceError`.  
- Using `var` instead of `let`/`const` → function-scoped, hoisted, unsafe.  

## Best Practices
- Use `const` by default.  
- Use `let` only when reassignment is required.  
- Avoid `var` entirely in modern code.  
- Keep variable scope as tight as possible.  

## Real-world Usage
- `const` for configuration values, constants, and references.  
- `let` for counters in loops, temporary state.  
- Example:  
  ```js
  const API_URL = "https://api.example.com";
  let retries = 0;
  while (retries < 3) {
    // attempt request
    retries++;
  }
  ```

## Interview Questions
- Difference between `var`, `let`, and `const`.  
- Explain the Temporal Dead Zone.  
- Can you mutate a `const` object?  

## Practice Exercises
1. Declare a `const` object and mutate its properties.  
2. Write a loop using `let` that counts from 1 to 5.  
3. Try accessing a `let` variable before declaration — observe the error.  

--- 