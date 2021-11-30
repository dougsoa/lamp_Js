const turnOn = document.getElementById('turnOn')
const turnOff = document.getElementById('turnOff')
const lamp = document.getElementById('lamp')

function lampOn() {
  lamp.src = './img/lampadaLigada.jpg'
}

function lampOff() {
  lamp.src = './img/lampadaDesligada.jpg'
}

turnOn.addEventListener('click', lampOn)
turnOff.addEventListener('click', lampOff)
