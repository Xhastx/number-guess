const guessInput = document.getElementById('guess');
const submitButton = document.getElementById('submit');
const message = document.getElementById('message');

let randomNumber = Math.floor(Math.random() * 100) + 1;

submitButton.addEventListener('click', () => {
  let guess = parseInt(guessInput.value);

  if (guess === randomNumber) {
    message.textContent = ' finally dipshit u guessed it';
  } else if (guess < randomNumber) {
    message.textContent = 'Too low! Try again.';
  } else {
    message.textContent = 'Too high! Try again.';
  }
});