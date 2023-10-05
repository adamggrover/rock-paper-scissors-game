// import images
import rock from './assets/icons/rock.png';
import paper from './assets/icons/paper.png';
import scissors from './assets/icons/scissors.png';
import question from './assets/icons/question.png';

// initilise variables
const choices = ['rock', 'paper', 'scissors'];
let userScore = 0;
let computerScore = 0;

// randomly select computerr choice from array
function getcomputerSelection() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(computerSelection, playerSelection) {
  // messages to be returned to user at the end of the round
  const winMsg = `You win the round!`;
  const winSummary = `${playerSelection} beats ${computerSelection}`;
  const loseMsg = `You lose the round!`;
  const loseSummary = `${computerSelection} beats ${playerSelection}`;
  const drawMsg = `Tie round`;
  const drawSummary = `You both chose ${playerSelection}`;

  if (computerSelection === 'rock' && playerSelection === 'paper') {
    userScore += 1;
    return [winMsg, winSummary, computerSelection, playerSelection];
  }
  if (computerSelection === 'rock' && playerSelection === 'scissors') {
    computerScore += 1;
    return [loseMsg, loseSummary, computerSelection, playerSelection];
  }
  if (computerSelection === 'paper' && playerSelection === 'scissors') {
    userScore += 1;
    return [winMsg, winSummary, computerSelection, playerSelection];
  }
  if (computerSelection === 'paper' && playerSelection === 'rock') {
    computerScore += 1;
    return [loseMsg, loseSummary, computerSelection, playerSelection];
  }
  if (computerSelection === 'scissors' && playerSelection === 'rock') {
    userScore += 1;
    return [winMsg, winSummary, computerSelection, playerSelection];
  }
  if (computerSelection === 'scissors' && playerSelection === 'paper') {
    computerScore += 1;
    return [loseMsg, loseSummary, computerSelection, playerSelection];
  }

  return [drawMsg, drawSummary, computerSelection, playerSelection];
}

function game() {
  // set both player scores to 0
  userScore = 0;
  computerScore = 0;

  // add event listeners to choice buttons
  const UserChoiceButtons = document.querySelectorAll('.user-selection-btn');

  // target items
  const msgRoundContainer = document.querySelector('.msg-round-container');
  const msgRoundContainerSummary = document.querySelector(
    '.msg-round-container-summary'
  );
  const msgGameContainer = document.querySelector('.msg-game-container');
  const scoreContainer = document.querySelector('.score-container');
  const userScoreContainer = document.querySelector('.user-score-text');
  const computerScoreContainer = document.querySelector('.computer-score-text');
  const userChoiceImg = document.querySelector('.user-choice-img');
  const computerChoiceImg = document.querySelector('.computer-choice-img');

  function endGame() {
    if (userScore > computerScore) {
      msgGameContainer.textContent = `Congratulations! You won the game ${userScore} rounds to ${computerScore}`;
    } else {
      msgGameContainer.textContent = `You lost the game ${computerScore} rounds to ${userScore}`;
    }
  }

  function checkScore() {
    if (userScore === 5 || computerScore === 5) {
      endGame();
    }
  }

  function userPlay(userChoice) {
    if (userScore < 5 && computerScore < 5) {
      const computerSelection = getcomputerSelection(); // assign computer choice to variable

      const roundResults = playRound(computerSelection, userChoice);

      msgRoundContainer.textContent = roundResults[0];
      msgRoundContainerSummary.textContent = roundResults[1];

      userScoreContainer.textContent = userScore;

      computerScoreContainer.textContent = computerScore;
      computerChoiceImg.src = `./assets/icons/${roundResults[2]}.png`;

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

      checkScore();
    }

    // display running game score
  }

  UserChoiceButtons.forEach((btn) => {
    btn.addEventListener('click', function () {
      userPlay(this.value);
    });
  });
}
game();

// display results
