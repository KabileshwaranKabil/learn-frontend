// Beginner-friendly, practical examples and small tasks for strings.
// Run with Node.js or in the browser console.

// Section helper
const section = (title) => console.log(`\n--- ${title} ---`);

// Basic literals and immutability
section("Literals and immutability");
const s1 = "hello";
const s2 = 'world';
const s3 = `Hello, ${s2}!`;
console.log(s1, s2, s3);

// Trying to mutate (does nothing)
let demo = "abc";
demo[0] = "A";
console.log("After attempted mutation:", demo); // still "abc"

// Useful methods
section("Useful methods");
const sample = "  JavaScript is fun!  ";
console.log("length:", sample.length);
console.log("trim:", sample.trim());
console.log("upper:", sample.toUpperCase());
console.log("lower:", sample.toLowerCase());
console.log("includes 'Script':", sample.includes("Script"));
console.log("startsWith '  Ja':", sample.startsWith("  Ja"));
console.log("endsWith '!  ':", sample.endsWith("!  "));

// slice vs substring vs substr (substr is legacy)
const s = "abcdef";
console.log("slice(1,4):", s.slice(1, 4));      // 'bcd'
console.log("substring(1,4):", s.substring(1, 4)); // 'bcd'
console.log("slice(-3):", s.slice(-3));         // 'def'

// indexOf and lastIndexOf
const text = "the quick brown fox jumps over the lazy dog";
console.log("indexOf 'the':", text.indexOf("the")); // 0
console.log("lastIndexOf 'the':", text.lastIndexOf("the")); // near end

// replace vs replaceAll
section("replace vs replaceAll");
const r = "red green red";
console.log("replace (first):", r.replace("red", "blue")); // 'blue green red'
console.log("replaceAll (all):", r.replaceAll("red", "blue")); // 'blue green blue'
// fallback for environments without replaceAll:
// r.split("red").join("blue");

// splitting and joining
section("split and join");
const csv = "a,b,c\n1,2,3";
const rows = csv.split("\n").map(row => row.split(","));
console.log("Parsed CSV:", rows);
const joined = rows.map(r => r.join("|")).join("\n");
console.log("Joined with |:", joined);

// Template literals and multi-line
section("template literals");
const name = "Kabi";
const multi = `Dear ${name},
This is a multi-line message.
Regards.`;
console.log(multi);

// Edge case: length vs user-perceived characters (emoji)
section("emoji and length");
const emoji = "👍"; // single emoji often length 2 in UTF-16
console.log("emoji:", emoji, "length:", emoji.length);
console.log("count using Array.from:", Array.from(emoji).length);

// Counting grapheme clusters (simple approach using Intl.Segmenter if available)
if (typeof Intl !== "undefined" && Intl.Segmenter) {
  const seg = new Intl.Segmenter(undefined, { granularity: "grapheme" });
  const str = "👨‍👩‍👧‍👦🇱🇰a"; // family emoji + flag + 'a'
  const count = [...seg.segment(str)].length;
  console.log("Grapheme count (Intl.Segmenter):", count);
} else {
  console.log("Intl.Segmenter not available; use Array.from for basic counting.");
}

// Common mistakes demonstration
section("common mistakes");
console.log("'5' + 3 =>", '5' + 3); // '53' (concatenation)
console.log("'5' - 3 =>", '5' - 3); // 2 (coerced to number)
console.log("replace without global:", "aaa".replace("a", "b")); // 'baa'

// Small helper functions (practice tasks)

// 1) capitalize(word)
section("Task 1: capitalize");
function capitalize(word) {
  if (typeof word !== "string" || word.length === 0) return word;
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}
console.log(capitalize("hello")); // Hello
console.log(capitalize("JAVAscript")); // Javascript

// 2) truncate(str, maxLength)
section("Task 2: truncate");
function truncate(str, maxLength) {
  if (typeof str !== "string") return str;
  if (maxLength < 0) throw new Error("maxLength must be non-negative");
  if (str.length <= maxLength) return str;
  if (maxLength <= 1) return "…".repeat(maxLength); // edge handling
  return str.slice(0, maxLength - 1) + "…";
}
console.log(truncate("Hello world", 8)); // "Hello w…"
console.log(truncate("Short", 10)); // "Short"

// 3) safeHTML(text)
section("Task 3: safeHTML");
function safeHTML(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
console.log(safeHTML('<div class="x">Tom & Jerry</div>'));

// 4) parse simple CSV (already shown above) - small reusable function
section("Task 4: parseCSV");
function parseCSV(input) {
  // Very simple CSV parser for beginner use: no quoted fields handling.
  return input.split("\n").map(line => line.split(","));
}
console.log(parseCSV("a,b,c\n1,2,3"));

// 5) count user-perceived characters (basic)
section("Task 5: countCharacters");
function countCharacters(str) {
  // Basic approach: Array.from handles surrogate pairs reasonably well.
  return Array.from(String(str)).length;
}
console.log(countCharacters("a")); // 1
console.log(countCharacters("👍")); // 1 or 2 depending on engine; Array.from returns 1

// Edge-case tests and fixes
section("Edge cases and fixes");
// replaceAll fallback
function replaceAllFallback(str, search, replace) {
  if (String.prototype.replaceAll) return str.replaceAll(search, replace);
  return str.split(search).join(replace);
}
console.log(replaceAllFallback("red red red", "red", "blue"));

// Handling empty inputs
console.log("capitalize('') =>", capitalize(""));
try {
  console.log("truncate with negative length =>", truncate("x", -1));
} catch (err) {
  console.error("Expected error:", err.message);
}

// Small practice tasks for you to try (instructions)
section("Try these yourself");
console.log("A) Write a function that converts 'first last' into 'Last, First'.");
console.log("B) Improve parseCSV to handle quoted fields like \"a,\"\"b\"\",c\".");

// Export functions for testing (Node)
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    capitalize,
    truncate,
    safeHTML,
    parseCSV,
    countCharacters,
    replaceAllFallback
  };
}
