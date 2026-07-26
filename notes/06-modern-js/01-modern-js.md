# Modern JavaScript


##  ES6 Features

### Key Additions
- **let / const**: Block-scoped variables.
- **Arrow functions**: Concise function syntax.
- **Template literals**: String interpolation with backticks.
- **Destructuring**: Extract values from arrays/objects.
- **Default parameters**: Assign defaults in function signatures.
- **Rest/Spread operators**: Collect or expand values.
- **Modules**: Import/export code across files.

### Example
```js
const name = "Kabil";
let age = 23;
const greet = () => `Hello, ${name}, age ${age}`;
console.log(greet());
```

---

##  Template Literals

### What it is
Strings defined with backticks `` ` `` that allow:
- Interpolation with `${expression}`
- Multi-line strings
- Tagged templates

### Example
```js
const user = "Kabileshwaran";
const message = `Hello, ${user}!
Welcome to ES6.`;
console.log(message);
```

---

## Destructuring

### What it is
Extract values from arrays or objects into variables.

### Object Destructuring
```js
const person = { name: "Kabi", age: 25 };
const { name, age } = person;
console.log(name, age);
```

### Array Destructuring
```js
const nums = [10, 20, 30];
const [first, second] = nums;
console.log(first, second); // 10 20
```

### Default values
```js
const { nickname = "Guest" } = person;
console.log(nickname); // Guest
```

---

##  Spread Operator

### What it is
Expands arrays or objects into individual elements.

### Example
```js
const arr = [1, 2, 3];
const arr2 = [...arr, 4, 5];
console.log(arr2); // [1,2,3,4,5]

const obj = { a:1, b:2 };
const obj2 = { ...obj, c:3 };
console.log(obj2); // {a:1, b:2, c:3}
```

---

##  Rest Operator

### What it is
Collects multiple arguments into an array.

### Example
```js
function sum(...numbers) {
  return numbers.reduce((acc, n) => acc + n, 0);
}
console.log(sum(1,2,3,4)); // 10
```

---

##  Modules

### What it is
Split code into separate files and reuse with `import`/`export`.

### Example
```js
// math.js
export function add(a,b) { 
    return a+b; 
}

// main.js
import { add } from './math.js';
console.log(add(2,3)); // 5
```

### Internal Notes
- Modules are evaluated once and cached.
- They enforce strict mode by default.

---

##  Optional Chaining

### What it is
Safely access nested properties without throwing errors.

### Example
```js
const user = { profile: { name: "Kabil" } };
console.log(user?.profile?.name); // "Kabil"
console.log(user?.address?.city); // undefined (no error)
```

---

##  Nullish Coalescing

### What it is
Provides a default value only when the left-hand side is `null` or `undefined`.

### Example
```js
const input = null;
const value = input ?? "Default";
console.log(value); // "Default"
```

### Difference from `||`
```js
const zero = 0;
console.log(zero || 42); // 42 (wrong if you want to keep 0)
console.log(zero ?? 42); // 0 (correct)
```

---

##  Practice Problems

1. Use **template literals** to build a multi-line string that includes variables for `name` and `age`.  
2. Given an object `{x:10, y:20}`, use **destructuring** to extract values and print them.  
3. Merge two arrays `[1,2]` and `[3,4]` using the **spread operator**.  
4. Write a function that accepts any number of arguments and returns their product using the **rest operator**.  
5. Create two files `math.js` and `main.js` to demonstrate **modules** with `add` and `subtract` functions.  
6. Use **optional chaining** to safely access `user.profile.email` when `profile` may not exist.  
7. Demonstrate **nullish coalescing** by providing a default username when the input is `null` or `undefined`.  

---

###  Key Takeaways
- ES6 modernized JavaScript with cleaner syntax and safer patterns.  
- Template literals, destructuring, spread/rest operators simplify code.  
- Modules enable structured, reusable programs.  
- Optional chaining and nullish coalescing prevent runtime errors and handle defaults gracefully.