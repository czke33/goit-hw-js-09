const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

stopBtn.setAttribute('disabled', '');

let timer = null;

startBtn.addEventListener('click', () => {
  startBtn.setAttribute('disabled', '');
  stopBtn.removeAttribute('disabled');
  timer = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

stopBtn.addEventListener('click', () => {
  startBtn.removeAttribute('disabled');
  stopBtn.setAttribute('disabled', '');
  clearInterval(timer);
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
