### Type Conversion

#### What it is
**Type conversion** is how JavaScript turns a value from one data type into another. There are two flavors:

- **Implicit conversion** (coercion): the engine converts types automatically during operations.
- **Explicit conversion**: you convert types intentionally using functions or operators.

As a beginner, think of type conversion as JavaScript quietly changing the shape of a value so an operation can proceed.

---

#### Why it matters
Understanding conversion prevents subtle bugs. When you compare values, concatenate strings, or perform arithmetic, JavaScript may convert values behind your back. If you know the rules, you can predict results, write safer code, and avoid surprises in conditionals and calculations.

---

#### How it works internally
JavaScript is **dynamically typed** and performs conversions according to well-defined internal algorithms:

- **ToPrimitive**: When an object is used where a primitive is expected, the engine calls the object’s `valueOf` and `toString` methods (order depends on context) to obtain a primitive.
- **ToNumber**: Strings, booleans, `null`, `undefined`, and symbols are converted to numbers using specific rules. For example, `""` → `0`, `"  42  "` → `42`, `"abc"` → `NaN`, `true` → `1`, `false` → `0`, `null` → `0`, `undefined` → `NaN`.
- **ToString**: Numbers, booleans, `null`, `undefined`, and symbols convert to strings with predictable outputs: `null` → `"null"`, `undefined` → `"undefined"`, `NaN` → `"NaN"`.
- **ToBoolean**: Values are classified as **truthy** or **falsy**. Falsy values: `false`, `0`, `-0`, `0n`, `""` (empty string), `null`, `undefined`, `NaN`. Everything else is truthy.

The engine applies these conversions depending on the operator or context (e.g., `+` with a string triggers string concatenation; comparison operators may coerce operands to numbers).

---

#### Syntax and Examples

**Implicit conversion examples**
```js
// String concatenation with +
console.log("Age: " + 25); // "Age: 25"

// Numeric addition coerces strings to numbers when both operands are numeric-like
console.log("5" - 2); // 3  (string "5" -> number 5)
console.log("5" + 2); // "52" (string concatenation)

// Boolean in arithmetic
console.log(true + 1); // 2 (true -> 1)

// null and undefined
console.log(null + 1); // 1  (null -> 0)
console.log(undefined + 1); // NaN (undefined -> NaN)
```

**Explicit conversion**
```js
// To Number
Number("42");      // 42
parseInt("42px");  // 42
parseFloat("3.14"); // 3.14
+ "7";             // 7  (unary plus)

// To String
String(123);       // "123"
(123).toString();  // "123"

// To Boolean
Boolean(0);        // false
!!"hello";         // true (double negation)
```

**Comparison quirks**
```js
console.log(0 == "");      // true  ("" -> 0)
console.log(0 === "");     // false (no coercion)
console.log(false == "0"); // true  ("0" -> 0, false -> 0)
console.log(null == undefined); // true
console.log(null === undefined); // false
```

---

#### Common mistakes
- **Relying on `==`**: loose equality performs coercion and produces unintuitive results. Prefer `===`.
- **Assuming `+` always adds numbers**: if either operand is a string, `+` concatenates.
- **Using `parseInt` without radix**: `parseInt("08")` historically could be parsed as octal in old engines; always pass a radix: `parseInt("08", 10)`.
- **Treating `NaN` as equal to itself**: `NaN === NaN` is `false`. Use `Number.isNaN()` to test.
- **Expecting `null` and `undefined` to behave the same**: they are distinct and convert differently in some contexts.

---

#### Best practices
- **Use `===` and `!==`** to avoid implicit coercion surprises.
- **Convert explicitly** when you need a specific type: `Number(...)`, `String(...)`, `Boolean(...)`.
- **Use `Number.isNaN`** instead of global `isNaN` to avoid false positives.
- **Use `parseInt` with radix**: `parseInt(str, 10)`.
- **Prefer `Number()` over unary `+`** when readability matters.
- **Guard user input**: always validate and sanitize strings before numeric conversion.

---

#### Real-world usage
- Parsing numeric input from forms: `const age = Number(form.age.value);`
- Formatting values for display: `String(value)` or template literals.
- Conditional checks: `if (value)` relies on truthy/falsy semantics.
- Data normalization when consuming APIs: convert strings to numbers or booleans before calculations.

---

#### Interview questions
- What is the difference between implicit and explicit type conversion?
- Why does `[] + {}` produce `"[object Object]"` but `{ } + []` may behave differently in the console?
- How does `parseInt` differ from `Number`?
- How do you reliably check for `NaN`?
- Explain why `0 == ""` is true but `0 === ""` is false.

---

#### Practice exercises
1. **Predict then run**: What will each of these print? Then run them and explain why.
   - `"5" + 3`
   - `"5" - 3`
   - `true + "1"`
   - `null == 0`
   - `null >= 0`
2. **Safe parse**: Write a function `toNumberSafe(value, fallback)` that converts `value` to a number and returns `fallback` if conversion fails (i.e., results in `NaN`).
3. **Form input**: Simulate a form input `const input = "  42px  "` and extract the numeric value as a number.
4. **Truthy filter**: Given an array with mixed values, write a function that returns only truthy values.
5. **Compare objects**: Explain why two different objects with identical properties are not `===`. Demonstrate copying an object and show how mutation affects references.

---
