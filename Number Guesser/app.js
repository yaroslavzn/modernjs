/*
GAME FUNCTION
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if lose
- Let player choose to play again
*/

// Game value
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

// UI elements
const game = document.querySelector('#game');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessInput = document.querySelector('#guess-input');
const guessBtn = document.querySelector('#guess-btn');
const message = document.querySelector('.message');

// Set min and max number to UI elements
minNum.textContent = min;
maxNum.textContent = max;

// Add play again listener
game.addEventListener('mousedown', function(e) {
  if (e.target.className === 'play-again') {
    window.location.reload();
  }
});

// Add guessBtn eventListener
guessBtn.addEventListener('click', function() {
  let guess = parseInt(guessInput.value);

  // Validate
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}.`, 'red');
  } else {
    // Check if won
    if (guess === winningNum) {
      // Game over - won
      gameOver(true, `${winningNum} is correct. YOU WIN!`);
      playAgain();
    } else {
      guessesLeft -= 1;

      if (guessesLeft === 0) {
        // Game Over - lost
        gameOver(false, `Game Over, you lost, correct number was ${winningNum}`);
        playAgain();
      } else {
        // Game continues - next guess
        guessInput.value = '';
        guessInput.focus();
        setMessage(`${guess} is not correct. You have ${guessesLeft} guesses left.`, 'red');
      }
    }
  }
});


// Set message function
function setMessage(msg, color) {
  message.style.color = color;
  guessInput.style.borderColor = color;
  message.textContent = msg;
};

// Game over function
function gameOver(won, msg) {
  let color;
  won === true ? color = 'green' : color = 'red';
  // Input disable
  guessInput.disabled = true;
  // Set message
  setMessage(msg, color);
};

// Play again function
function playAgain() {
  guessBtn.value = 'Play Again';
  guessBtn.className += 'play-again';
};

// Get random number function
function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}