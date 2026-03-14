const button = document.getElementById("start");
const span = document.getElementById("result");
let leds = [];
let count = 0;
let interval;
let startTime;
let endTime;

leds.push(document.getElementById("led1"));
leds.push(document.getElementById("led2"));
leds.push(document.getElementById("led3"));
leds.push(document.getElementById("led4"));

function start() {
  interval = setInterval(turnOn, 500);
  button.onclick = gameover;

  button.textContent = "Parar";
}

function turnOn() {
  let timer = Math.floor(Math.random() * 2000);
  leds[count].className = "circle on";

  count++;

  if (count === leds.length) {
    clearInterval(interval);
    setTimeout(turnOff, timer);
  }
}

function turnOff() {
  for (let i = 0; i < leds.length; i++) {
    leds[i].className = "circle off";
  }

  startTime = performance.now();
  count = 0;
  button.onclick = stop;
}

function stop() {
  endTime = performance.now();
  let result = (endTime - startTime).toFixed(0);
  span.innerText = result + " ms";
  button.onclick = restart;
  button.textContent = "Reiniciar";
}

function restart() {
  button.onclick = start;
  span.innerText = "";
  button.textContent = "Iniciar";
  count = 0;
  for (let i = 0; i < leds.length; i++) {
    leds[i].className = "circle off";
  }
}

function gameover() {
  span.innerText = "Muito cedo!";
  clearInterval(interval);
  button.onclick = restart;
  button.textContent = "Reiniciar";
}
