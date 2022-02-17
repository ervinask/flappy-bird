let line = document.querySelector('.line');
let hole = document.querySelector('.hole');
let bird = document.querySelector('.bird');
let jumps = 0;
let height = window.innerHeight;
let counter = 0;

let angleMin = 10;
let angleSpeed = 80;
let currentAngle = 0;

hole.addEventListener('animationiteration', function () {
  let randomHole = Math.random() * 60 + 5;
  hole.style.top = `${randomHole}vh`;
  counter++;
});

function gravity() {
  let birdPos = parseFloat(
    window.getComputedStyle(bird).getPropertyValue('top')
  );
  if (jumps == 0) bird.style.top = birdPos + 2 + 'px';
  let lineLeft = parseFloat(
    window.getComputedStyle(line).getPropertyValue('left')
  );
  let holeTop = parseFloat(
    window.getComputedStyle(hole).getPropertyValue('top')
  );
  if (lineLeft < 100 && (holeTop > birdPos || holeTop + 178 < birdPos)) {
    alert(`Score: ${counter}`);
    bird.style.top = `${200}px`;
    counter = 0;
  }
  if (birdPos > height) {
    alert(`Score: ${counter}`);
    bird.style.top = `${200}px`;
    counter = 0;
  }
}

setInterval(gravity, 7);

const jumpMax = 20;
const jumpSpeed = 10;

function jumping() {
  jumps = 1;
  let jumpCount = 0;
  let jumpInterval = setInterval(function () {
    let birdPos = parseFloat(
      window.getComputedStyle(bird).getPropertyValue('top')
    );
    let ratio = jumpCount / jumpMax;
    if (birdPos > 6) {
      bird.style.top = birdPos - jumpSpeed * (1 - ratio) + 'px';
      currentAngle = `rotate(${angleMin - angleSpeed * (1 - ratio)}`;
      bird.style.transform = currentAngle + 'deg';
    }
    if (jumpCount > jumpMax) {
      clearInterval(jumpInterval);
      jumps = 0;
      jumpCount = 0;
    }
    jumpCount++;
  }, 10);
}
