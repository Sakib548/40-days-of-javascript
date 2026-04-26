function secretNumber() {
  const max = 10;
  const min = 1;

  let userChoice = null;

  const secret = Math.floor(Math.random() * (max - min + 1)) + min;

  let attempts = 0;

  console.log("User chose", userChoice);

  while (userChoice !== secret) {
    userChoice = parseInt(prompt("Enter the secret number between 1 to 10"));
    attempts++;
    if (isNaN(userChoice)) {
      console.log("Please enter a valid number");
      continue;
    }
    if (userChoice > max || userChoice < min) {
      console.log("Please Enter a number between 1 and 10");
      continue;
    } else if (userChoice > secret) {
      console.log("Your guess is too high");
    } else if (userChoice < secret) {
      console.log("Your guess is too low");
    }
  }
  console.log("Congrats your guess is right.It took " + attempts + " attempts");

  const playAgainPrompt = prompt(
    "Do you want to play again. (yes/no)",
  ).toLowerCase();

  const playAgain = playAgainPrompt === "yes" ? secretNumber() : "no";
}
secretNumber();
