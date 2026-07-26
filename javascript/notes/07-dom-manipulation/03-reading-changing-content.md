# Reading and Changing Content

```
Select Element
        ↓
Read Content
        ↓
Modify Content
```

Example:

HTML:

```html
<h1>Hello World</h1>
```

JavaScript can:

* Read:

```
Hello World
```

* Change:

```
Welcome JavaScript
```

---

## Accessing Content from Elements

Suppose we have:

```html
<h1 id="title">
    Learning JavaScript
</h1>
```

Select it:

```javascript
const heading = document.querySelector("#title");
```

Now:

```javascript
console.log(heading);
```

Output:

```html
<h1 id="title">
    Learning JavaScript
</h1>
```

This gives the entire element.

But what if we only want the text?

For that, we use:

* `textContent`
* `innerText`
* `innerHTML`

---

## 1. textContent

## What is textContent?

`textContent` gets or sets the complete text content of an element.

Example:

HTML:

```html
<h1 id="title">
    Learning JavaScript
</h1>
```

JavaScript:

```javascript
const heading = document.querySelector("#title");

console.log(heading.textContent);
```

Output:

```
Learning JavaScript
```

---

## Changing Text Using textContent

Example:

HTML:

```html
<h1 id="title">
    Old Heading
</h1>
```

JavaScript:

```javascript
const heading = document.querySelector("#title");

heading.textContent = "New Heading";
```

Result:

```html
<h1 id="title">
    New Heading
</h1>
```

The webpage changes instantly.

---

## Real World Analogy

Imagine a name tag.

Before:

```
Name: John
```

JavaScript:

```javascript
nameTag.textContent = "David";
```

After:

```
Name: David
```

JavaScript replaces the content.

---

## 2. innerText

`innerText` also reads and changes text.

Example:

HTML:

```html
<p>
    Hello World
</p>
```

JavaScript:

```javascript
const paragraph = document.querySelector("p");

console.log(paragraph.innerText);
```

Output:

```
Hello World
```

Change:

```javascript
paragraph.innerText = "Welcome!";
```

Result:

```html
<p>
Welcome!
</p>
```

---

## textContent vs innerText

They look similar, but there is an important difference.

Example:

```html
<p>
    Hello
    <span style="display:none">
        Hidden Text
    </span>
</p>
```

Using:

```javascript
paragraph.textContent;
```

Output:

```
Hello Hidden Text
```

Because `textContent` gets everything.

---

Using:

```javascript
paragraph.innerText;
```

Output:

```
Hello
```

Because hidden text is not visible.

---

## Difference Table

| Feature              | textContent    | innerText               |
| -------------------- | -------------- | ----------------------- |
| Gets all text        | Yes            | Only visible text       |
| Includes hidden text | Yes            | No                      |
| Faster               | Usually faster | Can be slower           |
| Respects CSS         | No             | Yes                     |
| Common usage         | Preferred      | When visibility matters |

---

## Which One Should I Use?

Most of the time:

Use:

```javascript
element.textContent
```

because it is:

* Faster
* Simpler
* Safer
* Does not depend on CSS

Use `innerText` when you specifically need visible text.

---

## 3. innerHTML

## What is innerHTML?

`innerHTML` gets or changes the HTML inside an element.

Example:

HTML:

```html
<div id="box">

<h1>Hello</h1>

</div>
```

JavaScript:

```javascript
const box = document.querySelector("#box");

console.log(box.innerHTML);
```

Output:

```html
<h1>Hello</h1>
```

---

## Changing HTML Using innerHTML

Example:

HTML:

```html
<div id="box">

</div>
```

JavaScript:

```javascript
const box = document.querySelector("#box");

box.innerHTML = "<h1>Hello JavaScript</h1>";
```

Result:

```html
<div id="box">

<h1>Hello JavaScript</h1>

</div>
```

The browser creates a new heading.

---

## Adding Multiple Elements

Example:

```javascript
box.innerHTML = `
    <h2>DOM</h2>
    <p>Learning JavaScript</p>
    <button>Start</button>
`;
```

Result:

```html
<h2>DOM</h2>
<p>Learning JavaScript</p>
<button>Start</button>
```

---

## textContent vs innerHTML

Consider:

```html
<div id="box"></div>
```

JavaScript:

```javascript
box.textContent = "<h1>Hello</h1>";
```

Output:

```
<h1>Hello</h1>
```

It treats it as plain text.

---

But:

```javascript
box.innerHTML = "<h1>Hello</h1>";
```

Output:

```html
<h1>Hello</h1>
```

It creates an actual heading.

---

# Comparison

| Property    | Purpose               | Example            |
| ----------- | --------------------- | ------------------ |
| textContent | Change text           | `"Hello"`          |
| innerText   | Change visible text   | `"Hello"`          |
| innerHTML   | Change HTML structure | `"<h1>Hello</h1>"` |

---

## Security Note: innerHTML

Be careful when using:

```javascript
element.innerHTML = userInput;
```

Example:

```javascript
const comment = input.value;

box.innerHTML = comment;
```

If users enter malicious HTML, it can create security problems.

This is called:

```
Cross-Site Scripting (XSS)
```

For normal text:

Prefer:

```javascript
textContent
```

---

## Practical Examples

## Example 1: Change Heading

HTML:

```html
<h1 id="title">
    Welcome
</h1>
```

JavaScript:

```javascript
const title = document.querySelector("#title");

title.textContent = "Learning DOM";
```

---

## Example 2: Change Paragraph

HTML:

```html
<p id="message">
    Old message
</p>
```

JavaScript:

```javascript
const message = document.querySelector("#message");

message.innerText = "New message";
```

---

## Example 3: Create HTML Content

HTML:

```html
<div id="container"></div>
```

JavaScript:

```javascript
const container = document.querySelector("#container");

container.innerHTML = `
<h2>JavaScript</h2>
<p>DOM Manipulation</p>
`;
```

---

# Template Literals with innerHTML

Modern JavaScript often combines:

* Template literals
* innerHTML

Example:

```javascript
const name = "Kabilesh";

container.innerHTML = `
<h1>Hello ${name}</h1>
<p>Welcome to JavaScript</p>
`;
```

Output:

```html
<h1>Hello Kabilesh</h1>
<p>Welcome to JavaScript</p>
```

---

## Common Beginner Mistakes

## Mistake 1: Changing the variable instead of the element

Wrong:

```javascript
let title = "Hello";
```

This changes only the variable.

Correct:

```javascript
title.textContent = "Hello";
```

---

## Mistake 2: Forgetting to select the element

Wrong:

```javascript
title.textContent = "New Title";
```

If `title` does not exist, JavaScript gives an error.

Correct:

```javascript
const title = document.querySelector("#title");

title.textContent = "New Title";
```

---

## Mistake 3: Using innerHTML unnecessarily

Wrong:

```javascript
heading.innerHTML = "Hello";
```

For simple text:

Better:

```javascript
heading.textContent = "Hello";
```

---

# Complete Example

## HTML

```html
<h1 id="title">
    Old Title
</h1>

<p id="description">
    Old Description
</p>

<div id="box"></div>
```

---

## JavaScript

```javascript
const title = document.querySelector("#title");

const description = document.querySelector("#description");

const box = document.querySelector("#box");


title.textContent = "DOM Mastery";

description.innerText = "Learning JavaScript";


box.innerHTML = `
<h2>Topics</h2>
<p>DOM</p>
<p>Events</p>
`;
```

---

# Practice Problems

## Problem 1

Create an HTML heading:

```html
<h1 id="title">Old Title</h1>
```

Using JavaScript:

* Select the heading.
* Change it to:

```
Learning DOM
```

---

## Problem 2

Create:

```html
<p id="message">
Hello
</p>
```

Change the paragraph text using:

1. `textContent`
2. `innerText`

---

## Problem 3

Create:

```html
<div id="container"></div>
```

Add:

```html
<h2>Hello JavaScript</h2>
<p>I am learning DOM</p>
```

using `innerHTML`.

---

## Problem 4

Explain the difference between:

```javascript
textContent
```

and

```javascript
innerHTML
```

---

## Problem 5

Create:

```html
<h1 id="name"></h1>
```

Create a variable:

```javascript
const username = "Kabilesh";
```

Display:

```
Hello Kabilesh
```

using template literals.

---

## Problem 6

Given:

```html
<p id="text">
    Visible Text
    <span style="display:none">
        Hidden Text
    </span>
</p>
```

Predict the output:

```javascript
text.textContent

text.innerText
```

---

## Problem 7

Create a card using `innerHTML`.

The card should contain:

* Title
* Description
* Button

Example:

```
JavaScript Course

Learn DOM manipulation

Start
```

---

## Problem 8

Create a button:

```html
<button id="btn">
Change Text
</button>
```

When JavaScript runs, change the button text to:

```
Clicked!
```

---

## Problem 9

Create:

```html
<ul id="list"></ul>
```

Using `innerHTML`, add:

```html
<li>HTML</li>
<li>CSS</li>
<li>JavaScript</li>
```

---

## Problem 10 — Mini Challenge

Create:

```html
<h1 id="title">
Website Title
</h1>

<p id="description">
Description
</p>

<div id="content"></div>
```

Using JavaScript:

1. Change the heading text.
2. Change the paragraph text.
3. Add three HTML elements inside the div using `innerHTML`.
4. Use template literals for dynamic content.

---

# Summary

Remember:

```text
Select Element
        ↓
Read/Change Content
        ↓
Update Webpage
```

Important properties:

```javascript
element.textContent
```

→ Read/change plain text

```javascript
element.innerText
```

→ Read/change visible text

```javascript
element.innerHTML
```

→ Read/change HTML structure

For most text changes:

```javascript
textContent
```

is the recommended choice.

