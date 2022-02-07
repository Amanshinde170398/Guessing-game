'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!';
// document.querySelector('.number').textContent = 10;
// document.querySelector('.score').textContent = 20;
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.number').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const wrongGuess = function (guess) {
  score--;
  if (score == 0) {
    document.querySelector('.message').textContent = '😭 Game over!';
    document.querySelector('.score').textContent = score;
  } else {
    document.querySelector('.score').textContent = score;
    guess > secretNumber
      ? (document.querySelector('.message').textContent = '📉 Too High')
      : (document.querySelector('.message').textContent = '📈 Too Low');
  }
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No Number';
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.message').textContent = '🎉 Correct';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
      console.log(document.querySelector('.highscore').textContent);
    }
  } else {
    wrongGuess(guess);
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
});
