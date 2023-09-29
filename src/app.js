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

function game() {
  // set both player scores to 0
  userScore = 0;
  computerScore = 0;

  // randomly select computerr choice from array
  function getcomputerSelection() {
    return choices[Math.floor(Math.random() * choices.length)];
  }

  function endGame() {
    if (userScore > computerScore) {
      return `Congratulations! You won the game ${userScore} rounds to ${computerScore}`;
    }
    return `You lost the game ${computerScore} rounds to ${userScore}`;
  }

  function checkScore() {
    if (userScore === 5 || computerScore === 5) {
      console.log(endGame());
    }
  }

  function playRock() {
    const computerSelection = getcomputerSelection();
    console.log(playRound(computerSelection, 'rock'));
    // display running game score
    console.log(`${userScore}:${computerScore}`);
    console.log(checkScore());
  }

  function playPaper() {
    const computerSelection = getcomputerSelection();
    console.log(playRound(computerSelection, 'paper'));
    // display running game score
    console.log(`${userScore}:${computerScore}`);
    console.log(checkScore());
  }

  function playScissors() {
    const computerSelection = getcomputerSelection();
    console.log(playRound(computerSelection, 'scissors'));
    // display running game score
    console.log(`${userScore}:${computerScore}`);
    console.log(checkScore());
  }

  // add event listeners to choice buttons
  const btnRock = document.getElementById('btn-rock');
  const btnPaper = document.getElementById('btn-paper');
  const btnScissors = document.getElementById('btn-scissors');

  // call functions when rock, p[aper, scissor buttons are clicked
  btnRock.addEventListener('click', playRock);
  btnPaper.addEventListener('click', playPaper);
  btnScissors.addEventListener('click', playScissors);
}

console.log(game());
