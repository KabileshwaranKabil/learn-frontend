// Type Conversion Examples and Exercises
// Run this file with Node.js or in the browser console.

// Helper to show section separators
const section = (title) => console.log("\n--- " + title + " ---");

// 1. Implicit conversion examples
section("Implicit conversion examples");
console.log("Age: " + 25);          // "Age: 25"  (string concatenation)
console.log("5" - 2);               // 3          ("5" -> 5)
console.log("5" + 2);               // "52"       (string concatenation)
console.log(true + 1);              // 2          (true -> 1)
console.log(null + 1);              // 1          (null -> 0)
console.log(undefined + 1);         // NaN        (undefined -> NaN)

// 2. Explicit conversion examples
section("Explicit conversion examples");
console.log(Number("42"));          // 42
console.log(parseInt("42px", 10));  // 42
console.log(parseFloat("3.14px"));  // 3.14
console.log(+ "7");                 // 7  (unary plus)
console.log(String(123));           // "123"
console.log(Boolean(0));            // false
console.log(!!"hello");             // true

// 3. Comparison quirks
section("Comparison quirks");
console.log("0 == false:", 0 == false);   // true
console.log("0 === false:", 0 === false); // false
console.log("'' == 0:", "" == 0);         // true
console.log("null == undefined:", null == undefined); // true
console.log("null === undefined:", null === undefined); // false

// 4. Edge cases and gotchas
section("Edge cases and gotchas");
// NaN is not equal to itself
console.log("NaN === NaN:", NaN === NaN); // false
console.log("Number.isNaN(NaN):", Number.isNaN(NaN)); // true
console.log("isNaN('abc'):", isNaN("abc")); // true (global isNaN coerces first)
console.log("Number.isNaN('abc'):", Number.isNaN("abc")); // false (no coercion)

// parseInt without radix
console.log("parseInt('08'):", parseInt("08", 10)); // 8 (always pass radix)

// Objects to primitive
const obj = {
  valueOf() { return 42; },
  toString() { return "forty-two"; }
};
console.log("obj + 1:", obj + 1); // 43 (valueOf used in numeric context)

// Strange concatenation order in REPL vs code
// Note: In some REPLs, a leading { } may be parsed as a block, not an object literal.
// Always wrap object literals in parentheses when using them in expressions if ambiguous.

// 5. Practice Task Implementations

section("Practice Task 1: Predict then run");
// Predictions (explain after running)
const examples = [
  { expr: `"5" + 3`, value: "5" + 3 },
  { expr: `"5" - 3`, value: "5" - 3 },
  { expr: `true + "1"`, value: true + "1" },
  { expr: `null == 0`, value: null == 0 },
  { expr: `null >= 0`, value: null >= 0 }
];
examples.forEach(e => console.log(e.expr, "=>", e.value));

// Explanation notes:
// "5" + 3 => "53" (string concatenation)
// "5" - 3 => 2 (string coerced to number)
// true + "1" => "true1" (boolean coerced to string in concatenation)
// null == 0 => false (null only loosely equals undefined)
// null >= 0 => true (null coerces to 0 for relational comparisons)

// 6. Practice Task 2: toNumberSafe
section("Practice Task 2: toNumberSafe");
function toNumberSafe(value, fallback = 0) {
  const n = Number(value);
  return Number.isNaN(n) ? fallback : n;
}
console.log(toNumberSafe("42", -1));      // 42
console.log(toNumberSafe("abc", -1));     // -1
console.log(toNumberSafe(null, -1));      // 0 (null -> 0)
console.log(toNumberSafe(undefined, -1)); // -1 (undefined -> NaN -> fallback)

// 7. Practice Task 3: Extract numeric value from messy input
section("Practice Task 3: Extract numeric value");
function extractNumber(str) {
  // Trim and use parseFloat to extract leading numeric portion
  const trimmed = String(str).trim();
  const n = parseFloat(trimmed);
  return Number.isNaN(n) ? null : n;
}
console.log(extractNumber("  42px  ")); // 42
console.log(extractNumber(" -3.5em"));  // -3.5
console.log(extractNumber("abc"));      // null

// 8. Practice Task 4: Filter truthy values
section("Practice Task 4: Filter truthy values");
function truthyFilter(arr) {
  return arr.filter(Boolean);
}
console.log(truthyFilter([0, 1, "", "hello", null, undefined, [], {}])); 
// [1, "hello", [], {}]  (empty array and object are truthy)

// 9. Practice Task 5: Compare objects and show reference behavior
section("Practice Task 5: Compare objects and references");
const o1 = { a: 1 };
const o2 = { a: 1 };
console.log("o1 === o2:", o1 === o2); // false (different references)

const o3 = o1;
o3.a = 99;
console.log("o1 after o3 mutation:", o1); // { a: 99 } (same reference)

// Safe shallow copy
const copy = { ...o1 };
copy.a = 5;
console.log("o1 after copy mutation:", o1); // still { a: 99 }
console.log("copy:", copy);

// 10. Small tasks for you to try (logged as instructions)
section("Small practice tasks to try yourself");
console.log("Task A: Implement a function safeAdd(a, b) that converts inputs to numbers and returns their sum or NaN if either cannot be converted.");
console.log("Task B: Demonstrate three different ways to convert '0' to a number and show they are equal.");

// Exports for testing in Node environments (optional)
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    toNumberSafe,
    extractNumber,
    truthyFilter
  };
}