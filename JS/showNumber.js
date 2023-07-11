const text = document.querySelector('.showNumber_footer');
const number = document.querySelector('.number_footer');
const number1 = document.querySelector('.number_footer1');

const textEm = document.querySelector('.showEmail_footer');
const email = document.querySelector('.email_footer');

function showNumber() {
  number.style.display = 'flex';
  number1.style.display = 'flex';
  text.style.display = 'none';
}

function showEmail() {
  email.style.display = 'flex';
  textEm.style.display = 'none';
}