let timer;
let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;

function startStop() {
    if (!timer) {
        timer = setInterval(run, 10);
        document.querySelector('button[name="start"]').textContent = "Parar";
    } else {
        clearInterval(timer);
        timer = false;
        document.querySelector('button[name="start"]').textContent = "Iniciar";
    }
}

function reset() {
    clearInterval(timer);
    timer = false;
    document.querySelector('button[name="start"]').textContent = "Iniciar";
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    document.getElementById("hours").innerText = "00";
    document.getElementById("minutes").innerText = "00";
    document.getElementById("seconds").innerText = "00";
    document.getElementById("milliseconds").innerText = "00";
}

function run() {
    milliseconds++;
    if (milliseconds >= 100) {
        milliseconds = 0;
        seconds++;
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
            if (minutes >= 60) {
                minutes = 0;
                hours++;
            }
        }
    }

    document.getElementById("hours").innerText = pad(hours);
    document.getElementById("minutes").innerText = pad(minutes);
    document.getElementById("seconds").innerText = pad(seconds);
    document.getElementById("milliseconds").innerText = pad(milliseconds);
}

function pad(value) {
    return value < 10 ? "0" + value : value;
}




