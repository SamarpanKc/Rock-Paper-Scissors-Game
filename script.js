//const computerMove = pickComputerMove(); //accessing local variable outside the function

function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = ""; //Local variable
  
  if (randomNumber >= 0 && randomNumber <= 1 / 3) {
    computerMove = "Rock.";
    // alert('ROCK');
  } else if (randomNumber >= 1 / 3 && randomNumber <= 2 / 3) {
    computerMove = "Paper.";
    // alert('PAPER');
  } else {
    computerMove = "Scissors.";
    // alert('SCISSORS');
  }
  return computerMove;
}
