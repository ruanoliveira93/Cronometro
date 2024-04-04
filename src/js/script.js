const imgIniciar = document.querySelector('#start');
const imgResetar = document.querySelector('#stop');
const btnIniciar = document.getElementsByName('start');


let horas = 0;
let minutos = 0;
let segundos = 0;
let milissegundos = 0;
let intervalId;

function Iniciar() {

    milissegundos++;
    if (milissegundos === 100) {
        milissegundos = 0;
        segundos++;
        if (segundos === 60) {
            segundos = 0;
            minutos++;
            if (minutos === 60) {
                minutos = 0;
                horas++;
            }
        }
    }
    document.getElementById('cronometro').innerText = `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}.${milissegundos.toString().padStart(3, '0')}`;
}

document.getElementById('iniciar').addEventListener('click', () => {
    intervalId = setInterval(atualizarCronometro, 10);
});
document.getElementById('pausar').addEventListener('click', () => {
    clearInterval(intervalId);
});
document.getElementById('resetar').addEventListener('click', () => {
    clearInterval(intervalId);
    horas = 0;
    minutos = 0;
    segundos = 0;
    milissegundos = 0;
    document.getElementById('cronometro').innerText = '00:00:00.000';
});



//Se a variável for menor que 10, o elemento irá receber '0' mais a variável


function Parar() {
    clearInterval(tempo--);
}


function Resetar() {
    document.getElementById('hours').innerHTML = '00';
    document.getElementById('minutes').innerHTML = '00';
    document.getElementById('second').innerHTML = '00';
    document.getElementById('millisecond').innerHTML = '00';
}
function Press() {
    document.addEventListener('click', () => {
        document.getElementById('start').style.transform = 'translateY(33%)';
    })
}

function Realese() {
    document.removeEventListener('click', () => {
        document.getElementById('start').style.transform = 'translateY(0%)';
    })
}
