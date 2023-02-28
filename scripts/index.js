const target = Math.floor(Math.random() * 100) + 1;
let guess;
let tries = 10;

const guessInput = document.querySelector("#guess");
const submitButton = document.querySelector("#submit");
const message = document.querySelector("#message");
const triesLeft = document.querySelector("#tries");

submitButton.addEventListener("click", function () {
  guess = Number(guessInput.value);
  tries--;

  if (guess === target) {
    message.textContent = "You win! The number was " + target;
    submitButton.disabled = true;
    guessInput.disabled = true;
  } else if (tries === 0) {
    message.textContent = "You lose! The number was " + target;
    submitButton.disabled = true;
    guessInput.disabled = true;
  } else if (guess > target) {
    message.textContent = "Too high. Guess again.";
  } else if (guess < target) {
    message.textContent = "Too low. Guess again.";
  }

  triesLeft.textContent = "Tries left: " + tries;
});
