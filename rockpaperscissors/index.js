let choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
      return choices[Math.floor(Math.random()*choices.length)];
}

function playRound(playerSelection, computerSelection) {
      let playerSelection = (prompt("Insert choice (Rock / Paper / Scissors)")).toLowerCase();

      let result;

      return result;
}

function game() {
      for (let i = 1; i <= 5; ++i) {
            playRound();
      }
}

getComputerChoice();

let computerSelection = getComputerChoice();


/*
Write a function that plays a single round of Rock Paper Scissors. 
The function should take two parameters - the playerSelection and computerSelection - 
and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
*/