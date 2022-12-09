let main = document.getElementById('main');

centerAlign();
window.onresize = centerAlign;

function centerAlign() {
  let winHeight = document.documentElement.clientHeight;
  let winWidth = document.documentElement.clientWidth;
  
  main.style.left = Math.round(winWidth / 2 - main.offsetWidth / 2) + 'px';
  main.style.top = Math.round(winHeight / 2 - main.offsetHeight / 2) + 'px';
}

function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

let buttonNo = document.getElementById('button-no');

buttonNo.onmousemove = function() {
  buttonNo.style.top = randomInteger(0, 92) + '%';
  buttonNo.style.left = randomInteger(0, 90) + '%';
};

buttonNo.onmouseover = buttonNo.onmousemove;

let message = document.getElementById('message');

function AlertMsg() {
var buttonyes = confirm ("You are getting redirected. Click OK to continue.")
if (buttonyes)
window.location="https://wa.me/77475771926?text=Хорошо%20я%20готова%20на%20компромисс";
}
