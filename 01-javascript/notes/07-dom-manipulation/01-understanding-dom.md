# JavaScript DOM Manipulation

## Understanding the DOM

### What is the DOM?

DOM stands for **Document Object Model**.

The DOM is a programming interface that represents an HTML document as a tree of JavaScript objects. It allows JavaScript to access, modify, create, and delete elements on a webpage.

### Simple Definition

> The DOM is the browser's object representation of an HTML page that JavaScript can interact with.

---

# Why Do We Need the DOM?

HTML creates the structure of a webpage.

```html
<h1>Hello World</h1>
```

Without the DOM, JavaScript cannot interact with this element.

The DOM acts as a bridge between:

```text
HTML ↔ Browser ↔ JavaScript
```

Using the DOM, JavaScript can:

* Change text
* Change colors
* Show or hide elements
* Create new elements
* Remove elements
* Respond to user actions

---

# How the Browser Uses HTML

When a browser loads an HTML file:

### Step 1

Browser reads HTML.

```html
<body>
    <h1>Learning JavaScript</h1>
    <p>Welcome to DOM</p>
</body>
```

### Step 2

Browser converts HTML into a tree structure.

```text
Document
│
└── body
     │
     ├── h1
     │   └── "Learning JavaScript"
     │
     └── p
         └── "Welcome to DOM"
```

### Step 3

Every element becomes a JavaScript object.

JavaScript can now access and modify these objects.

---

# DOM Tree Concept

The DOM follows a hierarchical structure similar to a family tree.

Example:

```html
<body>
    <div>
        <button>Click Me</button>
    </div>
</body>
```

DOM Tree:

```text
Document
│
└── body
     │
     └── div
          │
          └── button
```

### Relationships

* Parent
* Child
* Sibling

Example:

```html
<body>
    <h1>Title</h1>
    <p>Paragraph</p>
</body>
```

```text
body
├── h1
└── p
```

Here:

* body is the parent
* h1 and p are children
* h1 and p are siblings

---

# Real-World Analogy

Think of a house.

```text
House
├── Living Room
├── Kitchen
└── Bedroom
```

You can enter any room and modify it.

Similarly:

```text
body
├── h1
├── p
└── button
```

JavaScript can navigate and modify any element.

---

# The document Object

The entire webpage starts with a global object called:

```javascript
document
```

Everything inside the webpage is accessible through this object.

```text
document
    ↓
body
    ↓
div
    ↓
button
```

The document object is the entry point to the DOM.

---

# Viewing the DOM

Open browser developer tools:

```text
F12
```

Navigate to:

```text
Elements Tab
```

You can see:

* HTML structure
* DOM tree
* Parent-child relationships

This is one of the most important debugging tools for web development.

---

# Accessing the Document

### Print Entire Document

```javascript
console.log(document);
```

Output:

```text
#document
```

The browser console will show the complete DOM structure.

---

# Working with Page Title

### Read the Title

```javascript
console.log(document.title);
```

Output:

```text
My Website
```

### Change the Title

```javascript
document.title = "Learning DOM";
```

The browser tab updates immediately.

---

# Accessing the Body

### Print Body Element

```javascript
console.log(document.body);
```

Output:

```html
<body>...</body>
```

---

# Changing Styles Through DOM

### Change Background Color

```javascript
document.body.style.background = "lightblue";
```

Result:

* Entire page background becomes light blue.

---

# HTML vs DOM

### HTML

```html
<h1>Hello</h1>
```

HTML is simply text written by the developer.

---

### DOM

```javascript
{
    tagName: "H1",
    innerText: "Hello"
}
```

DOM is the browser's object representation of that HTML.

### Key Difference

| HTML                                 | DOM                      |
| ------------------------------------ | ------------------------ |
| Source code                          | Object representation    |
| Static file                          | Dynamic structure        |
| Written by developer                 | Created by browser       |
| Cannot be manipulated directly by JS | Can be manipulated by JS |

---

# Learning Flow

```text
HTML
  ↓
Browser Reads HTML
  ↓
Creates DOM
  ↓
JavaScript Accesses DOM
  ↓
Webpage Changes Dynamically
```

---

# Code Practice

## index.html

```html
<!DOCTYPE html>
<html>

<head>
    <title>DOM Practice</title>
</head>

<body>

    <h1>Hello JavaScript</h1>

    <p>I am learning DOM.</p>

    <button>Click Me</button>

    <script src="script.js"></script>

</body>

</html>
```

---

## script.js

```javascript
console.log(document);

console.log(document.title);

document.title = "DOM Tutorial";

console.log(document.body);

document.body.style.background = "lightblue";
```

---

# Important Concepts to Remember

### 1. DOM

The browser's object representation of an HTML page.

### 2. Document

The root object representing the entire webpage.

### 3. DOM Tree

A hierarchical structure showing element relationships.

### 4. Parent

An element containing another element.

### 5. Child

An element inside another element.

### 6. Sibling

Elements that share the same parent.

### 7. Manipulation

Changing content, styles, attributes, or structure using JavaScript.

---

# Quick Revision

### DOM stands for:

```text
Document Object Model
```

### JavaScript starts from:

```javascript
document
```

### Print entire DOM:

```javascript
console.log(document);
```

### Get page title:

```javascript
document.title
```

### Change page title:

```javascript
document.title = "New Title";
```

### Access body:

```javascript
document.body
```

### Change background:

```javascript
document.body.style.background = "lightblue";
```

---

# Summary

* The browser converts HTML into a DOM tree.
* Every HTML element becomes a JavaScript object.
* JavaScript interacts with the DOM, not the raw HTML file.
* The `document` object is the root of the DOM.
* DOM manipulation allows webpages to become interactive and dynamic.
* Understanding the DOM tree is essential before learning element selection and events.
