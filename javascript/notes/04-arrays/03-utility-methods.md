# 📘 Arrays : Utility Methods


## ✅ some()

### What it is
- Tests whether **at least one element** in the array passes a condition.
- Returns a boolean (`true` or `false`).
- Stops checking as soon as it finds a match (efficient).

### Example
```js
const nums = [1, 2, 3];
console.log(nums.some(n => n > 2)); // true
console.log(nums.some(n => n > 5)); // false
```

### Why it matters
- Useful for quick validations (e.g., “Does this list contain any negative numbers?”).
- Internally, it short-circuits — stops early when condition is met.

---

## ✅ every()

### What it is
- Tests whether **all elements** pass a condition.
- Returns `true` only if every element satisfies the test.

### Example
```js
const nums = [1, 2, 3];
console.log(nums.every(n => n > 0)); // true
console.log(nums.every(n => n < 3)); // false
```

### Why it matters
- Great for validation (e.g., “Are all inputs non-empty?”).
- Stops early if one element fails.

---

## ✅ sort()

### What it is
- Sorts elements **in place** (mutates the array).
- By default, sorts as strings (lexicographic order).
- For numbers, you must provide a compare function.

### Example
```js
const arr = [3, 1, 20];
arr.sort(); // ["1","20","3"] (wrong for numbers!)
arr.sort((a, b) => a - b); // [1, 3, 20] (correct)
```

### Why it matters
- Sorting is fundamental for data organization.
- Internally, JavaScript uses efficient sorting algorithms (like quicksort/merge sort depending on engine).

---

## ✅ slice()

### What it is
- Returns a **shallow copy** of part of an array.
- Does not mutate the original.

### Example
```js
const arr = [1, 2, 3, 4];
const sub = arr.slice(1, 3);
console.log(sub); // [2, 3]
console.log(arr); // [1, 2, 3, 4] (unchanged)
```

### Why it matters
- Perfect for extracting portions of data safely.
- Internally, it copies references for objects (not deep copy).

---

## ✅ splice()

### What it is
- Changes the array by removing, replacing, or adding elements.
- Mutates the original array.

### Syntax
```js
arr.splice(start, deleteCount, item1, item2, ...);
```

### Example
```js
const arr = [1, 2, 3, 4];
arr.splice(1, 2, "X", "Y");
console.log(arr); // [1, "X", "Y", 4]
```

### Why it matters
- Powerful for editing arrays in place.
- Internally, shifts elements to fill gaps or make space.


---

## 🔑 Key Takeaways
- **some** → checks if *any* element passes.  
- **every** → checks if *all* elements pass.  
- **sort** → mutates array, needs compare function for numbers.  
- **slice** → safe copy, non-mutating.  
- **splice** → powerful in-place editing.  

---

### 📝 Practice Exercises
1. Check if an array of ages has **any minors** (`<18`) using `some`.  
2. Verify if all scores are **passing** (`>=50`) using `every`.  
3. Sort an array of names alphabetically.  
4. Extract the middle 3 elements of an array using `slice`.  
5. Remove the second element of an array using `splice`.  
