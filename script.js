const button = document.getElementById("start");
const span = document.getElementById("result");
let leds = [];
let count = 0;
let interval;
let timeout;
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
    timeout = setTimeout(turnOff, timer);
  }
}

function turnOff() {
  for (let i = 0; i < leds.length; i++) {
    leds[i].className = "circle off";
  }
  count = 0;
  button.onclick = stop;
  startTime = performance.now();
}

function stop() {
  endTime = performance.now();
  let result = (endTime - startTime).toFixed(0);
  span.innerText = result + " ms";
  button.onclick = restart;
  button.textContent = "Reiniciar";
}

function restart() {
  reset();
}

function gameover() {
  button.onclick = restart;
  span.innerText = "Muito cedo!";
  clearInterval(interval);
  clearTimeout(timeout);
  button.textContent = "Reiniciar";
}

function reset() {
  clearInterval(interval);
  clearTimeout(timeout);

  count = 0;
  span.innerText = "";
  button.onclick = start;
  button.textContent = "Iniciar";

  for (let i = 0; i < leds.length; i++) {
    leds[i].className = "circle off";
  }
}
