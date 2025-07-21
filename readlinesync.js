const readline = require("readline-sync");

// Ask for user's name
let name = readline.question("Name? ");
console.log("Hi " + name);

// Ask 4 ?'s
let a1 = readline.question("Is true a value? ");
let a2 = readline.question("Is 5 + '5' a number or string? ");
let a3 = readline.question("What does typeof 42 give you? ");
let a4 = readline.question("Is null the same as undefined? ");

// Ask for a number and X2
let num = readline.question("Type any number: ");
let doubled = Number(num) * 2;

// Output
console.log("\nYou said:");
console.log("1: " + a1);
console.log("2: " + a2);
console.log("3: " + a3);
console.log("4: " + a4);
console.log("Your number doubled is: " + doubled);