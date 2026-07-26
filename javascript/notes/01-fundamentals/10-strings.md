### Strings

#### What it is
A **string** is a sequence of characters used to represent text. In JavaScript a string is a **primitive** value (immutable) and can be created with single quotes `'...'`, double quotes `"..."`, or backticks `` `...` `` (template literals).

#### Why it matters
Strings are everywhere: user input, messages, file paths, HTML, JSON, logs. Mastering strings early makes it easy to manipulate text, format output, validate input, and build user-facing features.

#### How it works internally
- Strings are **immutable**: any operation that looks like it changes a string actually produces a new string.
- Internally engines store strings efficiently (often as sequences of UTF-16 code units). When you slice or concatenate, the engine may share memory where possible, but conceptually you get new values.
- When a non-string value is used in a string context, JavaScript performs **ToString** conversion (numbers, booleans, `null`, `undefined` become `"..."`).

#### Syntax and examples
```js
// Literals
const s1 = "hello";
const s2 = 'world';
const s3 = `hello ${s2}`; // template literal with interpolation

// Common operations
s1.length;               // 5
s1[0];                   // 'h'
s1.toUpperCase();        // 'HELLO'
s1.indexOf('l');         // 2
s1.slice(1, 4);          // 'ell'
s1.replace('ll', 'LL');  // 'heLLo'
'  trim  '.trim();       // 'trim'
'1,2,3'.split(',');      // ['1','2','3']
```

#### Common mistakes
- **Mutating strings**: trying to change a character by assignment (`s[0] = 'H'`) — this does nothing.
- **Using `==` with strings and numbers**: `'5' == 5` is `true` due to coercion; prefer `===`.
- **Assuming `.length` equals characters**: `.length` counts UTF-16 code units; some emoji or combined characters count as 2 units. Use `Array.from(str).length` or `for...of` to iterate grapheme clusters more safely.
- **Using `replace` expecting global change**: `str.replace('a', 'b')` replaces only the first occurrence unless you use a global regex `/a/g`.
- **Building HTML by concatenation** without escaping user input — XSS risk.

#### Best practices
- Use **template literals** for readable interpolation and multi-line strings.
- Use `String.prototype` methods for transformations; prefer `trim()`, `slice()`, `includes()`, `startsWith()`, `endsWith()`.
- Use `String.prototype.replaceAll()` (ES2021) or global regex for multiple replacements.
- Escape user input before inserting into HTML; prefer DOM APIs or templating libraries.
- For performance-sensitive repeated concatenation, prefer array join pattern (`parts.push(...); parts.join('')`) in tight loops.

#### Real-world usage
- Formatting messages and logs.
- Parsing CSV or simple text formats.
- Sanitizing and validating user input.
- Building small templates for emails or notifications.

#### Interview questions
- Why are strings immutable in JavaScript?
- How do you replace all occurrences of a substring?
- How do you count characters correctly when strings contain emoji?
- What’s the difference between `slice`, `substring`, and `substr`?

#### Practice exercises
1. Write a function `capitalize(word)` that returns the word with the first letter uppercase and the rest lowercase.
2. Implement `truncate(str, maxLength)` that shortens a string and appends `…` when it exceeds `maxLength`.
3. Create `safeHTML(text)` that escapes `<`, `>`, `&`, `"`, and `'`.
4. Given a CSV string `"a,b,c\n1,2,3"`, parse it into an array of rows and columns.
5. Count the number of user-perceived characters in a string containing emoji.

---