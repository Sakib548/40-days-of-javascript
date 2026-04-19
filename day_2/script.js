const name = "John";
let age = 27;
let isStudent = true;
let favoriteProgrammingLanguage = "Javascript";

console.log(name);
console.log(age);
console.log(isStudent);
console.log(favoriteProgrammingLanguage);

///name = "Jack";

///Can't reassign to const
//This will result in TypeError: Assignment to constant variable.

isStudent = false;
console.log(isStudent); // This can be done becuase with let we can reassign values

///let isStudent = false;
// This will result in SyntaxError: Identifier 'isStudent' has already been declared
// Can't redeclare with let

let Person = {
  name: "Jack",
  age: 30,
};

let arr = [1, 2, 3, 4, 5];

Person.name = "John";
console.log(Person);

arr = [7, 6, 5, 4, 3];

console.log(arr);
