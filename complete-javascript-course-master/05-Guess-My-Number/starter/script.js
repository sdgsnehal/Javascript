'use strict';
const number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);

  // when there is no number
  if (!guess) {
    document.querySelector('.message').textContent = '😢 No Number';
  } else if (guess === number) {
    document.querySelector('.number').textContent = number;
    document.querySelector('.message').textContent = '😍 Correct no';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess !== number) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > number ? '😒 To High' : '😜 To Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😒 You Lost the Game';
      document.querySelector('.score').textContent = 0;
    }
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  // } else if (guess > number) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '😒 To High';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '😒 You Lost the Game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // } else if (guess < number) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '😜 To Low';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '😒 You Lost the Game';
  //     document.querySelector('.guess').textContent = '';
  //   }
  // }
});
// coding challenge 1
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  const number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
