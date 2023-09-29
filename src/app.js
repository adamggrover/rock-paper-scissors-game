// initilise variables
const choices = ['rock', 'paper', 'scissors'];
let userScore = 0;
let computerScore = 0;

function playRound(computerSelection, playerSelection) {
  // messages to be returned to user at the end of the round
  const winMsg = `You win the round! ${playerSelection} beats ${computerSelection}`;
  const loseMsg = `You lose the round! ${computerSelection} beats ${playerSelection}`;
  const drawMsg = `Tie round. You both chose ${playerSelection}`;

  if (computerSelection === 'rock' && playerSelection === 'paper') {
    userScore += 1;
    return winMsg;
  }
  if (computerSelection === 'rock' && playerSelection === 'scissors') {
    computerScore += 1;
    return loseMsg;
  }
  if (computerSelection === 'paper' && playerSelection === 'scissors') {
    userScore += 1;
    return winMsg;
  }
  if (computerSelection === 'paper' && playerSelection === 'rock') {
    computerScore += 1;
    return loseMsg;
  }
  if (computerSelection === 'scissors' && playerSelection === 'rock') {
    userScore += 1;
    return winMsg;
  }
  if (computerSelection === 'scissors' && playerSelection === 'paper') {
    computerScore += 1;
    return loseMsg;
  }

  return drawMsg;
}

//
function game() {
  // set both player scores to 0
  userScore = 0;
  computerScore = 0;

  // randomly select computerr choice from array
  function getcomputerSelection() {
    return choices[Math.floor(Math.random() * choices.length)];
  }

  // prompt user for their choice (rock/paper/scissors)
  function getPlayerSelection() {
    return window
      .prompt('Make your selection (rock/paper/scissors)')
      .toLowerCase();
  }

  // play five round game
  for (let i = 0; i < 5; i += 1) {
    const userSelection = getPlayerSelection();
    const computerSelection = getcomputerSelection();

    // play round and display result message
    console.log(playRound(computerSelection, userSelection));
    // display running game score
    console.log(`${userScore}:${computerScore}`);
  }
  // display result of game
  if (userScore > computerScore) {
    return `Congratulations! You won the game ${userScore} rounds to ${computerScore}`;
  }
  return `You lost the game ${computerScore} rounds to ${userScore}`;
}
console.log(game());
