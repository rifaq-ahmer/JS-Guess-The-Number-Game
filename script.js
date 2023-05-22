'use strict';
const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;
document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  if (!guess) {
    document.querySelector('.message').textContent =
      'Please Enter any Number 🥲';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number..!';
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = '📈 Too High...!';
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = '📉 Too Low...!';
  }
});
