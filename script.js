import { startConfetti, removeConfetti, stopConfetti } from './confetti.js';

const playerScoreEL = document.getElementById('playerScore');
const playerChoiceEL = document.getElementById('playerChoice');
const computerScoreEL = document.getElementById('computerScore');
const computerChoiceEL = document.getElementById('computerChoice');
const resultText = document.getElementById('resultText');

const playerRock = document.getElementById('playerRock');
const playerPaper = document.getElementById('playerPaper');
const playerScissor = document.getElementById('playerScissor');
const playerSpock = document.getElementById('playerSpock');
const playerLizard = document.getElementById('playerLizard');

const computerRock = document.getElementById('computerRock');
const computerPaper = document.getElementById('computerPaper');
const computerScissor = document.getElementById('computerScissor');
const computerSpock = document.getElementById('computerSpock');
const computerLizard = document.getElementById('computerLizard');

const allGameicons = document.querySelectorAll('.far');

const choices = {
  rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
  paper: { name: 'Paper', defeats: ['rock', 'spock'] },
  scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
  lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
  spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
};

let computerChoice = '';
let playerScore = 0;
let computerScore = 0;

const resetChoice = function () {
  allGameicons.forEach(item => item.classList.remove('selected'));
  removeConfetti();
};

const computerPicks = function () {
  const choice = Math.random();

  if (choice < 0.2) {
    computerChoice = 'rock';
  } else if (choice <= 0.4) {
    computerChoice = 'paper';
  } else if (choice <= 0.6) {
    computerChoice = 'scissors';
  } else if (choice <= 0.8) {
    computerChoice = 'lizard';
  } else {
    computerChoice = 'spock';
  }
};

const displayComputerchoice = function () {
  switch (computerChoice) {
    case 'rock':
      computerRock.classList.add('selected');
      computerChoiceEL.textContent = ' ---Rock';
      break;
    case 'paper':
      computerPaper.classList.add('selected');
      computerChoiceEL.textContent = ' ---Paper';
      break;
    case 'scissors':
      computerScissor.classList.add('selected');
      computerChoiceEL.textContent = ' ---Scissors';
      break;
    case 'lizard':
      computerLizard.classList.add('selected');
      computerChoiceEL.textContent = ' ---Lizard';
      break;
    case 'spock':
      computerSpock.classList.add('selected');
      computerChoiceEL.textContent = ' ---Spock';
      break;
  }
};

const updateResult = function (playerChoice) {
  if (playerChoice === computerChoice) {
    resultText.textContent = "It's a tie";
    stopConfetti();
  } else {
    const choice = choices[playerChoice];
    if (choice.defeats.indexOf(computerChoice) > -1) {
      playerScore++;
      playerScoreEL.textContent = playerScore;
      resultText.textContent = 'You won!';
      startConfetti();
    } else {
      computerScore++;
      computerScoreEL.textContent = computerScore;
      resultText.textContent = 'You lost!';
      stopConfetti();
    }
  }
};

const checkResult = function (playerChoice) {
  resetChoice();
  computerPicks();
  displayComputerchoice();
  updateResult(playerChoice);
};

const select = function (playerChoice) {
  checkResult(playerChoice);
  switch (playerChoice) {
    case 'rock':
      playerRock.classList.add('selected');
      playerChoiceEL.textContent = ' ---Rock';
      break;
    case 'paper':
      playerPaper.classList.add('selected');
      playerChoiceEL.textContent = ' ---Paper';
      break;
    case 'scissors':
      playerScissor.classList.add('selected');
      playerChoiceEL.textContent = ' ---Scissors';
      break;
    case 'lizard':
      playerLizard.classList.add('selected');
      playerChoiceEL.textContent = ' ---Lizard';
      break;
    case 'spock':
      playerSpock.classList.add('selected');
      playerChoiceEL.textContent = ' ---Spock';
      break;
  }
};

window.select = select;

const resetAll = function () {
  playerScore = 0;
  computerScore = 0;
  playerChoiceEL.textContent = '';
  computerChoiceEL.textContent = '';
  playerScoreEL.textContent = playerScore;
  computerScoreEL.textContent = computerScore;
  resultText.textContent = '';
  resetChoice();
};

resetAll();

window.resetAll = resetAll;
