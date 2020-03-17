const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

// console.log(breatheTime, holdTime);

breatheAnimation();

function breatheAnimation() {
  text.innerText = 'Inspire !';
  container.className = 'container grow';


  setTimeout(() => {
    text.innerText ='Retient !';

    setTimeout(() => {
      text.innerText = 'Expire !';
      container.className = 'container shrink';

    }, holdTime);
  }, breatheTime);
}

setInterval(breatheAnimation, totalTime);