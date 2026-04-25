function rockPaperScissors() {
  const userChoice = prompt(
    "Enter either rock,paper or scissors",
  ).toLowerCase();

  const random = Math.floor(Math.random() * 3) + 1;

  let computerChoice;

  switch (random) {
    case 1:
      computerChoice = "rock";
      break;
    case 2:
      computerChoice = "paper";
      break;
    case 3:
      computerChoice = "scissors";
      break;
  }

  console.log("User chose", userChoice);
  console.log("Computer Chose", computerChoice);
  if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log("Congrats, User wins");
  } else if (
    (userChoice === "rock" && computerChoice === "rock") ||
    (userChoice === "paper" && computerChoice === "paper") ||
    (userChoice === "scissors" && computerChoice === "scissors")
  ) {
    console.log("The game tied");
  } else if (
    (userChoice === "rock" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "rock")
  ) {
    console.log("Oh no, Computer wins");
  }
  const playAgainPrompt = prompt(
    "Do you want to play again. (yes/no)",
  ).toLowerCase();

  const playAgain = playAgainPrompt === "yes" ? rockPaperScissors() : "no";
}
rockPaperScissors();
