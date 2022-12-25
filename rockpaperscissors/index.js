let computerScore = 0;
let playerScore = 0;

let choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
      return choices[Math.floor(Math.random()*choices.length)];
}

function playRound(ps, cs) {
      let result;

      if (ps == cs) {
            result = "You tied!";
            ++playerScore;
            ++computerScore;
      } else if (ps == "rock") {
            if (cs == "scissors") {
                  result = "You won!";
                  ++playerScore;
            } else {
                  result = "You lost!";
                  ++computerScore;            
            }
      } else if (ps == "paper") {
            if (cs == "rock") {
                  result = "You won!";
                  ++playerScore;
            } else {
                  result = "You lost!";
                  ++computerScore;            
            }
      } else if (ps == "scissors") {
            if (cs == "paper") {
                  result = "You won!";
                  ++playerScore;
            } else {
                  result = "You lost!";
                  ++computerScore;            
            }
      } else console.log("Invalid selection");

      console.log(result);
      console.log("Player score: " + playerScore);
      console.log("Computer score: " + computerScore);
}

function game() {
      for (let i = 1; i <= 5; ++i) {
            let playerSelection = (prompt("Insert choice (Rock / Paper / Scissors)")).toLowerCase();
            playRound(playerSelection, computerSelection);
      }
}

getComputerChoice();

let computerSelection = getComputerChoice().toLowerCase();

console.log(computerSelection);

game();