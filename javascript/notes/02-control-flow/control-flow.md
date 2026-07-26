### Control Flow: Decisions and Loops

Now that you’ve mastered variables, data types, operators, and numbers, the next logical step is **control flow** — how we make decisions and repeat actions in code. Let’s walk through each construct one by one, in a clear ladder style.

---

## ✅ if statement

### What it is
The `if` statement lets you run code only when a condition is true.

### Syntax
```js
if (condition) {
  // code runs if condition is true
}
```

### Example
```js
const age = 18;
if (age >= 18) {
  console.log("You are an adult.");
}
```

---

## ✅ if else

### What it is
Adds an alternative block when the condition is false.

### Syntax
```js
if (condition) {
  // runs if true
} else {
  // runs if false
}
```

### Example
```js
const age = 16;
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
```

---

## ✅ switch

### What it is
A cleaner way to handle multiple possible values of a variable.

### Syntax
```js
switch (value) {
  case "A":
    // code
    break;
  case "B":
    // code
    break;
  default:
    // fallback
}
```

### Example
```js
const color = "red";
switch (color) {
  case "red":
    console.log("Stop!");
    break;
  case "green":
    console.log("Go!");
    break;
  default:
    console.log("Unknown color");
}
```

---

## ✅ ternary operator

### What it is
A shorthand for `if...else`.

### Syntax
```js
condition ? valueIfTrue : valueIfFalse
```

### Example
```js
const age = 20;
const status = age >= 18 ? "Adult" : "Minor";
console.log(status);
```

---

## 🔁 Loops

### for loop
Used when you know how many times to repeat.

```js
for (let i = 1; i <= 5; i++) {
  console.log("Iteration:", i);
}
```

---

### while loop
Repeats while a condition is true.

```js
let count = 0;
while (count < 3) {
  console.log("Count:", count);
  count++;
}
```

---

### do while loop
Runs at least once, then repeats while condition is true.

```js
let num = 0;
do {
  console.log("Number:", num);
  num++;
} while (num < 3);
```

---

### for of loop
Iterates directly over values in arrays or strings.

```js
const fruits = ["apple", "banana", "cherry"];
for (const fruit of fruits) {
  console.log(fruit);
}
```

---

## 🚦 break
Stops a loop early.

```js
for (let i = 1; i <= 5; i++) {
  if (i === 3) break;
  console.log(i);
}
// Output: 1, 2
```

---

## 🚦 continue
Skips the current iteration, continues with the next.

```js
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i);
}
// Output: 1, 2, 4, 5
```
