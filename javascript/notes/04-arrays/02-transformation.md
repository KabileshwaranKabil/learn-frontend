# 📘 Arrays : Transformation Methods

Now that you know how to **create, access, update, and iterate arrays**, let’s move into the **powerful methods** that transform arrays. These methods are the backbone of modern JavaScript programming — they let you process data elegantly without writing clunky loops.

---

## ✅ map()

### What it is
- Creates a **new array** by applying a function to each element.
- Does **not** change the original array.

### Syntax
```js
const newArray = arr.map(callback);
```

### Example
```js
const nums = [1, 2, 3];
const doubled = nums.map(n => n * 2);
console.log(doubled); // [2, 4, 6]
console.log(nums);    // [1, 2, 3] (unchanged)
```

---

## ✅ filter()

### What it is
- Returns a **new array** containing only elements that pass a condition.
- Does not change the original array.

### Example
```js
const nums = [1, 2, 3, 4];
const evens = nums.filter(n => n % 2 === 0);
console.log(evens); // [2, 4]
```

---

## ✅ reduce()

### What it is
- Reduces an array to a **single value** by applying a function repeatedly.
- Useful for sums, averages, or building objects.

### Syntax
```js
const result = arr.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, initialValue);
```

### Example
```js
const nums = [1, 2, 3, 4];
const sum = nums.reduce((acc, n) => acc + n, 0);
console.log(sum); // 10
```

---

## ✅ find()

### What it is
- Returns the **first element** that matches a condition.
- If none match, returns `undefined`.

### Example
```js
const users = [{id:1}, {id:2}, {id:3}];
const user = users.find(u => u.id === 2);
console.log(user); // {id:2}
```

---


### 🔑 Key Takeaways
- **map** transforms each element → new array.  
- **filter** selects elements → new array.  
- **reduce** collapses array → single value.  
- **find** retrieves the first matching element.  
- None of these mutate the original array — they return new results.