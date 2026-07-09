### Math Object

#### What it is
The **`Math` object** is a built‑in JavaScript global that provides **mathematical constants and functions**. It is not a constructor — you don’t create `new Math()` — you call its methods directly: `Math.max`, `Math.random`, `Math.sqrt`, etc.

#### Why it matters
Every program that does calculations — games, UI animations, statistics, finance helpers, geometry, or simple utilities — will use `Math`. Knowing the `Math` API helps you avoid reinventing the wheel and prevents subtle numeric bugs (for example, using `Math.round` vs `Math.floor` when you need a specific behavior).

#### How it works internally (high level)
- `Math` methods operate on JavaScript `number` values (IEEE‑754 double precision). They follow the language’s numeric conversion rules: non‑number inputs are coerced to numbers first.
- Some methods are pure (no side effects) and return new numeric values.
- `Math.random()` uses an engine‑provided pseudo‑random generator; it is not cryptographically secure.
- Many functions are thin wrappers around efficient native implementations in the JavaScript engine (V8, SpiderMonkey, etc.), so they are fast and reliable.

#### Common `Math` members you’ll use
- **Constants**: `Math.PI`, `Math.E`
- **Rounding**: `Math.floor`, `Math.ceil`, `Math.round`, `Math.trunc`
- **Absolute / sign**: `Math.abs`, `Math.sign`
- **Power / roots**: `Math.pow`, `Math.sqrt`, `Math.cbrt`
- **Min / max**: `Math.min`, `Math.max`
- **Random**: `Math.random`
- **Trigonometry**: `Math.sin`, `Math.cos`, `Math.tan`
- **Hypotenuse**: `Math.hypot`
- **Log / exp**: `Math.log`, `Math.exp`
- **Other**: `Math.clz32`, `Math.imul`, `Math.fround` (advanced/rare)

#### Syntax and examples
```js
Math.PI;               // 3.141592653589793
Math.E;                // 2.718281828459045

Math.abs(-5);          // 5
Math.floor(3.9);       // 3
Math.ceil(3.1);        // 4
Math.round(3.5);       // 4
Math.trunc(3.9);       // 3

Math.max(1, 5, 3);     // 5
Math.min(1, 5, 3);     // 1

Math.pow(2, 3);        // 8
Math.sqrt(9);          // 3
2 ** 3;                // 8 (operator alternative)

Math.random();         // 0 <= x < 1
// common pattern: random integer in [min, max]
Math.floor(Math.random() * (max - min + 1)) + min;

Math.sin(Math.PI / 2); // 1
Math.hypot(3, 4);      // 5
```

#### Common mistakes
- **Using `Math.round` when you need `floor` or `ceil`** — rounding rounds to nearest integer, not always down or up.
- **Assuming `Math.random()` is secure** — it’s not suitable for cryptography or secure tokens.
- **Passing arrays directly to `Math.max`** — `Math.max([1,2,3])` returns `NaN`. Use spread: `Math.max(...arr)`.
- **Forgetting numeric conversion** — `Math` coerces inputs: `Math.sqrt("9")` → `3`, but `Math.sqrt("abc")` → `NaN`.
- **Using `Math.pow` for integer exponentiation when `**` is clearer** — prefer `**` for readability.

#### Best practices
- Use `Math.trunc` to drop fractional part (clear intent).
- Use `Math.floor` for indices and zero‑based ranges; use `Math.ceil` for required minimums.
- For random integers, use a small helper function that documents inclusive/exclusive bounds.
- When working with money, avoid floating point rounding errors — store cents as integers or use a decimal library.
- Use `Number.isFinite` to guard results when necessary.

#### Real‑world usage
- **Games**: random spawns, angles, movement using `sin`/`cos`.
- **UI**: rounding pixel values, easing calculations.
- **Data**: statistics (min, max, average), normalizing values.
- **Geometry**: distances (`Math.hypot`), angles, conversions between degrees and radians.

#### Interview questions
- How do you get a random integer between `min` and `max` inclusive?
- What’s the difference between `Math.floor`, `Math.ceil`, `Math.round`, and `Math.trunc`?
- Why is `Math.random()` not suitable for cryptographic use?
- How do you compute the distance between two points `(x1,y1)` and `(x2,y2)`?
- How do you convert degrees to radians and vice versa?

#### Practice exercises
1. Implement `randInt(min, max)` that returns an integer between `min` and `max` inclusive.
2. Write `clamp(value, min, max)` that constrains `value` to the given range.
3. Create `distance(x1, y1, x2, y2)` using `Math.hypot`.
4. Implement `toRadians(deg)` and `toDegrees(rad)`.
5. Given an array of numbers, compute the average, min, and max safely (handle empty arrays).

---
