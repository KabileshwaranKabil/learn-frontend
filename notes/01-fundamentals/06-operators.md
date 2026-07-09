#  Operators

## What it is
Operators are **symbols or keywords** that perform actions on values. They allow us to calculate, compare, and manipulate data.

## Why it is important
- Core of programming logic.  
- Needed for math, conditions, and working with variables.  
- Without operators, we can’t build useful programs.

## Categories
1. **Arithmetic operators** → work with numbers.  
2. **Comparison operators** → compare values.  
3. **Logical operators** → combine conditions.  
4. **Assignment operators** → assign values to variables.  

## How it works internally
- JavaScript evaluates expressions left to right (with precedence rules).  
- Operands (values) are taken from memory, operator applies, result stored back.  
- For primitives, result is a new value. For references, operator may act on the reference.

---

## Syntax and Examples

### Arithmetic
```js
let x = 10;
let y = 3;

console.log(x + y); // 13
console.log(x - y); // 7
console.log(x * y); // 30
console.log(x / y); // 3.333...
console.log(x % y); // 1 (remainder)
console.log(x ** y); // 1000 (power)
```

### Comparison
```js
console.log(5 > 3);   // true
console.log(5 < 3);   // false
console.log(5 == "5"); // true (loose equality, type conversion)
console.log(5 === "5"); // false (strict equality, no conversion)
```

### Logical
```js
let a = true;
let b = false;

console.log(a && b); // false (AND)
console.log(a || b); // true (OR)
console.log(!a);     // false (NOT)
```

### Assignment
```js
let num = 10;
num += 5; // num = num + 5
console.log(num); // 15
```

---

## Common Mistakes
- Using `==` instead of `===` (unexpected type coercion).  
- Forgetting operator precedence (`*` before `+`).  
- Misusing logical operators with non-boolean values (truthy/falsy).  

## Best Practices
- Always use `===` and `!==` for comparisons.  
- Use parentheses to make precedence clear.  
- Keep expressions simple and readable.  

## Real-world Usage
- Arithmetic for calculations (prices, scores).  
- Comparison for conditions (login checks).  
- Logical operators for combining rules.  
- Assignment for updating counters, totals.  

---

## Interview Questions
- Difference between `==` and `===`.  
- What does `%` operator do?  
- How does operator precedence work?  

---

## Practice Exercises
1. Write a program that calculates the area of a rectangle.  
2. Compare two numbers and print which one is larger.  
3. Use logical operators to check if a number is between 10 and 20.  

---
