// decleration

// let userName = prompt("enter your user name");
const computerChoiceDisplay = document.querySelector(".computer-choice");
const usersChoiceDisplay = document.querySelector(".user-choice");
const resultDisplay = document.querySelector(".Result");
const btn = document.querySelectorAll("#btn");
let userChoice;
let computerSelect;
let displayResult;

btn.forEach((p) => {
  p.addEventListener("click", (e) => {
    userChoice = e.target.className;
    usersChoiceDisplay.innerHTML = userChoice;
    computerChoice();
    result();
  });
});

function computerChoice() {
  const randomNumber = Math.floor(Math.random() * btn.length + 1);

  if (randomNumber === 1) {
    computerSelect = "rock";
  }
  if (randomNumber === 2) {
    computerSelect = "paper";
  }
  if (randomNumber === 3) {
    computerSelect = "scissor";
  }
  computerChoiceDisplay.innerHTML = computerSelect;
  console.log(computerSelect);
}

function result() {
  if (computerSelect === userChoice) {
    displayResult = "its a draw";
  }
  if (computerSelect === "rock" && userChoice === "paper") {
    displayResult = "you win!";
  }

  if (computerSelect === "rock" && userChoice === "scissor") {
    displayResult = "you lose!";
  }
  if (computerSelect === "scissor" && userChoice === "paper") {
    displayResult = "you lose!";
  }

  if (computerSelect === "paper" && userChoice === "scissor") {
    displayResult = "you win!";
  }

  if (computerSelect === "paper" && userChoice === "rock") {
    displayResult = "you lose!";
  }

  if (computerSelect === "scissor" && userChoice === "rock") {
    displayResult = "you win!";
  }

  resultDisplay.innerHTML = displayResult;
  // console.log(resultDisplay);
}
