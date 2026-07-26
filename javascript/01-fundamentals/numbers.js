// Beginner-friendly, practical examples and exercises for Numbers.
// Run with Node.js or in the browser console.

// Section helper
const section = (title) => console.log(`\n--- ${title} ---`);

// Basic numbers and special values
section("Basic numbers and special values");
const intVal = 42;
const floatVal = 3.14;
const negZero = -0;
const inf = Infinity;
const ninf = -Infinity;
const notNumber = Number("abc"); // NaN

console.log("intVal:", intVal);
console.log("floatVal:", floatVal);
console.log("negZero === 0:", negZero === 0, "Object.is(negZero, 0):", Object.is(negZero, 0));
console.log("Infinity:", inf, " -Infinity:", ninf);
console.log("NaN:", notNumber, "Number.isNaN:", Number.isNaN(notNumber));

// Floating point rounding example
section("Floating point rounding");
console.log("0.1 + 0.2 =", 0.1 + 0.2); // 0.30000000000000004

// Use rounding for comparisons
function almostEqual(a, b, eps = 1e-10) {
  return Math.abs(a - b) < eps;
}
console.log("almostEqual(0.1+0.2, 0.3):", almostEqual(0.1 + 0.2, 0.3));

// Conversions
section("Conversions");
console.log("Number('42'):", Number("42"));
console.log("parseInt('08', 10):", parseInt("08", 10));
console.log("parseFloat('3.14px'):", parseFloat("3.14px"));
console.log("Unary plus + '7.5':", +"7.5");

// parseInt pitfalls
section("parseInt pitfalls");
console.log("parseInt('0x10'):", parseInt("0x10", 10)); // with radix 10 -> 0 (not hex)
console.log("parseInt('0x10', 16):", parseInt("0x10", 16)); // 16

// BigInt basics
section("BigInt basics");
const big = 9007199254740993n; // > Number.MAX_SAFE_INTEGER
console.log("BigInt example:", big);
try {
  // Mixing BigInt and number throws
  // console.log(big + 1); // TypeError in strict mixing
  console.log("big + 1n =", big + 1n);
} catch (err) {
  console.error("Mixing BigInt and number error:", err.message);
}

// Number safety checks
section("Number safety checks");
console.log("Number.MAX_SAFE_INTEGER:", Number.MAX_SAFE_INTEGER);
console.log("Number.isSafeInteger(Number.MAX_SAFE_INTEGER):", Number.isSafeInteger(Number.MAX_SAFE_INTEGER));
console.log("Number.isFinite(1/0):", Number.isFinite(1 / 0));

// Formatting for display
section("Formatting for display");
const price = 1234.567;
console.log("toFixed(2):", price.toFixed(2)); // "1234.57"
console.log("toPrecision(4):", price.toPrecision(4)); // "1235"
console.log("Intl.NumberFormat (en-US):", new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(price));

// Practical helpers and tasks

// Task 1: almostEqual (already defined above)
section("Task 1: almostEqual usage");
console.log("almostEqual(0.1+0.2, 0.3):", almostEqual(0.1 + 0.2, 0.3));

// Task 2: parse price string like "$1,234.56" -> 1234.56
section("Task 2: parsePriceString");
function parsePriceString(str) {
  if (typeof str !== "string") return NaN;
  // Remove currency symbols and commas, trim whitespace
  const cleaned = str.replace(/[^0-9.\-]/g, "");
  const n = Number(cleaned);
  return Number.isNaN(n) ? NaN : n;
}
console.log(parsePriceString("$1,234.56")); // 1234.56
console.log(parsePriceString("  €-2.50 ")); // -2.5
console.log(parsePriceString("abc")); // NaN

// Task 3: safeAdd(a, b) that accepts numeric strings or numbers
section("Task 3: safeAdd");
function safeAdd(a, b) {
  const na = Number(a);
  const nb = Number(b);
  if (Number.isNaN(na) || Number.isNaN(nb)) return NaN;
  return na + nb;
}
console.log(safeAdd("10", 5)); // 15
console.log(safeAdd("3.14", "2.86")); // 6
console.log(safeAdd("abc", 1)); // NaN

// Task 4: Demonstrate NaN, Infinity, -0 detection
section("Task 4: NaN, Infinity, -0 detection");
console.log("isNaN(NaN):", Number.isNaN(NaN));
console.log("isFinite(Infinity):", Number.isFinite(Infinity));
console.log("Object.is(-0, 0):", Object.is(-0, 0)); // false if -0 vs 0
console.log("Object.is(-0, -0):", Object.is(-0, -0)); // true

// Task 5: Sum array of monetary values stored as cents and format
section("Task 5: Sum cents and format");
function sumCentsToDollars(centsArray) {
  const totalCents = centsArray.reduce((s, c) => s + Math.trunc(Number(c)), 0);
  const dollars = totalCents / 100;
  return dollars.toFixed(2);
}
console.log(sumCentsToDollars([199, 250, 50])); // "4.99"

// Edge cases and fixes
section("Edge cases and fixes");
// Comparing floats: use almostEqual
console.log("0.3 === 0.1 + 0.2:", 0.3 === 0.1 + 0.2);
console.log("Use almostEqual:", almostEqual(0.3, 0.1 + 0.2));

// BigInt and JSON: BigInt cannot be serialized by JSON.stringify
section("BigInt and JSON");
try {
  JSON.stringify({ id: 1n });
} catch (err) {
  console.error("JSON.stringify BigInt error:", err.message);
}
// Workaround: convert BigInt to string before serializing
console.log("Serialize BigInt workaround:", JSON.stringify({ id: String(1n) }));

// Small practice tasks for you to try
section("Small practice tasks to try");
console.log("A) Implement a function formatCurrency(cents) that returns '$X.YY' from integer cents.");
console.log("B) Write a function average(numbers) that returns the average using safe numeric conversions.");

// Exports for Node testing (optional)
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    almostEqual,
    parsePriceString,
    safeAdd,
    sumCentsToDollars
  };
}