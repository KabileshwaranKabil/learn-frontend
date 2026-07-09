console.log("=== Runtime Demo ===");

// Example 1: Execution order
console.log("Start");

setTimeout(() => {
  console.log("Timeout callback");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise resolved");
});

console.log("End");

// Expected Output:
// Start
// End
// Promise resolved
// Timeout callback

// Example 2: Blocking the event loop
function blockEventLoop(ms) {
  const start = Date.now();
  while (Date.now() - start < ms) {
    // Busy wait (BAD PRACTICE)
  }
}
console.log("Blocking for 2 seconds...");
blockEventLoop(2000);
console.log("Done blocking");

// Example 3: Fix with async
function nonBlockingTask() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Task finished without blocking!");
    }, 2000);
  });
}
nonBlockingTask().then(console.log);

// Example 4: Microtask vs Macrotask
setTimeout(() => console.log("Macrotask: setTimeout"), 0);
Promise.resolve().then(() => console.log("Microtask: Promise"));

// Practice Task 1: Demonstrate order
function practiceOrder() {
  console.log("Task start");
  setTimeout(() => console.log("Timeout executed"), 0);
  Promise.resolve().then(() => console.log("Promise executed"));
  console.log("Task end");
}
practiceOrder();

// Practice Task 2: Block event loop for 1 second
function blockOneSecond() {
  const start = Date.now();
  while (Date.now() - start < 1000) {}
}
blockOneSecond();
console.log("Event loop was blocked for 1 second");

// Practice Task 3: Simulate async operations
async function simulateAsync() {
  const task1 = new Promise(res => setTimeout(() => res("Task 1 done"), 500));
  const task2 = Promise.resolve("Task 2 done immediately");
  const task3 = new Promise(res => setTimeout(() => res("Task 3 done"), 100));

  console.log(await task2);
  console.log(await task3);
  console.log(await task1);
}
simulateAsync();