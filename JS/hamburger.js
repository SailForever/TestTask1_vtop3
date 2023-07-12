const block_hamburger1=document.querySelector('.block_hamburger1');
const block_hamburger2=document.querySelector('.block_hamburger2');

function showHamburger(){
  if (block_hamburger1.style.display=='none'&&block_hamburger2.style.display=='none') {
    block_hamburger1.style.display='grid';
  }
  else {
    block_hamburger1.style.display='none';
    block_hamburger2.style.display='none';
  }
}
function showHamburger1(){
  if (block_hamburger2.style.display=='none') {
    block_hamburger1.style.display='none';
    block_hamburger2.style.display='grid';
  }
  else {
    block_hamburger2.style.display='none';
    block_hamburger1.style.display='none';
  }
}
function showBack1() {
  block_hamburger1.style.display='grid';
  block_hamburger2.style.display='none';
}
function showAway1() {
  block_hamburger1.style.display='none';
  block_hamburger2.style.display='none';
}