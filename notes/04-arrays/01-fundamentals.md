# 📘 Arrays : Fundamentals

## ✅ Creating Arrays

### What it is
An **array** is an ordered list of values. Each value has an index starting at 0. Arrays can hold any type: numbers, strings, objects, even other arrays.

### Syntax
```js
const arr1 = [1, 2, 3];        // literal
const arr2 = new Array(5);     // length 5, empty slots
const arr3 = Array.of(1, 2, 3); // safer than new Array
```

### Important Notes
- `new Array(5)` creates an array with 5 empty slots, not `[5]`.
- Arrays are objects under the hood, but optimized for ordered data.

---

## ✅ Accessing Elements

```js
const fruits = ["apple", "banana", "cherry"];
console.log(fruits[0]); // apple
console.log(fruits[fruits.length - 1]); // cherry
```

- Index starts at 0.
- `length` gives total elements.
- Accessing out-of-range index returns `undefined`.

---

## ✅ Updating Arrays

```js
const nums = [10, 20, 30];
nums[1] = 25; // update
nums.push(40); // add at end
nums.unshift(5); // add at start
nums.pop(); // remove last
nums.shift(); // remove first
```

- `push`/`pop` → end of array.
- `unshift`/`shift` → start of array.

---

## ✅ Array Iteration

```js
const colors = ["red", "green", "blue"];
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}
```

- Classic `for` loop uses index.