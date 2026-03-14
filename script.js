
const button = document.getElementById('start')
var leds = []
var count = 0
leds.push(document.getElementById('led1'))
leds.push(document.getElementById('led2'))
leds.push(document.getElementById('led3'))
leds.push(document.getElementById('led4'))

var teste;


function start() {
    teste =  setInterval(turnOn, 1000)

    button.textContent = 'Acelerar'

}

function turnOn() {
    let timer = Math.floor(Math.random() * 2000)
    leds[count].className = 'circle on'

    count++

    if(count === 4){
        clearInterval(teste)        
        setTimeout(turnOff, timer)
    }
    
}

function turnOff() {

    for (let i = 0; i < 4; i++) {
        leds[count].className = 'circle off'
    }
}

