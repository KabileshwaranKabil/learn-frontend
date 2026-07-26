// Truthy and Falsy Demonstrations
// Run with Node or in browser console

console.log("=== Truthy and Falsy Demo ===");

// Quick boolean conversions
console.log(Boolean([]));        // true
console.log(Boolean({}));        // true
console.log(Boolean(""));        // false
console.log(Boolean("0"));       // true
console.log(Boolean(0));         // false
console.log(Boolean(-0));        // false
console.log(Boolean(NaN));       // false
console.log(Boolean(null));      // false
console.log(Boolean(undefined)); // false
console.log(Boolean("false"));   // true

// Short-circuit examples
console.log(null || "default");      // "default"
console.log("value" || "default");   // "value"
console.log(0 || 10);                // 10 (0 is falsy)
console.log(0 ?? 10);                // 0  (nullish coalescing keeps 0)

// Guarding functions
function callIfExists(fn) {
  // safe guard using truthy check
  if (fn) {
    return fn();
  }
  return undefined;
}
console.log(callIfExists(() => "called")); // "called"
console.log(callIfExists(null));           // undefined

// Common mistake demonstration
const arr = [];
if (arr) {
  console.log("arr is truthy but may be empty"); // runs
}
if (arr.length === 0) {
  console.log("arr is empty"); // correct way to check emptiness
}

// Practice Task 1: Predictions
console.log("\n-- Predictions --");
console.log("Boolean([]) =>", Boolean([]));         // true
console.log("Boolean({}) =>", Boolean({}));         // true
console.log("Boolean(\"\") =>", Boolean(""));       // false
console.log("Boolean(\"0\") =>", Boolean("0"));     // true
console.log("\"\" || \"fallback\" =>", "" || "fallback"); // "fallback"
console.log("0 ?? 5 =>", 0 ?? 5);                   // 0

// Practice Task 2: isEmpty implementation
function isEmpty(value) {
  // Simple, beginner-friendly implementation
  if (value == null) return true; // null or undefined
  if (typeof value === "string") return value.trim() === "";
  if (Array.isArray(value)) return value.length === 0;
  if (typeof value === "object") return Object.keys(value).length === 0;
  return false;
}

// Tests for isEmpty
console.log(isEmpty(null));           // true
console.log(isEmpty(undefined));      // true
console.log(isEmpty(""));             // true
console.log(isEmpty("  "));           // true
console.log(isEmpty([]));             // true
console.log(isEmpty({}));             // true
console.log(isEmpty(0));              // false
console.log(isEmpty("0"));            // false

// Note: This is a pragmatic helper for beginners. It treats whitespace-only strings as empty.
// It does not handle nested emptiness or special objects like Map/Set.

// Practice Task 3: input "0" checks
const input = "0";
// Way 1: Check presence as string
if (input !== undefined && input !== null && input !== "") {
  console.log("User provided a value (string check):", input);
}
// Way 2: Treat "0" as meaningful and use nullish coalescing for defaults
const provided = input ?? "no input";
console.log("Provided using ?? :", provided);

// Practice Task 4: Replace || with ??
const userCount = 0;
const defaultCountUsingOr = userCount || 5; // 5 (undesired if 0 is valid)
const defaultCountUsingNullish = userCount ?? 5; // 0 (keeps 0)
console.log("Using || gives", defaultCountUsingOr);
console.log("Using ?? gives", defaultCountUsingNullish);

// Small tasks for you to try
console.log("\nTry these:");
console.log("1) Modify isEmpty to treat Map and Set as empty when size is 0.");
console.log("2) Write a function safeDefault(value, fallback) that uses ?? internally.");

// Export helpers for tests if running in Node
if (typeof module !== "undefined" && module.exports) {
  module.exports = { isEmpty };
}