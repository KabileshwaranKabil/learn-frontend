### Numbers

---

#### What it is
A **Number** in JavaScript is the built‑in type used to represent numeric values. For most everyday work you’ll use the single `number` primitive which covers integers and floating‑point values. JavaScript also provides `BigInt` for very large integers and special numeric values like `NaN` and `Infinity`.

---

#### Why it matters
Numbers are everywhere: calculations, prices, counters, timestamps, and measurements. Understanding how JavaScript represents and operates on numbers prevents subtle bugs (for example, `0.1 + 0.2 !== 0.3`) and helps you write correct, predictable code.

---

#### How it works internally
- JavaScript’s standard `number` type is a **double‑precision 64‑bit binary floating point** (IEEE‑754). That means:
  - It can represent very large and very small values, but not all decimal fractions exactly.
  - Some decimal arithmetic produces rounding errors because binary floating point cannot represent certain decimals precisely.
- **Special values**:
  - `NaN` (Not‑a‑Number) — result of invalid numeric operations (e.g., `Number("abc")`, `0/0`).
  - `Infinity` and `-Infinity` — results of overflow or division by zero (`1/0`).
- **BigInt**: a separate primitive for integers of arbitrary size (created with `n` suffix, e.g., `123n`). It cannot be mixed directly with `number` without explicit conversion.
- **ToNumber** conversion rules** (recall from type conversion): strings with numeric content convert to numbers; empty string becomes `0`; `null` → `0`; `undefined` → `NaN`.

---

#### Syntax and examples
```js
// Basic numbers
const a = 42;          // integer
const b = 3.14;        // floating point
const c = -0;          // negative zero (rarely important but exists)
const inf = Infinity;  // Infinity
const ninf = -Infinity;

// NaN
const notNum = Number("abc"); // NaN

// BigInt
const big = 9007199254740993n; // larger than Number.MAX_SAFE_INTEGER

// Arithmetic
console.log(1 + 2);    // 3
console.log(5 / 2);    // 2.5
console.log(0.1 + 0.2); // 0.30000000000000004 (floating point rounding)

// Conversions
Number("42");    // 42
parseInt("08", 10); // 8  (always pass radix)
+ "3.14";        // 3.14 (unary plus)
```

---

#### Common mistakes
- **Expecting exact decimal arithmetic**: `0.1 + 0.2` is not exactly `0.3`. Use rounding when comparing or displaying.
- **Comparing `NaN` with `===`**: `NaN === NaN` is `false`. Use `Number.isNaN(value)` to test.
- **Mixing `BigInt` and `number`**: `1n + 2` throws a `TypeError`. Convert explicitly if needed.
- **Using `parseInt` without radix**: can produce surprising results in older environments. Always use `parseInt(str, 10)` for decimal.
- **Relying on `==` for numeric checks**: prefer strict checks and explicit conversions.

---

#### Best practices
- **Use `Number.isNaN()`** to check for `NaN`.  
- **Use `Number.isFinite()`** to check for finite numbers.  
- **Use `Number.isInteger()`** when you need integer checks.  
- **When comparing floating numbers**, compare with a tolerance (epsilon):  
  ```js
  const EPS = Number.EPSILON || 2.220446049250313e-16;
  const equal = Math.abs(a - b) < 1e-10;
  ```
- **Format for display** with `toFixed`, `toPrecision`, or `Intl.NumberFormat` for localization.  
- **Prefer `BigInt`** only when you need integers beyond `Number.MAX_SAFE_INTEGER` (`9007199254740991`).  
- **Avoid implicit conversions**; convert strings to numbers explicitly when performing arithmetic.

---

#### Real-world usage
- **Money and prices**: store as integers (cents) or use libraries (e.g., decimal.js) to avoid floating point errors.  
- **Timestamps**: `Date.now()` returns milliseconds as a `number`.  
- **Counters and indices**: use integers and `Number.isInteger()` if necessary.  
- **Large integer math**: `BigInt` for cryptography, large IDs, or precise integer arithmetic.

---

#### Interview questions
- Why does `0.1 + 0.2 !== 0.3`?  
- How do you check for `NaN` reliably?  
- What is `Number.MAX_SAFE_INTEGER` and why does it matter?  
- When would you use `BigInt`?  
- How do you format a number to two decimal places for display?

---

#### Practice exercises
1. Write a function `almostEqual(a, b, eps = 1e-10)` that returns `true` when two numbers are equal within `eps`.  
2. Convert a price string like `"$1,234.56"` into a number `1234.56`.  
3. Implement `safeAdd(a, b)` that accepts numeric strings or numbers and returns a number or `NaN` if conversion fails.  
4. Demonstrate `NaN`, `Infinity`, and `-0` behavior and how to detect them.  
5. Show how to sum an array of monetary values stored as cents (integers) and format the total as dollars with two decimals.

---

---
