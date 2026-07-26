// Practical Math object examples, edge cases, and small tasks.
// Run with Node.js or in the browser console.

// Section helper
const section = (title) => console.log(`\n--- ${title} ---`);

// 1. Constants and simple usage
section("Constants and simple usage");
console.log("Math.PI:", Math.PI);
console.log("Math.E:", Math.E);

// 2. Rounding behaviors
section("Rounding behaviors");
console.log("Math.floor(3.9):", Math.floor(3.9));   // 3
console.log("Math.ceil(3.1):", Math.ceil(3.1));     // 4
console.log("Math.round(3.5):", Math.round(3.5));   // 4
console.log("Math.trunc(3.9):", Math.trunc(3.9));   // 3

// Edge: negative numbers
console.log("Math.floor(-3.1):", Math.floor(-3.1)); // -4
console.log("Math.trunc(-3.1):", Math.trunc(-3.1)); // -3

// 3. Absolute, sign
section("Absolute and sign");
console.log("Math.abs(-7):", Math.abs(-7));
console.log("Math.sign(-7):", Math.sign(-7)); // -1, 0, 1

// 4. Power and roots
section("Power and roots");
console.log("Math.pow(2,3):", Math.pow(2, 3)); // 8
console.log("2 ** 3:", 2 ** 3);               // 8 (operator)
console.log("Math.sqrt(16):", Math.sqrt(16)); // 4
console.log("Math.cbrt(27):", Math.cbrt(27)); // 3

// 5. Min / Max with arrays (common pitfall)
section("Min / Max with arrays");
const arr = [5, 1, 9, -2, 7];
console.log("Math.max(...arr):", Math.max(...arr));
console.log("Math.min(...arr):", Math.min(...arr));
// Pitfall: Math.max(arr) -> NaN
console.log("Math.max(arr) ->", Math.max(arr)); // NaN

// 6. Random helpers
section("Random helpers");
// Basic random [0, 1)
console.log("Math.random():", Math.random());

// Helper: random integer inclusive
function randInt(min, max) {
  // Ensure integers
  const lo = Math.ceil(min);
  const hi = Math.floor(max);
  // If min > max after adjustments, return NaN to signal misuse
  if (lo > hi) return NaN;
  return Math.floor(Math.random() * (hi - lo + 1)) + lo;
}
console.log("randInt(1,6):", randInt(1, 6)); // dice roll

// Helper: random float in [min, max)
function randFloat(min, max) {
  return Math.random() * (max - min) + min;
}
console.log("randFloat(0,1):", randFloat(0, 1));

// 7. Trigonometry and degrees/radians
section("Trigonometry and conversions");
function toRadians(deg) {
  return (deg * Math.PI) / 180;
}
function toDegrees(rad) {
  return (rad * 180) / Math.PI;
}
console.log("toRadians(180):", toRadians(180)); // PI
console.log("toDegrees(Math.PI):", toDegrees(Math.PI)); // 180
console.log("Math.sin(Math.PI/2):", Math.sin(Math.PI / 2)); // 1

// 8. Distance between points
section("Distance between points");
function distance(x1, y1, x2, y2) {
  // Math.hypot is robust and readable
  return Math.hypot(x2 - x1, y2 - y1);
}
console.log("distance(0,0,3,4):", distance(0, 0, 3, 4)); // 5

// 9. Clamp utility
section("Clamp utility");
function clamp(value, min, max) {
  if (min > max) {
    // swap to be forgiving
    [min, max] = [max, min];
  }
  return Math.min(Math.max(value, min), max);
}
console.log("clamp(10, 0, 5):", clamp(10, 0, 5)); // 5
console.log("clamp(-1, 0, 5):", clamp(-1, 0, 5)); // 0

// 10. Average, min, max safely for arrays
section("Aggregate helpers");
function stats(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) return null;
  // Convert values to numbers safely
  const nums = numbers.map(n => Number(n)).filter(n => Number.isFinite(n));
  if (nums.length === 0) return null;
  const sum = nums.reduce((s, v) => s + v, 0);
  return {
    min: Math.min(...nums),
    max: Math.max(...nums),
    avg: sum / nums.length,
    sum
  };
}
console.log("stats([1,2,3,4]):", stats([1, 2, 3, 4]));
console.log("stats(['5','6','x']):", stats(["5", "6", "x"])); // ignores NaN

// 11. Edge cases and pitfalls
section("Edge cases and pitfalls");
// NaN propagation
console.log("Math.sqrt('abc') ->", Math.sqrt("abc")); // NaN

// Random bounds misuse
console.log("randInt(5,1) ->", randInt(5, 1)); // NaN (invalid range)

// Floating point rounding when formatting
const total = 0.1 + 0.2;
console.log("0.1 + 0.2 =", total);
console.log("toFixed(2):", total.toFixed(2)); // "0.30" for display

// 12. Small practice tasks (implementations included)

// Task 1: randInt(min, max) - already implemented above

// Task 2: clamp(value, min, max) - implemented above

// Task 3: distance(x1,y1,x2,y2) - implemented above

// Task 4: toRadians and toDegrees - implemented above

// Task 5: average, min, max - implemented as stats()

// Quick tests for practice tasks
section("Quick tests for practice tasks");
console.log("randInt(1,3) multiple:", [randInt(1, 3), randInt(1, 3), randInt(1, 3)]);
console.log("clamp(7,1,5):", clamp(7, 1, 5));
console.log("distance(1,1,4,5):", distance(1, 1, 4, 5));
console.log("toRadians(90):", toRadians(90));
console.log("stats([10,20,30]):", stats([10, 20, 30]));

// Export helpers for Node testing (optional)
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    randInt,
    randFloat,
    toRadians,
    toDegrees,
    distance,
    clamp,
    stats
  };
}
