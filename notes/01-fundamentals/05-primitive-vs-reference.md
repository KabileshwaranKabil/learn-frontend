#  Primitive vs Reference Types

## What it is
- **Primitive types**: Basic, immutable values stored directly in memory.  
  Examples: `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint`.  
- **Reference types**: Objects stored in the heap, with variables holding a reference (pointer) to them.  
  Examples: `object`, `array`, `function`.

## Why it is important
- Explains why copying primitives creates independent values, but copying objects creates shared references.  
- Helps avoid bugs when mutating arrays/objects.  
- Essential for understanding equality checks and memory behavior.

## How it works internally
- **Primitive**: Stored directly in the stack. Copying creates a new independent value.  
- **Reference**: Stored in the heap. Variables hold a reference (like an address). Copying just copies the reference, not the actual object.  

## Syntax and Examples
```js
// Primitive copy
let a = 10;
let b = a; // copy value
b = 20;
console.log(a); // 10 (unchanged)

// Reference copy
let obj1 = { name: "Kabileshwaran" };
let obj2 = obj1; // copy reference
obj2.name = "Kabi";
console.log(obj1.name); // "Kabi" (changed!)
```

## Common Mistakes
- Expecting `obj2 = obj1` to create a new independent object.  
- Forgetting that arrays are reference types.  
- Using `===` with objects compares references, not values.  

## Best Practices
- Use **spread operator** (`{...obj}`) or `Array.slice()` to copy objects/arrays.  
- Avoid unintended mutations by creating new copies.  
- Use `JSON.stringify` + `JSON.parse` for deep copies (basic cases).  

## Real-world Usage
- Copying user data safely before modifying.  
- Avoiding shared state bugs in applications.  
- Example:  
  ```js
  const user = { name: "Kabileshwaran", age: 25 };
  const copy = { ...user }; // safe copy
  copy.age = 26;
  console.log(user.age); // 25 (unchanged)
  ```

## Interview Questions
- Difference between primitive and reference types.  
- Why does `typeof null` return `"object"`?  
- How do you copy an object without affecting the original?  

## Practice Exercises
1. Show that changing a copied primitive doesn’t affect the original.  
2. Show that changing a copied object does affect the original.  
3. Create a safe copy of an array and modify it without affecting the original.  

---
