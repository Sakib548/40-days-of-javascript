let day = "Monday";

switch (day) {
  case "monday":
    console.log("It's the start of the week.");
    break;
  default:
    console.log("It's a normal day.");
}

//This will print It's a normal day.". Because javascript is case sensitive "monday" and "Monday" are different

////2. ATM Cash Withdrawal System/////////////

let amount = 150;

if (amount % 100 === 0) {
  console.log("Withdrawal successful");
} else {
  console.log("Invalid Amount");
}

//3. Calculator with switch-case
let operator = "*";
let operand1 = 5;
let operand2 = 3;

switch (operator) {
  case "+":
    console.log(operand1 + operand2);
    break;
  case "-":
    console.log(operand1 - operand2);
    break;
  case "*":
    console.log(operand1 * operand2);
    break;
  case "/":
    console.log(operand1 / operand2);
    break;
  default:
    console.log("Invalid operator");
}

// 4. Pay for your movie ticket

let age = 25;

if (age < 18) {
  console.log("Your ticket price is $3");
} else if (age >= 18 && age <= 60) {
  console.log("Your ticket price is $10");
} else {
  console.log("Your ticket price is $8");
}
/////////////// 5. Horoscope Sign Checker /////////////////

let birthMonth = "July";
switch (birthMonth.toLowerCase()) {
  case "march":
  case "april":
    console.log("Aries");
    break;

  case "april":
  case "may":
    console.log("Taurus");
    break;

  case "may":
  case "june":
    console.log("Gemini");
    break;

  case "june":
  case "july":
    console.log("Cancer");
    break;

  case "july":
  case "august":
    console.log("Leo");
    break;

  case "august":
  case "september":
    console.log("Virgo");
    break;

  case "september":
  case "october":
    console.log("Libra");
    break;

  case "october":
  case "november":
    console.log("Scorpio");
    break;

  case "november":
  case "december":
    console.log("Sagittarius");
    break;

  case "december":
  case "january":
    console.log("Capricorn");
    break;

  case "january":
  case "february":
    console.log("Aquarius");
    break;

  case "february":
  case "march":
    console.log("Pisces");
    break;

  default:
    console.log("Invalid month");
}

// ////////////////////6. Which Triangle?///////////////////////

let side1 = 4;
let side2 = 5;
let side3 = 6;

if (side1 + side2 > side3 && side2 + side3 > side1 && side1 + side3 > side2) {
  if (side1 === side2 && side1 === side3) {
    console.log("Equilateral Triangle");
  } else if (side1 === side2 || side2 === side3 || side1 === side3) {
    console.log("Isosceles Triangle");
  } else {
    console.log("Scalene Triangle");
  }
}
