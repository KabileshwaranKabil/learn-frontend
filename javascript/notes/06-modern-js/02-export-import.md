# JavaScript Modules: `export` & `import`

---

## What problem does `export` solve?

Imagine building a project like this.

```
Todo App

app.js
user.js
database.js
utils.js
```

Suppose I write a function inside `database.js`.

```javascript
function connectDB() {
    console.log("Database Connected");
}
```

Can `app.js` use this function?

No.

Why?

Because every JavaScript file is like its own room. Anything created inside that room stays private unless it is intentionally shared.

---

## Analogy

I like thinking of every JavaScript file as a classroom.

```
Classroom A

Teacher
Students
Whiteboard
```

Students in Classroom B cannot simply walk in and use Classroom A's whiteboard.

The teacher has to give permission.

That permission is `export`.

```
Classroom A
──────────────

add()

↓

export add

↓

Now Classroom B can use it.
```

Without exporting, the function stays inside its own classroom.

---

## Example

### math.js

```javascript
function add(a, b) {
    return a + b;
}

export { add };
```

Here I created a function and made it public using `export`.

---

### app.js

```javascript
import { add } from "./math.js";

console.log(add(5, 3));
```

Output

```
8
```

Flow

```
math.js
    │
export add
    │
    ▼
app.js
import add
    │
    ▼
Use add()
```

---

## What happens if I don't export?

### math.js

```javascript
function add(a, b) {
    return a + b;
}
```

### app.js

```javascript
import { add } from "./math.js";
```

JavaScript throws an error because `add` was never exported.

The function exists...

…but only inside its own file.

---

## Named Exports

A file can export multiple values.

```javascript
export const PI = 3.14;

export function square(x) {
    return x * x;
}

export function cube(x) {
    return x * x * x;
}
```

Importing them

```javascript
import { PI, square, cube } from "./math.js";

console.log(PI);
console.log(square(5));
console.log(cube(3));
```

Notice the curly braces.

Whenever I'm importing **named exports**, I use `{ }`.

---

## Exporting Variables

```javascript
export const language = "JavaScript";

export let score = 100;
```

Import

```javascript
import { language, score } from "./game.js";
```

---

## Exporting Classes

```javascript
export class Student {

    constructor(name){
        this.name = name;
    }

    study(){
        console.log(`${this.name} is studying.`);
    }

}
```

Import

```javascript
import { Student } from "./student.js";

const s = new Student("Kabilesh");

s.study();
```

Output

```
Kabilesh is studying.
```

---

## Export While Declaring

Instead of writing

```javascript
function greet(){
    console.log("Hello");
}

export { greet };
```

I can simply write

```javascript
export function greet(){
    console.log("Hello");
}
```

Both approaches do exactly the same thing.

---

## Renaming Imports

Sometimes I don't want to use the original name.

```javascript
export function calculateArea() {

}
```

Import

```javascript
import { calculateArea as area } from "./math.js";

area();
```

The `as` keyword creates an alias.

---

## Default Export

Sometimes a file mainly provides one thing.

```javascript
export default function greet() {
    console.log("Hello");
}
```

Import

```javascript
import greet from "./greet.js";

greet();
```

Unlike named exports, default exports do **not** use curly braces.

---

## Named Export vs Default Export

| Named Export                    | Default Export         |
| ------------------------------- | ---------------------- |
| Many per file                   | Only one per file      |
| Imported with `{}`              | Imported without `{}`  |
| Name should match (or use `as`) | Can use any local name |

---

## Real Project Example

Project

```
todo-app

app.js
database.js
utils.js
user.js
```

### database.js

```javascript
export function connectDB(){
    console.log("Database Connected");
}
```

### utils.js

```javascript
export function formatDate(){
    return "26/07/2026";
}
```

### user.js

```javascript
export function login(){
    console.log("User Logged In");
}
```

### app.js

```javascript
import { connectDB } from "./database.js";
import { formatDate } from "./utils.js";
import { login } from "./user.js";

connectDB();
login();

console.log(formatDate());
```

This organization makes the project cleaner because each file has one responsibility.

---

# Things to remember

* Every JavaScript file is a **module**.
* Variables and functions inside a module are private by default.
* `export` makes something available to other modules.
* `import` brings exported values into another file.
* Named exports use curly braces.
* Default exports don't use curly braces.
* One file can have multiple named exports but only one default export.

---

# Common Mistakes

❌ Forgetting to export a function.

```javascript
function add(){}

import { add } from "./math.js";
```

---

❌ Forgetting curly braces for named exports.

```javascript
import add from "./math.js";
```

Correct

```javascript
import { add } from "./math.js";
```

---

❌ Using curly braces with a default export.

```javascript
import { greet } from "./greet.js";
```

Correct

```javascript
import greet from "./greet.js";
```

---
