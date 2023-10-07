// import images
import rock from './assets/icons/rock.png';
import paper from './assets/icons/paper.png';
import scissors from './assets/icons/scissors.png';
import question from './assets/icons/question.png';

// Get the modal
const modal = document.getElementById('myModal');

// get the play again button
const playAgainBtn = document.querySelector('.btn-play-again');

// get the player selection images
const userChoiceImg = document.querySelector('.user-choice-img');
const computerChoiceImg = document.querySelector('.computer-choice-img');

// get the text containers
const msgRoundContainer = document.querySelector('.msg-round-container');
const msgRoundContainerSummary = document.querySelector(
  '.msg-round-container-summary'
);
const msgGameContainer = document.querySelector('.msg-game-container');

// get the player score containers
const userScoreContainer = document.querySelector('.user-score-text');
const computerScoreContainer = document.querySelector('.computer-score-text');

// initialise choices array for player selections
const choices = ['rock', 'paper', 'scissors'];

// initilise player score variables
let userScore = 0;
let computerScore = 0;

function setStartValues() {
  // set text container messages for start of game
  msgRoundContainer.textContent = 'First player to 5 points wins';
  msgRoundContainerSummary.textContent = 'make your selection';

  // set player choice images to question marks
  userChoiceImg.src = question;
  computerChoiceImg.src = question;

  // reset player scores
  userScore = 0;
  computerScore = 0;

  // update player score text containers on page
  userScoreContainer.textContent = 0;
  computerScoreContainer.textContent = 0;
}

function playAgain() {
  // close modal
  modal.style.display = 'none';
  // reset values
  setStartValues();
}

// add event listener for play again button
playAgainBtn.addEventListener('click', () => {
  playAgain();
});

function getcomputerSelection() {
  // randomly select computerr choice from array
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(computerSelection, playerSelection) {
  // set messages to be returned to user at the end of the round
  const winMsg = `You win the round!`;
  const winSummary = `${playerSelection} beats ${computerSelection}`;
  const loseMsg = `You lose the round!`;
  const loseSummary = `${computerSelection} beats ${playerSelection}`;
  const drawMsg = `Tie round`;
  const drawSummary = `You both chose ${playerSelection}`;

  if (computerSelection === 'rock' && playerSelection === 'paper') ||
  (computerSelection === 'paper' && playerSelection === 'scissors') ||
  (computerSelection === 'scissors' && playerSelection === 'rock')
  {
    userScore += 1;
    return [winMsg, winSummary, computerSelection, playerSelection];
  }
  if (computerSelection === 'rock' && playerSelection === 'scissors') ||
  (computerSelection === 'paper' && playerSelection === 'rock') ||
  (computerSelection === 'scissors' && playerSelection === 'paper')
  {
    computerScore += 1;
    return [loseMsg, loseSummary, computerSelection, playerSelection];
  }

  return [drawMsg, drawSummary, computerSelection, playerSelection];
}

function game() {
  setStartValues();

  // get user choice buttons
  const UserChoiceButtons = document.querySelectorAll('.user-selection-btn');

  // add event listeners to user choice buttons
  UserChoiceButtons.forEach((btn) => {
    btn.addEventListener('click', function () {
      userPlay(this.value);
    });
  });

  function checkScore() {
    if (userScore === 5 || computerScore === 5) {
      endGame();
    }
  }

  function endGame() {
    // close modal
    modal.style.display = 'block';
    // display game winner message
    if (userScore > computerScore) {
      msgGameContainer.textContent = `You Won!`;
    } else {
      msgGameContainer.textContent = `You Lost!`;
    }
  }

  function userPlay(userChoice) {
    // assign computer choice to variable
    const computerSelection = getcomputerSelection();
    // play round and assign round results values to array
    const roundResults = playRound(computerSelection, userChoice);

    // update message containers with round reslut messages
    msgRoundContainer.textContent = roundResults[0];
    msgRoundContainerSummary.textContent = roundResults[1];

    // update score containers with new scores
    userScoreContainer.textContent = userScore;
    computerScoreContainer.textContent = computerScore;

    // update player choice images with round result
    switch (userChoice) {
      case 'rock':
        userChoiceImg.src = rock;
        break;
      case 'paper':
        userChoiceImg.src = paper;
        break;
      case 'scissors':
        userChoiceImg.src = scissors;
        break;
      default:
        userChoiceImg.src = question;
    }

    // update computer choice images with round result
    switch (computerSelection) {
      case 'rock':
        computerChoiceImg.src = rock;
        break;
      case 'paper':
        computerChoiceImg.src = paper;
        break;
      case 'scissors':
        computerChoiceImg.src = scissors;
        break;
      default:
        computerChoiceImg.src = question;
    }

    // Check if either player has won yet
    checkScore();
  }
}

// Launch game
game();
