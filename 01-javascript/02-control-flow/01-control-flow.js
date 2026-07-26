// Control Flow Examples

// if statement
const age = 18;
if (age >= 18) {
  console.log("You are an adult.");
}

// if else
const score = 45;
if (score >= 50) {
  console.log("Pass");
} else {
  console.log("Fail");
}

// switch
const day = "Monday";
switch (day) {
  case "Monday":
    console.log("Start of the week");
    break;
  case "Friday":
    console.log("Weekend soon!");
    break;
  default:
    console.log("Just another day");
}

// ternary operator
const isMember = true;
const fee = isMember ? 2 : 10;
console.log("Fee:", fee);

// for loop
for (let i = 1; i <= 5; i++) {
  console.log("for loop iteration:", i);
}

// while loop
let count = 0;
while (count < 3) {
  console.log("while loop count:", count);
  count++;
}

// do while loop
let num = 0;
do {
  console.log("do while number:", num);
  num++;
} while (num < 3);

// for of loop
const colors = ["red", "green", "blue"];
for (const c of colors) {
  console.log("for of color:", c);
}

// break
for (let i = 1; i <= 5; i++) {
  if (i === 3) break;
  console.log("break demo:", i);
}

// continue
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log("continue demo:", i);
}