const block_hamburger1 = document.querySelector('.block_hamburger1');
const block_hamburger2 = document.querySelector('.block_hamburger2');
const block_hamburger3 = document.querySelector('.block_hamburger3');
const block_hamburger3_1 = document.querySelector('.block_hamburger3_1');
const block_hamburger4 = document.querySelector('.block_hamburger4');
const block_hamburger4_1 = document.querySelector('.block_hamburger4_1');
const block_hamburger5 = document.querySelector('.block_hamburger5');
const block_hamburger5_1 = document.querySelector('.block_hamburger5_1');
const block_hamburger5_2 = document.querySelector('.block_hamburger5_2');
const block_hamburger6 = document.querySelector('.block_hamburger6');

function showHamburger() {
  if (block_hamburger1.style.display == 'none' &&
    block_hamburger2.style.display == 'none' &&
    block_hamburger3.style.display == 'none' &&
    block_hamburger3_1.style.display == 'none' &&
    block_hamburger4.style.display == 'none' &&
    block_hamburger4_1.style.display == 'none' &&
    block_hamburger5.style.display == 'none' &&
    block_hamburger5_1.style.display == 'none' &&
    block_hamburger5_2.style.display == 'none' &&
    block_hamburger6.style.display == 'none') {
    block_hamburger1.style.display = 'grid';
  }
  else {
    block_hamburger1.style.display = 'none';
    block_hamburger2.style.display = 'none';
    block_hamburger3.style.display = 'none';
    block_hamburger3_1.style.display = 'none';
    block_hamburger4.style.display = 'none';
    block_hamburger4_1.style.display = 'none';
    block_hamburger5.style.display = 'none';
    block_hamburger5_1.style.display = 'none';
    block_hamburger5_2.style.display = 'none';
    block_hamburger6.style.display = 'none';
  }
}
function showHamburger1() {
  if (block_hamburger2.style.display == 'none') {
    block_hamburger1.style.display = 'none';
    block_hamburger2.style.display = 'grid';
  }
  else {
    block_hamburger2.style.display = 'none';
    block_hamburger1.style.display = 'none';
  }
}
function showHamburger2() {
  if (block_hamburger3.style.display == 'none') {
    block_hamburger1.style.display = 'none';
    block_hamburger3.style.display = 'grid';
  }
  else {
    block_hamburger3.style.display = 'none';
    block_hamburger1.style.display = 'none';
  }
}
function showHamburger3_1() {
  if (block_hamburger3_1.style.display == 'none') {
    block_hamburger1.style.display = 'none';
    block_hamburger2.style.display = 'none';
    block_hamburger3.style.display = 'none';
    block_hamburger3_1.style.display = 'grid';
  }
  else {
    block_hamburger3_1.style.display = 'none';
    block_hamburger2.style.display = 'none';
    block_hamburger3.style.display = 'none';
    block_hamburger1.style.display = 'none';
  }
}
function showHamburger4() {
  if (block_hamburger4.style.display == 'none') {
    block_hamburger1.style.display = 'none';
    block_hamburger4.style.display = 'grid';
  }
  else {
    block_hamburger4.style.display = 'none';
    block_hamburger1.style.display = 'none';
  }
}
function showHamburger4_1() {
  if (block_hamburger4_1.style.display == 'none') {
    block_hamburger1.style.display = 'none';
    block_hamburger3.style.display = 'none';
    block_hamburger4.style.display = 'none';
    block_hamburger4_1.style.display = 'grid';
  }
  else {
    block_hamburger4_1.style.display = 'none';
    block_hamburger3.style.display = 'none';
    block_hamburger4.style.display = 'none';
    block_hamburger1.style.display = 'none';
  }
}
function showHamburger5() {
  if (block_hamburger5.style.display == 'none') {
    block_hamburger1.style.display = 'none';
    block_hamburger5.style.display = 'grid';
  }
  else {
    block_hamburger5.style.display = 'none';
    block_hamburger1.style.display = 'none';
  }
}
function showHamburger5_1() {
  if (block_hamburger5_1.style.display == 'none') {
    block_hamburger1.style.display = 'none';
    block_hamburger3.style.display = 'none';
    block_hamburger4.style.display = 'none';
    block_hamburger5.style.display = 'none';
    block_hamburger5_1.style.display = 'grid';
  }
  else {
    block_hamburger5_1.style.display = 'none';
    block_hamburger3.style.display = 'none';
    block_hamburger4.style.display = 'none';
    block_hamburger5.style.display = 'none';
    block_hamburger1.style.display = 'none';
  }
}
function showHamburger5_2() {
  if (block_hamburger5_2.style.display == 'none') {
    block_hamburger1.style.display = 'none';
    block_hamburger3.style.display = 'none';
    block_hamburger4.style.display = 'none';
    block_hamburger5.style.display = 'none';
    block_hamburger5_2.style.display = 'grid';
  }
  else {
    block_hamburger5_2.style.display = 'none';
    block_hamburger3.style.display = 'none';
    block_hamburger4.style.display = 'none';
    block_hamburger5.style.display = 'none';
    block_hamburger1.style.display = 'none';
  }
}
function showHamburger6() {
  if (block_hamburger6.style.display == 'none') {
    block_hamburger1.style.display = 'none';
    block_hamburger6.style.display = 'grid';
  }
  else {
    block_hamburger6.style.display = 'none';
    block_hamburger1.style.display = 'none';
  }
}
function showBack1() {
  block_hamburger1.style.display = 'grid';
  block_hamburger2.style.display = 'none';
}
function showBack2() {
  block_hamburger1.style.display = 'grid';
  block_hamburger3.style.display = 'none';
}
function showBack3_1() {
  block_hamburger3.style.display = 'grid';
  block_hamburger3_1.style.display = 'none';
}
function showBack4() {
  block_hamburger1.style.display = 'grid';
  block_hamburger4.style.display = 'none';
}
function showBack4_1() {
  block_hamburger4.style.display = 'grid';
  block_hamburger4_1.style.display = 'none';
}
function showBack5() {
  block_hamburger1.style.display = 'grid';
  block_hamburger5.style.display = 'none';
}
function showBack5_1() {
  block_hamburger5.style.display = 'grid';
  block_hamburger5_1.style.display = 'none';
}
function showBack5_2() {
  block_hamburger5.style.display = 'grid';
  block_hamburger5_2.style.display = 'none';
}
function showBack6() {
  block_hamburger1.style.display = 'grid';
  block_hamburger6.style.display = 'none';
}
function showAway() {
  block_hamburger1.style.display = 'none';
  block_hamburger2.style.display = 'none';
  block_hamburger3.style.display = 'none';
  block_hamburger3_1.style.display = 'none';
  block_hamburger4.style.display = 'none';
  block_hamburger4_1.style.display = 'none';
  block_hamburger5.style.display = 'none';
  block_hamburger5_1.style.display = 'none';
  block_hamburger5_2.style.display = 'none';
  block_hamburger6.style.display = 'none';
}