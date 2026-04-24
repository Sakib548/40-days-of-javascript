//1. Pyramid Pattern using Nested Loop

for (let i = 0; i < 5; i++) {
  for (let j = 0; j <= i; j++) {
    process.stdout.write(" * ");
  }
  console.log();
}

//2.  Multiplication Table (Using for loop)

for (let i = 1; i <= 10; i++) {
  console.log(`3 * ${i} = ${3 * i}`);
}

//3.  summation of all odd numbers between 1 to 500

let total = 0;
for (let i = 1; i <= 500; i++) {
  if (i % 2 !== 0) {
    total = total + i;
  }
}

console.log(" summation of all odd numbers between 1 to 500 is", total);

// 4. Skipping Multiples of 3

for (let i = 0; i <= 20; i++) {
  if (i % 3 === 0) {
    continue;
  }
  console.log(i);
}
// 5. Reverse Digits of a Number (Using while loop)

let input = 6789;
let result = "";
while (input > 0) {
  result = result + (input % 10);
  input = parseInt(input / 10);
}

console.log(result);

///6
