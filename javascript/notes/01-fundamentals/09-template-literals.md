### Truthy and Falsy Values

---

#### What it is
**Truthy and falsy** describe how JavaScript treats values when a boolean context is required — for example inside `if`, `while`, or logical expressions. A **truthy** value behaves like `true`; a **falsy** value behaves like `false`.

---

#### Why it matters
Beginners often write conditionals assuming only `true` and `false` matter. In JavaScript many other values are implicitly converted to boolean. Knowing which values are falsy prevents bugs in guards, input validation, and control flow.

---

#### How it works internally
When JavaScript needs a boolean, it performs an internal conversion **ToBoolean**. The engine follows a fixed rule: a small set of values are **falsy**; everything else is **truthy**. This conversion is deterministic and used by operators like `!`, `&&`, `||`, and by conditional statements.

**Falsy values**
- `false`  
- `0` and `-0`  
- `0n` (BigInt zero)  
- `""` (empty string)  
- `null`  
- `undefined`  
- `NaN`

All other values are **truthy**, including:
- Non-empty strings `"0"`, `"false"`  
- Non-zero numbers `1`, `-1`, `3.14`  
- Objects `{}`, arrays `[]`, functions `() => {}`  
- Symbols and non-zero BigInts

---

#### Syntax and examples
```js
if ("hello") {
  console.log("This runs because 'hello' is truthy");
}

if (0) {
  console.log("This will not run because 0 is falsy");
}

console.log(Boolean(""));      // false
console.log(Boolean("0"));     // true
console.log(Boolean([]));      // true
console.log(Boolean({}));      // true
console.log(Boolean(NaN));     // false
```

**Logical operator behavior**
```js
console.log(null || "default"); // "default"  (null is falsy)
console.log("value" || "default"); // "value"  (truthy short-circuit)
console.log(0 && "won't show"); // 0  (falsy short-circuit returns 0)
```

---

#### Common mistakes
- **Treating empty arrays or objects as falsy** — they are truthy.  
- **Using `if (arr)` to check for non-empty array** — this only checks that `arr` is not `null`/`undefined`, not that it has elements. Use `arr.length > 0`.  
- **Relying on `||` for defaulting when `0` or `""` are valid values** — `||` treats `0` and `""` as falsy and will replace them. Use the nullish coalescing operator `??` when you only want to default on `null` or `undefined`.  
  ```js
  const count = 0;
  const safe = count || 10; // 10 (undesired if 0 is valid)
  const safe2 = count ?? 10; // 0 (keeps 0)
  ```

---

#### Best practices
- **Be explicit when intent matters**: use `===` checks or explicit boolean conversion `Boolean(value)` when you need clarity.  
- **Use `arr.length` to check arrays** and `Object.keys(obj).length` for object emptiness.  
- **Prefer `??` over `||`** when you want to treat only `null` and `undefined` as missing values.  
- **Convert intentionally**: `if (value)` is fine for simple guards, but convert with `Boolean(value)` when logging or returning a boolean.

---

#### Real-world usage
- **Form validation**: check if a required field is empty (`if (!inputValue)`), but be careful when `"0"` is valid.  
- **Default values**: `const name = userInput ?? "Guest";` ensures `0` or `""` are preserved if they are meaningful.  
- **Short-circuit evaluation**: `const result = maybeFn && maybeFn();` calls `maybeFn` only if it exists (truthy).

---

#### Interview questions
- List all falsy values in JavaScript.  
- Why is `[]` truthy but `""` falsy?  
- When should you use `||` versus `??`?  
- How does `&&` and `||` return values other than booleans?

---

#### Practice exercises
1. Predict the output then run:
   - `Boolean([])`  
   - `Boolean({})`  
   - `Boolean("")`  
   - `Boolean("0")`  
   - `"" || "fallback"`  
   - `0 ?? 5`
2. Write a function `isEmpty(value)` that returns `true` for `null`, `undefined`, empty string, empty array, or empty object; otherwise `false`. Keep it simple and explain limitations.
3. Given `const input = "0"`, show two ways to check whether the user provided a value and whether that value should be treated as empty.
4. Replace `||` with `??` in a defaulting example and explain the difference.

---
