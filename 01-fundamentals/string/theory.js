/*

Strings in Javascript are primitive data types used to represent text. 
They are sequences of characters enclosed in single quotes (' '), double quotes (" "), or backticks (` `). 
Strings can include letters, numbers, symbols, and whitespace.
*/
let name="Kabileshwaran";

// String concatenation using + operator
let firstName="Manomohan";
let fullName=firstName+' '+name;
console.log(fullName);

// string concatenation using += operator updating existing variable
let address="Nuwara Eliya";
address+=', Sri Lanka';
console.log(address);

// String concatenation using concat() method

let studentName='Aakash';
studentName=studentName.concat(' ', 'Prakash');
console.log(studentName);
console.log(studentName)