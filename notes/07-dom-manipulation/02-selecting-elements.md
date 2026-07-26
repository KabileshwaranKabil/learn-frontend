# Selecting Elements


## Why Do We Need to Select Elements?

Imagine you have the following webpage.

```html
<h1>JavaScript DOM</h1>

<p>Welcome to DOM Manipulation.</p>

<button>Click Me</button>
```

Suppose you want to change the heading.

Before JavaScript can modify it, it must first **find** it.

Think of it like calling a friend.

You cannot talk to your friend until you know their phone number.

Similarly,

```text
JavaScript
      ↓
Find Element
      ↓
Modify Element
```

Selecting elements is simply the process of **finding HTML elements**.

---

## The Five Main Selection Methods

JavaScript provides five commonly used methods.

```javascript
document.getElementById()

document.getElementsByClassName()

document.getElementsByTagName()

document.querySelector()

document.querySelectorAll()
```

---

# Sample HTML

```html
<!DOCTYPE html>
<html>

<head>
    <title>DOM</title>
</head>

<body>

<h1 id="title">Learning DOM</h1>

<p class="text">Paragraph One</p>

<p class="text">Paragraph Two</p>

<button>Click Me</button>

</body>

</html>
```

---

# 1. getElementById()

## Syntax

```javascript
document.getElementById("id")
```

This method finds an element using its **id**.

Example

```html
<h1 id="title">Learning DOM</h1>
```

JavaScript

```javascript
const heading = document.getElementById("title");

console.log(heading);
```

Output

```html
<h1 id="title">Learning DOM</h1>
```

---

## Why use an ID?

Every ID should be unique.

Think of a student's registration number.

```text
Student

Registration Number

2024CS001
```

Only one student can have that number.

Similarly,

```html
<h1 id="title">
```

There should only be one element with that ID.

---

# 2. getElementsByClassName()

Sometimes many elements share the same class.

Example

```html
<p class="text">First</p>

<p class="text">Second</p>

<p class="text">Third</p>
```

JavaScript

```javascript
const paragraphs = document.getElementsByClassName("text");

console.log(paragraphs);
```

Output

```text
HTMLCollection(3)
```

It returns **all matching elements**.

---

## Access Individual Elements

```javascript
console.log(paragraphs[0]);

console.log(paragraphs[1]);

console.log(paragraphs[2]);
```

Output

```text
First Paragraph

Second Paragraph

Third Paragraph
```

---

## Analogy

Imagine a classroom.

Teacher says:

> "All students wearing blue shirts, stand up."

Many students respond.

A class works the same way.

---

# 3. getElementsByTagName()

This method selects elements by HTML tag.

Example

```html
<h1>Heading</h1>

<p>Hello</p>

<p>Welcome</p>

<p>JavaScript</p>
```

JavaScript

```javascript
const paragraphs = document.getElementsByTagName("p");

console.log(paragraphs);
```

Output

```text
HTMLCollection(3)
```

Every `<p>` element is selected.

---

# Another Example

```javascript
const headings = document.getElementsByTagName("h1");
```

Returns every `<h1>`.

---

# 4. querySelector()

This is one of the most useful methods.

Syntax

```javascript
document.querySelector("selector")
```

It accepts CSS selectors.

Examples

Select ID

```javascript
document.querySelector("#title");
```

Select class

```javascript
document.querySelector(".text");
```

Select tag

```javascript
document.querySelector("button");
```

---

## Important

`querySelector()` always returns **only the first matching element**.

Example

```html
<p class="text">One</p>

<p class="text">Two</p>

<p class="text">Three</p>
```

```javascript
const paragraph = document.querySelector(".text");
```

Returns only

```html
<p class="text">One</p>
```

---

# Why Use querySelector()?

One method can select almost anything.

```javascript
document.querySelector("#title");

document.querySelector(".text");

document.querySelector("button");

document.querySelector("div p");
```

Very flexible.

---

# 5. querySelectorAll()

Suppose you want every paragraph.

```html
<p>One</p>

<p>Two</p>

<p>Three</p>
```

JavaScript

```javascript
const paragraphs = document.querySelectorAll("p");
```

Output

```text
NodeList(3)
```

Unlike `querySelector()`, this returns **all matching elements**.

---

# Access Elements

```javascript
console.log(paragraphs[0]);

console.log(paragraphs[1]);

console.log(paragraphs[2]);
```

---

# Loop Through Results

```javascript
const paragraphs = document.querySelectorAll("p");

paragraphs.forEach((paragraph) => {
    console.log(paragraph);
});
```

---

# HTMLCollection vs NodeList

Two methods return an **HTMLCollection**.

```javascript
getElementsByClassName()

getElementsByTagName()
```

Two methods return a **NodeList** or a single element.

```javascript
querySelector()

querySelectorAll()
```

### HTMLCollection

* Looks like an array.
* Can access by index.
* Does **not** have `.forEach()`.

Example

```javascript
const items = document.getElementsByClassName("text");

console.log(items[0]);
```

---

### NodeList

Looks like an array and supports `.forEach()`.

```javascript
const items = document.querySelectorAll(".text");

items.forEach(item => {
    console.log(item);
});
```

---

# Which Method Should I Use?

| Situation              | Method                     |
| ---------------------- | -------------------------- |
| Unique ID              | `getElementById()`         |
| First matching element | `querySelector()`          |
| All matching elements  | `querySelectorAll()`       |
| By class (older style) | `getElementsByClassName()` |
| By tag                 | `getElementsByTagName()`   |

For modern JavaScript, most developers primarily use:

* `querySelector()`
* `querySelectorAll()`

because they work with CSS selectors and are very flexible.

---

# Complete Example

### HTML

```html
<h1 id="title">Learning DOM</h1>

<p class="text">Paragraph 1</p>

<p class="text">Paragraph 2</p>

<button>Click Me</button>
```

### JavaScript

```javascript
const heading = document.getElementById("title");

console.log(heading);

const firstParagraph = document.querySelector(".text");

console.log(firstParagraph);

const allParagraphs = document.querySelectorAll(".text");

allParagraphs.forEach(paragraph => {
    console.log(paragraph);
});
```

---

# Common Beginner Mistakes

### Forgetting `#` for IDs

Wrong

```javascript
document.querySelector("title");
```

Correct

```javascript
document.querySelector("#title");
```

---

### Forgetting `.` for Classes

Wrong

```javascript
document.querySelector("text");
```

Correct

```javascript
document.querySelector(".text");
```

---

### Expecting `querySelector()` to Return All Elements

Wrong expectation

```javascript
document.querySelector(".text");
```

This returns only the **first** matching element.

Use:

```javascript
document.querySelectorAll(".text");
```

---

# Quick Revision

```javascript
// Select by ID
document.getElementById("title");

// Select by class
document.getElementsByClassName("text");

// Select by tag
document.getElementsByTagName("p");

// First matching element
document.querySelector(".text");

// All matching elements
document.querySelectorAll(".text");
```

---

# Summary

* DOM manipulation starts by selecting elements.
* IDs should be unique.
* Classes are shared by multiple elements.
* Tags select elements based on HTML tag names.
* `querySelector()` returns the first match.
* `querySelectorAll()` returns every matching element.
* `querySelector()` and `querySelectorAll()` are the most commonly used methods in modern JavaScript.

---