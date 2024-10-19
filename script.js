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

function paperL() {
  const computerMove = pickComputerMove();
  let result = '';

  if (computerMove === 'Rock') {
    result = 'You Win';
  } else if (computerMove === 'Scissors') {
    result = 'You Lose';
  } else if (computerMove === 'Paper') {
    result = 'Game Tie';
  }

  document.getElementById('result').innerText = `You Choose > Paper\nComputer Choose > ${computerMove}\n >> ${result}`;
}

function ScissorsL() {
  const computerMove = pickComputerMove();
  let result = '';

  if (computerMove === 'Rock') {
    result = 'You Lose';
  } else if (computerMove === 'Scissors') {
    result = 'Game Tie';
  } else if (computerMove === 'Paper') {
    result = 'You Win';
  }

  document.getElementById('result').innerText = `You Choose > Scissors\nComputer Choose > ${computerMove}\n >> ${result}`;
}

function RockL() {
  const computerMove = pickComputerMove();
  let result = '';

  if (computerMove === 'Rock') {
    result = 'Game Tie';
  } else if (computerMove === 'Scissors') {
    result = 'You Win';
  } else if (computerMove === 'Paper') {
    result = 'You Lose';
  }

  document.getElementById('result').innerText = `You Choose > Rock\n\nComputer Choose > ${computerMove}\n\n >> ${result}`;
}
