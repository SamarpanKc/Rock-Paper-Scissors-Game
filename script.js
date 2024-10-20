function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = ""; // Local variable

  if (randomNumber >= 0 && randomNumber <= 1 / 3) {
    computerMove = "Rock";
  } else if (randomNumber >= 1 / 3 && randomNumber <= 2 / 3) {
    computerMove = "Paper";
  } else {
    computerMove = "Scissors";
  }

  return computerMove;
}

let userWin = 0;
let computerWin = 0;

function paperL() {
  const computerMove = pickComputerMove();
  let result = '';

  if (computerMove === 'Rock') {
    result = 'You Win';
    userWin++;
  } else if (computerMove === 'Scissors') {
    result = 'You Lose';
    computerWin++;
  } else if (computerMove === 'Paper') {
    result = 'Game Tie';
  }

  updateResults(result, computerMove, 'Paper');
}

function ScissorsL() {
  const computerMove = pickComputerMove();
  let result = '';

  if (computerMove === 'Rock') {
    result = 'You Lose';
    computerWin++;
  } else if (computerMove === 'Scissors') {
    result = 'Game Tie';
  } else if (computerMove === 'Paper') {
    result = 'You Win';
    userWin++;
  }

  updateResults(result, computerMove, 'Scissors');
}

function RockL() {
  const computerMove = pickComputerMove();
  let result = '';

  if (computerMove === 'Rock') {
    result = 'Game Tie';
  } else if (computerMove === 'Scissors') {
    result = 'You Win';
    userWin++;
  } else if (computerMove === 'Paper') {
    result = 'You Lose';
    computerWin++;
  }

  updateResults(result, computerMove, 'Rock');
}

function updateResults(result, computerMove, userMove) {
  // console.log(`You: ${userWin}`);
  // console.log(`Computer: ${computerWin}`);
  document.getElementById('result').innerText = `\nComputer Choose ${computerMove} \n\n ${result}\n\n`;
  document.getElementById('comScr').innerText = `${computerWin}`;
  document.getElementById('youScr').innerText = `${userWin}`;
  
  if (computerWin == 5) {
    document.getElementById('result').innerText = 'Computer Won';
    userWin = 0; // Reset user wins
    computerWin = 0; // Reset computer wins
    
  } else if (userWin == 5) {
    document.getElementById('result').innerText = 'You Won';
    userWin = 0; // Reset user wins
    computerWin = 0; // Reset computer wins
  }
}


/* function endGame(){
  document.getElementById('result').innerText = 'Game Over';
  document.getElementById('comScr').innerText = '0';
  document.getElementById('youScr').innerText = '0';
  userWin = 0;
  computerWin = 0;
} */


