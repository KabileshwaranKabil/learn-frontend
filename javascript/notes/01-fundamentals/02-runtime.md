# ⚙️ JavaScript Runtime

## What it is
The **JavaScript runtime** is the environment where JavaScript code executes. It includes:
- The **engine** (e.g., V8, SpiderMonkey).
- The **memory heap** (where objects are stored).
- The **call stack** (where function calls are tracked).
- The **event loop** (manages asynchronous tasks).
- **Web APIs** (browser-provided features like `setTimeout`, DOM, fetch).
- **Callback queue / microtask queue** (tasks waiting to be executed).

## Why it is important
- Explains why JavaScript is **single-threaded** yet can handle asynchronous tasks.
- Helps debug issues like **blocking code**, **race conditions**, and **callback hell**.
- Essential for mastering **async/await**, **Promises**, and **performance optimization**.

## How it works internally
1. **Call Stack**: Functions are pushed/popped as they are invoked.
2. **Heap**: Objects and reference types are stored here.
3. **Event Loop**: Continuously checks if the call stack is empty, then pushes tasks from queues.
4. **Queues**:
   - **Macro-task queue**: `setTimeout`, `setInterval`, I/O.
   - **Micro-task queue**: Promises, `process.nextTick` (Node.js).
5. **Execution order**: Microtasks always run before macrotasks.

## Syntax and Examples
```js
console.log("Start");

setTimeout(() => {
  console.log("Timeout callback");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise resolved");
});

console.log("End");

// Output order:
// Start
// End
// Promise resolved
// Timeout callback
```

## Common Mistakes
- Assuming `setTimeout(fn, 0)` runs immediately (it doesn’t — it waits for the stack to clear).
- Forgetting that **Promises** run before **timeouts**.
- Blocking the event loop with heavy synchronous code.

## Best Practices
- Avoid long-running synchronous loops.
- Use async/await for readability.
- Understand microtask vs macrotask priority.

## Real-world Usage
- Handling **API requests** without freezing the UI.
- Scheduling background tasks.
- Managing **concurrent operations** in Node.js servers.

## Interview Questions
- Explain the event loop.
- Difference between microtask and macrotask queues.
- Why doesn’t `setTimeout(fn, 0)` run immediately?

## Practice Exercises
1. Write code that demonstrates the difference between `setTimeout` and `Promise`.
2. Create a function that blocks the event loop for 2 seconds — then fix it.
3. Simulate multiple async operations and log their execution order.

---
