// 1. Odd or Even?

let num = 10;

console.log(`${num} is a ${num % 2 === 0 ? "even" : "odd"} number`);

// 2. Do you have a Driving License

let age = 7;

if (age >= 18) {
  console.log("You are eligible to vote");
} else {
  console.log("You are not eligible to vote");
}

// 3. Calculate CTC with a Bonus

let monthlySalary = 12300;

let annualSalary = 12300 * 12;

let totalSalary = annualSalary * 1.2;

console.log(totalSalary);

// 4. Write a program for the Traffic Light Simulation

let color = "green";

switch (color) {
  case "green":
    console.log("GO");
    break;
  case "red":
    console.log("STOP");
    break;
}

// Electricity Bill Calculator

let units = 3;
const unitPrice = 150;

let costperMonth = units * unitPrice * 30;

let costperYear = units * unitPrice * 365;

let costperYearWithDiscount = costperYear * 0.8;

console.log(costperYearWithDiscount);

//  Leap Year Checker

let year = 2024;

let leapYearOrNot = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

console.log(`${year} is ${leapYearOrNot ? "a leap year" : "not a leap year"}`);

// Max of Three Numbers

let p = 5;
let q = 65;
let r = 7;

if (p > q && p > r) {
  console.log(`${p} is the maximum of these numbers`);
} else if (q > p && q > r) {
  console.log(`${q} is the maximum of these numbers`);
} else {
  console.log(`${r} is the maximum of these numbers`);
}

//8. Bitwise Doubling

const count = 5;

let double = count << 1;

console.log(`Double of ${count} is ${double}`);
