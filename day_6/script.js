// 1. Write a Function to Convert Celsius to Fahrenheit

function celsiusToFahrenheit(celsius) {
  if (typeof celsius !== "number") {
    console.log("Please enter a number");
    return;
  }

  const fahrenhite = (celsius * 9) / 5 + 32;
  return fahrenhite;
}

console.log(celsiusToFahrenheit(100));

// Create a Function to Find the Maximum of Two Numbers
function findMax(num1, num2) {
  if (num1 > num2) {
    console.log(num1 + " is larger than " + num2);
  } else {
    console.log(num2 + " is larger than " + num1);
  }
}

findMax(2, 3);
findMax(-2, -3);

// 3. Function to Check if a String is a Palindrome

function isPalindrome(str) {
  let str2 = "";

  for (let i = str.length - 1; i >= 0; i--) {
    str2 = str2 + str[i].toLowerCase();
  }

  if (str === str2) {
    console.log(str + " is a palindrome");
  } else {
    console.log(str + " is not a palindrome");
  }
}

isPalindrome("adam");
isPalindrome("racecar");
isPalindrome("madam");

// 4. Write a Function to Find Factorial of a Number

function factorial(num) {
  let fact = 1;
  for (let i = num; i > 0; i--) {
    fact = fact * i;
  }

  console.log("Factorial of " + num + " is " + fact);
}

factorial(5);

// 5. Write a function to Count Vowels in a String

function countVowels(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      count++;
    }
  }

  console.log("Number of vowels in " + str + " is " + count);
}

countVowels("Congrats");

// 6. Write a Function to Capitalize the First Letter of Each Word in a Sentence

function capitalize(str) {
  let str2 = "";
  let index = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      index = i + 1;
    }
    if (i === 0 || i === index) {
      str2 += str[i].toUpperCase();
    } else {
      str2 += str[i];
    }
  }

  console.log(str2);
}

capitalize("congratulations to you");

//7. Use an IIFE to Print “Hello, JavaScript!”

(function () {
  console.log("Hello, JavaScript!");
})();

// 8. Create a Simple Callback Function
function greet(name, callback) {
  callback(name);
}

greet("John", (name) => {
  console.log("Hello", name);
});

// 9. Create Call Stack Execution Diagram for this flow

// function f1() {}
// function f2() {
//     f1();
// }
// f2();
