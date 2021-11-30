const turnOn = document.getElementById('turnOn')
const turnOff = document.getElementById('turnOff')
const lamp = document.getElementById('lamp')

function lampOn() {
  lamp.src = './img/Ligada.png'
}

function lampOff() {
  lamp.src = './img/Desligada.png'
}

turnOn.addEventListener('click', lampOn)
turnOff.addEventListener('click', lampOff)
