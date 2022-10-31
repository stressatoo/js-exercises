let choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
      return choices[Math.floor(Math.random()*choices.length)];
}

getComputerChoice();

console.log(getComputerChoice()); // works