'use strict';

function guessMyNumber() {
  const message_p = document.querySelector('.message');
  const number_div = document.querySelector('.number');
  const guess_input = document.querySelector('.guess');
  const check_btn = document.querySelector('.check');
  const secretNum = Math.trunc(Math.random() * 20) + 1;

  /*
  console.log(message_p.textContent);
  message_p.textContent = 'Congratulation';
  
  number_div.textContent = 28;
  guess_input.value = 13;
  console.log(guess_input.value, typeof guess_input.value);
  */
  check_btn.addEventListener('click', function (event) {
    // console.log(event);
    if (!guess_input.value) {
      message_p.textContent = 'No Number';
    }
  });
}

guessMyNumber();
